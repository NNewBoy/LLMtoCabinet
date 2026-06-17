import json
import logging
import asyncio
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from agent.cabinet_agent import get_or_create_agent
from agent.tools import get_manager
from engine.cabinet_manager import CabinetManager
from utils.serialization import cabinet_to_dict, json_to_cabinet
from config import ENABLE_INTERFERENCE_CHECK

logger = logging.getLogger("cabinet3d.websocket")

router = APIRouter()


class ConnectionManager:
    """WebSocket 连接管理器"""

    def __init__(self):
        self._connections: dict[str, list[WebSocket]] = {}

    async def connect(self, project_id: str, ws: WebSocket):
        await ws.accept()
        if project_id not in self._connections:
            self._connections[project_id] = []
        self._connections[project_id].append(ws)
        logger.info(f"WebSocket 连接建立: project={project_id}, 当前连接数={len(self._connections[project_id])}")

    def disconnect(self, project_id: str, ws: WebSocket):
        if project_id in self._connections:
            if ws in self._connections[project_id]:
                self._connections[project_id].remove(ws)
                logger.info(f"WebSocket 连接断开: project={project_id}, 剩余连接数={len(self._connections[project_id])}")

    async def send_to_project(self, project_id: str, message: dict):
        if project_id in self._connections:
            for ws in self._connections[project_id]:
                try:
                    await ws.send_json(message)
                except Exception:
                    pass

    async def broadcast(self, message: dict):
        for connections in self._connections.values():
            for ws in connections:
                try:
                    await ws.send_json(message)
                except Exception:
                    pass


ws_manager = ConnectionManager()


def _format_tool_thinking(tool_name: str, tool_input: dict) -> str:
    """将工具调用格式化为可读的思考状态描述"""
    if not tool_name:
        return ""

    # 工具名称到中文描述的映射
    TOOL_LABELS = {
        "query_cabinet": "查询柜子结构",
        "add_component": "添加组件",
        "remove_component": "删除组件",
        "modify_component": "修改组件属性",
        "undo_redo": "撤销/重做操作",
        "check_interference": "检查干涉",
        "commit_changes": "保存编辑结果",
    }

    label = TOOL_LABELS.get(tool_name, tool_name)

    if tool_name == "query_cabinet":
        detail = tool_input.get("detail_level", "summary")
        comp_id = tool_input.get("component_id")
        if comp_id:
            return f"🔍 正在查询组件 {comp_id} 的详细信息..."
        return f"🔍 正在查询柜子结构（{detail}）..."

    elif tool_name == "add_component":
        comp_type = tool_input.get("type", "组件")
        name = tool_input.get("name", "")
        return f"➕ 正在添加{comp_type}「{name}」..."

    elif tool_name == "remove_component":
        comp_id = tool_input.get("component_id", "")
        return f"🗑️ 正在删除组件 {comp_id}..."

    elif tool_name == "modify_component":
        target = tool_input.get("target_id", "")
        props = tool_input.get("properties", {})
        prop_keys = "、".join(props.keys()) if props else "属性"
        return f"✏️ 正在修改 {target} 的{prop_keys}..."

    elif tool_name == "undo_redo":
        action = tool_input.get("action", "")
        action_label = "撤销" if action == "undo" else "重做"
        return f"↩️ 正在执行{action_label}操作..."

    elif tool_name == "check_interference":
        return "🔍 正在检查组件干涉..."

    elif tool_name == "commit_changes":
        desc = tool_input.get("description", "")
        return f"💾 正在保存编辑结果：{desc}..."

    return f"⚙️ 正在执行：{label}..."


