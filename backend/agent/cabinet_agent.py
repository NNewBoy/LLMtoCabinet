from deepagents import create_deep_agent
from agent.tools import query_cabinet, add_component, remove_component, modify_component, undo_redo
from config import LLM_MODEL, SKILLS_DIR

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

    tools = [
        lambda **kwargs: query_cabinet(project_id=project_id, **kwargs),
        lambda **kwargs: add_component(project_id=project_id, **kwargs),
        lambda **kwargs: remove_component(project_id=project_id, **kwargs),
        lambda **kwargs: modify_component(project_id=project_id, **kwargs),
        lambda **kwargs: undo_redo(project_id=project_id, **kwargs),
    ]

    agent = create_deep_agent(
        model=LLM_MODEL,
        tools=tools,
        skills=[SKILLS_DIR],
        system_prompt=CABINET_SYSTEM_PROMPT,
    )

    return agent