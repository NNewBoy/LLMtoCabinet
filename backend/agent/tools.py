from engine.cabinet_manager import CabinetManager


# 全局 manager 字典，key 为 project_id
_managers: dict[str, CabinetManager] = {}


def get_manager(project_id: str) -> CabinetManager:
    """获取或创建项目对应的 CabinetManager"""
    if project_id not in _managers:
        _managers[project_id] = CabinetManager()
    return _managers[project_id]


def query_cabinet(project_id: str, detail_level: str = "summary", component_id: str = None) -> dict:
    """
    查询当前柜子的结构信息、板件列表、尺寸等属性。

    Args:
        project_id: 项目ID
        detail_level: 查询详细程度，summary=概览（仅名称和ID列表），full=完整信息（含尺寸位置）
        component_id: 指定查询的组件ID，不填则查询全部
    """
    manager = get_manager(project_id)
    return manager.query(detail_level=detail_level, component_id=component_id)


def add_component(
    project_id: str,
    type: str,
    name: str,
    position: dict,
    dimensions: dict,
    material: str = "plywood",
    color: str = "#D2B48C",
    thickness: float = 18.0,
    parent_id: str = None,
) -> dict:
    """
    向柜子添加新的板件或组件（隔板、门板、抽屉等）。

    Args:
        project_id: 项目ID
        type: 组件类型 (side_panel/back_panel/top_panel/bottom_panel/shelf/single_door/double_door/drawer/divider/handle/custom)
            - single_door: 单开门（绕左侧边旋转打开，默认门板类型）
            - double_door: 双开门（左右两扇门板）
            - handle: 拉手（通常作为门板的子组件）
        name: 组件名称，如 "中层隔板"
        position: 组件位置 {"x": float, "y": float, "z": float}，相对柜体坐标（如有parent_id则相对父组件）
        dimensions: 组件尺寸 {"length": float, "width": float, "height": float}，单位 mm
        material: 材料类型，默认 "plywood"
        color: 颜色 hex 值，默认 "#D2B48C"
        thickness: 板厚 mm，默认 18
        parent_id: 父组件ID（可选），用于添加子组件如拉手、铰链等，此时position为相对父组件的坐标
    """
    manager = get_manager(project_id)
    return manager.add_component(
        type=type, name=name, position=position,
        dimensions=dimensions, material=material,
        color=color, thickness=thickness, parent_id=parent_id,
    )


def remove_component(project_id: str, component_id: str) -> dict:
    """
    从柜子中删除指定的板件或组件。

    Args:
        project_id: 项目ID
        component_id: 要删除的组件ID
    """
    manager = get_manager(project_id)
    return manager.remove_component(component_id=component_id)


def modify_component(project_id: str, target_id: str, properties: dict) -> dict:
    """
    修改柜子或组件的属性（尺寸、位置、材料、颜色等）。

    Args:
        project_id: 项目ID
        target_id: 修改目标ID，"cabinet" 表示修改柜子整体属性
        properties: 要修改的属性键值对，可包含:
            name, length, width, height, position, rotation, material, color, thickness
    """
    manager = get_manager(project_id)
    return manager.modify(target_id=target_id, properties=properties)


def undo_redo(project_id: str, action: str) -> dict:
    """
    撤销或重做上一步编辑操作。

    Args:
        project_id: 项目ID
        action: "undo" 撤销 或 "redo" 重做
    """
    manager = get_manager(project_id)
    if action == "undo":
        return manager.undo()
    elif action == "redo":
        return manager.redo()
    return {"error": f"无效操作: {action}，请使用 undo 或 redo"}