@router.websocket("/ws/{project_id}")
async def websocket_endpoint(ws: WebSocket, project_id: str):
    await ws_manager.connect(project_id, ws)

    # 页面初始化时：manager 有数据则直接用，否则从数据库加载
    manager = get_manager(project_id)
    if manager.cabinet is None:
        logger.info(f"从数据库加载项目: {project_id}")
        # 尝试从数据库加载
        from database.connection import async_session
        from models.database import Project
        from sqlalchemy import select
        async with async_session() as session:
            result = await session.execute(select(Project).where(Project.id == project_id))
            project = result.scalar_one_or_none()
            if project:
                manager.load(json_to_cabinet(project.cabinet_json))
                logger.info(f"成功加载项目: {project_id}")
            else:
                manager.load_default()
                logger.info(f"项目不存在，加载默认模板: {project_id}")

    await ws.send_json({
        "type": "cabinet_update",
        "cabinet": cabinet_to_dict(manager.cabinet),
    })

    try:
        while True:
            data = await ws.receive_text()
            message = json.loads(data)
            msg_type = message.get("type")
            logger.info(f"收到 WebSocket 消息: type={msg_type}, project={project_id}")

            if msg_type == "chat_message":
                text = message.get("text", "")
                if not text:
                    continue

                logger.info(f"用户消息: {text}")

                # 发送思考状态
                await ws.send_json({"type": "agent_thinking", "content": "正在分析您的指令..."})

                try:
                    # 复用已有 Agent（保持对话连续性）
                    agent = get_or_create_agent(project_id)

                    # 查询最新柜子信息，注入到用户消息中作为上下文
                    # Agent会判断是否需要调用查询接口
                    # cabinet_info = manager.query(detail_level="summary")
                    # context_prefix = f"[当前柜子状态]\n{json.dumps(cabinet_info, ensure_ascii=False)}\n\n"
                    # enhanced_text = context_prefix + text
                    enhanced_text = text

                    # 使用 thread_id 维护对话历史
                    # 开启干涉检查时，Agent 调用次数增多，需要提高递归上限
                    recursion_limit = 200 if ENABLE_INTERFERENCE_CHECK else 50
                    agent_config = {
                        "recursion_limit": recursion_limit,
                        "configurable": {"thread_id": project_id},
                    }

                    # 使用流式调用，同时收集最终响应
                    response_content = ""
                    async for event in agent.astream_events(
                        {"messages": [{"role": "user", "content": enhanced_text}]},
                        version="v2",
                        config=agent_config,
                    ):
                        kind = event.get("event")
                        if kind == "on_chat_model_stream":
                            chunk = event.get("data", {}).get("chunk")
                            if chunk and hasattr(chunk, "content") and chunk.content:
                                response_content += chunk.content
                                await ws.send_json({
                                    "type": "agent_thinking",
                                    "content": chunk.content,
                                })
                        elif kind == "on_tool_start":
                            # 工具开始调用：推送思考状态，让用户知道 Agent 正在执行什么操作
                            tool_name = event.get("name", "")
                            tool_input = event.get("data", {}).get("input", {})
                            # 生成可读的思考描述
                            thinking_desc = _format_tool_thinking(tool_name, tool_input)
                            if thinking_desc:
                                await ws.send_json({
                                    "type": "agent_status",
                                    "content": thinking_desc,
                                })

                    logger.info(f"Agent 响应完成: {response_content[:100]}...")

                    # 发送更新后的柜子模型
                    if manager.cabinet:
                        await ws.send_json({
                            "type": "cabinet_update",
                            "cabinet": cabinet_to_dict(manager.cabinet),
                        })

                except Exception as e:
                    logger.error(f"Agent 执行失败: {str(e)}", exc_info=True)
                    await ws.send_json({
                        "type": "error",
                        "code": "AGENT_ERROR",
                        "message": f"Agent 执行失败: {str(e)}",
                    })

                await ws.send_json({"type": "stream_end"})

            elif msg_type == "request_sync":
                if manager.cabinet:
                    await ws.send_json({
                        "type": "cabinet_update",
                        "cabinet": cabinet_to_dict(manager.cabinet),
                    })

    except WebSocketDisconnect:
        ws_manager.disconnect(project_id, ws)
        logger.info(f"WebSocket 客户端断开: {project_id}")
    except Exception as e:
        logger.error(f"WebSocket 错误: {str(e)}", exc_info=True)
        ws_manager.disconnect(project_id, ws)
        try:
            await ws.send_json({"type": "error", "code": "WS_ERROR", "message": str(e)})
        except Exception:
            pass
