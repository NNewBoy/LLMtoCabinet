import logging
from deepagents import create_deep_agent
from langchain.chat_models import init_chat_model
from langgraph.checkpoint.memory import MemorySaver
from agent.tools import (
    query_cabinet as _query_cabinet,
    add_component as _add_component,
    remove_component as _remove_component,
    modify_component as _modify_component,
    undo_redo as _undo_redo,
    check_interference as _check_interference,
    commit_changes as _commit_changes,
)
from config import LLM_MODEL, LLM_API_KEY, LLM_BASE_URL, SKILLS_DIR, ENABLE_INTERFERENCE_CHECK

logger = logging.getLogger("cabinet3d.agent")

# 根据配置生成系统提示词
_base_prompt = """
你是一个专业的柜子家具设计助手。你可以帮助用户通过自然语言来编辑柜子的3D模型。

## 你的能力
- 查看柜子当前的结构和属性
- 添加新的板件或组件（隔板、单开门、双开门、抽屉等）
- 删除已有的板件或组件
- 修改板件的尺寸、位置、材料、颜色等属性
- 撤销和重做编辑操作
"""

_interference_check_prompt = """
- 检查组件间是否存在干涉（重叠）

## 操作流程
- 编辑前，先调用 query_cabinet 了解当前柜子结构
- 编辑后，简要说明做了什么修改
- 如果用户的指令不明确，主动询问确认
- 对于无法执行的操作，说明原因
- **编辑完成后，必须调用 check_interference 检查干涉，如有干涉则修复直至无干涉**
- **干涉检查通过后，调用 commit_changes 保存本次编辑结果**
"""

_no_interference_check_prompt = """
## 操作流程
- 编辑前，先调用 query_cabinet 了解当前柜子结构
- 编辑后，简要说明做了什么修改
- 如果用户的指令不明确，主动询问确认
- 对于无法执行的操作，说明原因
- **编辑完成后，调用 commit_changes 保存本次编辑结果**
"""

CABINET_SYSTEM_PROMPT = _base_prompt + (_interference_check_prompt if ENABLE_INTERFERENCE_CHECK else _no_interference_check_prompt)

# Agent 缓存：project_id -> agent 实例
_agents: dict[str, object] = {}


def _create_agent(project_id: str):
    """为指定项目创建柜子编辑 Agent（含 checkpointer）"""
    logger.info(f"创建 Agent: project={project_id}")

    def query_cabinet(detail_level: str = "summary", component_id: str = None) -> dict:
        """查询当前柜子的结构信息、板件列表、尺寸等属性。detail_level: summary=概览, full=完整信息。component_id: 指定查询的组件ID。"""
        logger.info(f"Agent 调用: query_cabinet(detail_level={detail_level}, component_id={component_id})")
        result = _query_cabinet(project_id=project_id, detail_level=detail_level, component_id=component_id)
        return result

    def add_component(
        type: str, name: str, position: dict, dimensions: dict,
        material: str = "plywood", color: str = "#D2B48C", thickness: float = 18.0,
        parent_id: str = None,
    ) -> dict:
        """向柜子添加新的板件或组件。type: 组件类型(side_panel/shelf/door等), name: 名称, position: 位置{x,y,z}, dimensions: 尺寸{length,width,height}, material: 材料, color: 颜色hex, thickness: 板厚mm, parent_id: 父组件ID(可选,用于添加拉手等子组件到指定板件的children中)。"""
        logger.info(f"Agent 调用: add_component(type={type}, name={name}, position={position})")
        result = _add_component(project_id=project_id, type=type, name=name, position=position,
                              dimensions=dimensions, material=material, color=color, thickness=thickness,
                              parent_id=parent_id)
        logger.info(f"添加结果: {result.get('message', result.get('error', '未知'))}")
        return result

    def remove_component(component_id: str) -> dict:
        """从柜子中删除指定的板件或组件。component_id: 要删除的组件ID。"""
        logger.info(f"Agent 调用: remove_component(component_id={component_id})")
        result = _remove_component(project_id=project_id, component_id=component_id)
        logger.info(f"删除结果: {result.get('message', result.get('error', '未知'))}")
        return result

    def modify_component(target_id: str, properties: dict, save_history: bool = True) -> dict:
        """修改柜子或组件的属性。target_id: 修改目标ID, "cabinet"表示修改柜子整体。properties: 要修改的属性键值对{name,length,width,height,position,rotation,material,color,thickness}。save_history: 是否保存历史记录（干涉修复时设为False）。"""
        logger.info(f"Agent 调用: modify_component(target_id={target_id}, properties={properties}, save_history={save_history})")
        result = _modify_component(project_id=project_id, target_id=target_id, properties=properties, save_history=save_history)
        logger.info(f"修改结果: {result.get('message', result.get('error', '未知'))}")
        return result

    def undo_redo(action: str) -> dict:
        """撤销或重做上一步编辑操作。action: "undo"撤销 或 "redo"重做。"""
        logger.info(f"Agent 调用: undo_redo(action={action})")
        result = _undo_redo(project_id=project_id, action=action)
        logger.info(f"操作结果: {result.get('message', result.get('error', '未知'))}")
        return result

    def check_interference() -> dict:
        """检查柜子各组件间是否存在干涉（重叠）。编辑操作后必须调用此函数检查干涉。"""
        logger.info(f"Agent 调用: check_interference()")
        result = _check_interference(project_id=project_id)
        logger.info(f"干涉检查结果: {result.get('message', '未知')}")
        return result

    def commit_changes(description: str = "编辑完成") -> dict:
        """提交保存快照。在编辑操作完成后调用，保存本次对话的编辑结果。description: 本次编辑的描述说明。"""
        logger.info(f"Agent 调用: commit_changes(description={description})")
        result = _commit_changes(project_id=project_id, description=description)
        logger.info(f"提交结果: {result.get('message', result.get('error', '未知'))}")
        return result

    # 根据配置决定是否添加干涉检查工具
    if ENABLE_INTERFERENCE_CHECK:
        tools = [query_cabinet, add_component, remove_component, modify_component, undo_redo, check_interference, commit_changes]
    else:
        tools = [query_cabinet, add_component, remove_component, modify_component, undo_redo, commit_changes]

    # 使用 init_chat_model 初始化模型实例，传入自定义 API Key 和 Base URL
    logger.info(f"初始化 LLM 模型: {LLM_MODEL}")
    model = init_chat_model(
        model=f"openai:{LLM_MODEL}",
        api_key=LLM_API_KEY,
        base_url=LLM_BASE_URL,
    )

    # 使用 MemorySaver 维护对话历史，支持连续对话
    checkpointer = MemorySaver()

    agent = create_deep_agent(
        model=model,
        tools=tools,
        skills=[SKILLS_DIR],
        system_prompt=CABINET_SYSTEM_PROMPT,
        checkpointer=checkpointer,
    )

    logger.info(f"Agent 创建完成: project={project_id}")
    return agent


def get_or_create_agent(project_id: str):
    """获取或创建项目对应的 Agent（复用已有实例以保持对话连续性）"""
    if project_id not in _agents:
        _agents[project_id] = _create_agent(project_id)
    else:
        logger.info(f"复用已有 Agent: project={project_id}")
    return _agents[project_id]


def clear_agent_history(project_id: str):
    """清空 Agent 对话历史（切换方案时调用）"""
    if project_id in _agents:
        del _agents[project_id]
        logger.info(f"已清空 Agent 对话历史: project={project_id}")
