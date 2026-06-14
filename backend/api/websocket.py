import json
import asyncio
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from agent.cabinet_agent import create_cabinet_agent
from agent.tools import get_manager
from engine.cabinet_manager import CabinetManager
from utils.serialization import cabinet_to_dict

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

    def disconnect(self, project_id: str, ws: WebSocket):
        if project_id in self._connections:
            self._connections[project_id].remove(ws)

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


@router.websocket("/ws/{project_id}")
async def websocket_endpoint(ws: WebSocket, project_id: str):
    await ws_manager.connect(project_id, ws)

    # 发送当前柜子状态（如果没有则加载默认柜子）
    manager = get_manager(project_id)
    if manager.cabinet is None:
        manager.load_default()
    await ws.send_json({
        "type": "cabinet_update",
        "cabinet": cabinet_to_dict(manager.cabinet),
    })

    try:
        while True:
            data = await ws.receive_text()
            message = json.loads(data)

            if message.get("type") == "chat_message":
                text = message.get("text", "")
                if not text:
                    continue

                # 发送思考状态
                await ws.send_json({"type": "agent_thinking", "content": "正在分析您的指令..."})

                try:
                    # 创建 Agent 并执行
                    agent = create_cabinet_agent(project_id)

                    # 使用流式调用，同时收集最终响应
                    response_content = ""
                    async for event in agent.astream_events(
                        {"messages": [{"role": "user", "content": text}]},
                        version="v2",
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

                    # 发送更新后的柜子模型
                    if manager.cabinet:
                        await ws.send_json({
                            "type": "cabinet_update",
                            "cabinet": cabinet_to_dict(manager.cabinet),
                        })

                except Exception as e:
                    await ws.send_json({
                        "type": "error",
                        "code": "AGENT_ERROR",
                        "message": f"Agent 执行失败: {str(e)}",
                    })

                await ws.send_json({"type": "stream_end"})

            elif message.get("type") == "request_sync":
                if manager.cabinet:
                    await ws.send_json({
                        "type": "cabinet_update",
                        "cabinet": cabinet_to_dict(manager.cabinet),
                    })

    except WebSocketDisconnect:
        ws_manager.disconnect(project_id, ws)
    except Exception as e:
        ws_manager.disconnect(project_id, ws)
        try:
            await ws.send_json({"type": "error", "code": "WS_ERROR", "message": str(e)})
        except Exception:
            pass