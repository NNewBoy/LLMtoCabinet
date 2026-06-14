from deepagents import create_deep_agent
from langchain.chat_models import init_chat_model
from agent.tools import (
    query_cabinet as _query_cabinet,
    add_component as _add_component,
    remove_component as _remove_component,
    modify_component as _modify_component,
    undo_redo as _undo_redo,
)
from config import LLM_MODEL, LLM_API_KEY, LLM_BASE_URL, SKILLS_DIR

CABINET_SYSTEM_PROMPT = """
你是一个专业的柜子家具设计助手。你可以帮助用户通过自然语言来编辑柜子的3D模型。

## 你的能力
- 查看柜子当前的结构和属性
- 添加新的板件或组件（隔板、门板、抽屉等）
- 删除已有的板件或组件
- 修改板件的尺寸、位置、材料、颜色等属性
- 撤销和重做编辑操作

## 操作流程
- 编辑前，先调用 query_cabinet 了解当前柜子结构
- 编辑后，简要说明做了什么修改
- 如果用户的指令不明确，主动询问确认
- 对于无法执行的操作，说明原因
"""


def create_cabinet_agent(project_id: str):
    """为指定项目创建柜子编辑 Agent"""

    def query_cabinet(detail_level: str = "summary", component_id: str = None) -> dict:
        """查询当前柜子的结构信息、板件列表、尺寸等属性。detail_level: summary=概览, full=完整信息。component_id: 指定查询的组件ID。"""
        return _query_cabinet(project_id=project_id, detail_level=detail_level, component_id=component_id)

    def add_component(
        type: str, name: str, position: dict, dimensions: dict,
        material: str = "plywood", color: str = "#D2B48C", thickness: float = 18.0,
        parent_id: str = None,
    ) -> dict:
        """向柜子添加新的板件或组件。type: 组件类型(side_panel/shelf/door等), name: 名称, position: 位置{x,y,z}, dimensions: 尺寸{length,width,height}, material: 材料, color: 颜色hex, thickness: 板厚mm, parent_id: 父组件ID(可选,用于添加拉手等子组件到指定板件的children中)。"""
        return _add_component(project_id=project_id, type=type, name=name, position=position,
                              dimensions=dimensions, material=material, color=color, thickness=thickness,
                              parent_id=parent_id)

    def remove_component(component_id: str) -> dict:
        """从柜子中删除指定的板件或组件。component_id: 要删除的组件ID。"""
        return _remove_component(project_id=project_id, component_id=component_id)

    def modify_component(target_id: str, properties: dict) -> dict:
        """修改柜子或组件的属性。target_id: 修改目标ID, "cabinet"表示修改柜子整体。properties: 要修改的属性键值对{name,length,width,height,position,rotation,material,color,thickness}。"""
        return _modify_component(project_id=project_id, target_id=target_id, properties=properties)

    def undo_redo(action: str) -> dict:
        """撤销或重做上一步编辑操作。action: "undo"撤销 或 "redo"重做。"""
        return _undo_redo(project_id=project_id, action=action)

    tools = [query_cabinet, add_component, remove_component, modify_component, undo_redo]

    # 使用 init_chat_model 初始化模型实例，传入自定义 API Key 和 Base URL
    model = init_chat_model(
        model=f"openai:{LLM_MODEL}",
        api_key=LLM_API_KEY,
        base_url=LLM_BASE_URL,
    )

    agent = create_deep_agent(
        model=model,
        tools=tools,
        skills=[SKILLS_DIR],
        system_prompt=CABINET_SYSTEM_PROMPT,
    )

    return agent