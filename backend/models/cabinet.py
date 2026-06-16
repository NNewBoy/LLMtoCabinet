from __future__ import annotations
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field
import uuid


class ComponentType(str, Enum):
    SIDE_PANEL = "side_panel"
    BACK_PANEL = "back_panel"
    TOP_PANEL = "top_panel"
    BOTTOM_PANEL = "bottom_panel"
    SHELF = "shelf"
    SINGLE_DOOR = "single_door"
    DOUBLE_DOOR = "double_door"
    DRAWER = "drawer"
    DIVIDER = "divider"
    HANDLE = "handle"
    CUSTOM = "custom"


class Vector3(BaseModel):
    x: float = 0.0
    y: float = 0.0
    z: float = 0.0


class CabinetComponent(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    type: ComponentType
    length: float
    width: float
    height: float
    position: Vector3 = Field(default_factory=Vector3)
    rotation: Vector3 = Field(default_factory=Vector3)
    material: str = "plywood"
    color: str = "#D2B48C"
    thickness: float = 18.0
    is_visible: bool = True
    children: list[CabinetComponent] = Field(default_factory=list)
    metadata: dict = Field(default_factory=dict)


class Cabinet(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = "标准柜"
    length: float = 800.0
    width: float = 600.0
    height: float = 2000.0
    position: Vector3 = Field(default_factory=Vector3)
    rotation: Vector3 = Field(default_factory=Vector3)
    material: str = "plywood"
    components: list[CabinetComponent] = Field(default_factory=list)
    metadata: dict = Field(default_factory=dict)

    def find_component(self, component_id: str) -> Optional[CabinetComponent]:
        """递归查找组件"""
        for comp in self.components:
            found = self._find_recursive(comp, component_id)
            if found:
                return found
        return None

    def _find_recursive(self, comp: CabinetComponent, component_id: str) -> Optional[CabinetComponent]:
        if comp.id == component_id:
            return comp
        for child in comp.children:
            found = self._find_recursive(child, component_id)
            if found:
                return found
        return None

    def remove_component(self, component_id: str) -> Optional[CabinetComponent]:
        """移除组件，返回被移除的组件"""
        for i, comp in enumerate(self.components):
            if comp.id == component_id:
                return self.components.pop(i)
            removed = self._remove_recursive(comp, component_id)
            if removed:
                return removed
        return None

    def _remove_recursive(self, parent: CabinetComponent, component_id: str) -> Optional[CabinetComponent]:
        for i, child in enumerate(parent.children):
            if child.id == component_id:
                return parent.children.pop(i)
            removed = self._remove_recursive(child, component_id)
            if removed:
                return removed
        return None


def create_default_cabinet() -> Cabinet:
    """创建默认柜子模板"""
    cabinet = Cabinet(
        name="标准柜",
        length=800.0,
        width=600.0,
        height=2000.0,
        material="plywood",
        components=[
            CabinetComponent(
                id="left_panel",
                name="左侧板",
                type=ComponentType.SIDE_PANEL,
                length=18.0, width=600.0, height=2000.0,
                position=Vector3(x=0, y=0, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="right_panel",
                name="右侧板",
                type=ComponentType.SIDE_PANEL,
                length=18.0, width=600.0, height=2000.0,
                position=Vector3(x=782, y=0, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="top_panel",
                name="顶板",
                type=ComponentType.TOP_PANEL,
                length=764.0, width=600.0, height=18.0,
                position=Vector3(x=18, y=1982, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="bottom_panel",
                name="底板",
                type=ComponentType.BOTTOM_PANEL,
                length=764.0, width=600.0, height=18.0,
                position=Vector3(x=18, y=0, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="back_panel",
                name="背板",
                type=ComponentType.BACK_PANEL,
                length=764.0, width=5.0, height=1964.0,
                position=Vector3(x=18, y=18, z=597.5),
                material="plywood", color="#C4A882", thickness=5.0,
            ),
        ],
    )
    return cabinet


def create_kitchen_cabinet() -> Cabinet:
    """创建厨柜模板 - 较矮，带层板和单门"""
    cabinet = Cabinet(
        name="厨柜",
        length=900.0,
        width=600.0,
        height=800.0,
        material="plywood",
        components=[
            CabinetComponent(
                id="left_panel", name="左侧板", type=ComponentType.SIDE_PANEL,
                length=18.0, width=600.0, height=800.0,
                position=Vector3(x=0, y=0, z=0),
                material="plywood", color="#F5E6D3", thickness=18.0,
            ),
            CabinetComponent(
                id="right_panel", name="右侧板", type=ComponentType.SIDE_PANEL,
                length=18.0, width=600.0, height=800.0,
                position=Vector3(x=882, y=0, z=0),
                material="plywood", color="#F5E6D3", thickness=18.0,
            ),
            CabinetComponent(
                id="top_panel", name="顶板", type=ComponentType.TOP_PANEL,
                length=864.0, width=600.0, height=18.0,
                position=Vector3(x=18, y=782, z=0),
                material="plywood", color="#F5E6D3", thickness=18.0,
            ),
            CabinetComponent(
                id="bottom_panel", name="底板", type=ComponentType.BOTTOM_PANEL,
                length=864.0, width=600.0, height=18.0,
                position=Vector3(x=18, y=0, z=0),
                material="plywood", color="#F5E6D3", thickness=18.0,
            ),
            CabinetComponent(
                id="back_panel", name="背板", type=ComponentType.BACK_PANEL,
                length=864.0, width=5.0, height=764.0,
                position=Vector3(x=18, y=18, z=597.5),
                material="plywood", color="#E8D5C4", thickness=5.0,
            ),
            CabinetComponent(
                id="shelf", name="层板", type=ComponentType.SHELF,
                length=864.0, width=562.0, height=18.0,
                position=Vector3(x=18, y=400, z=18),
                material="plywood", color="#F5E6D3", thickness=18.0,
            ),
            CabinetComponent(
                id="door", name="柜门", type=ComponentType.SINGLE_DOOR,
                length=864.0, width=18.0, height=764.0,
                position=Vector3(x=18, y=18, z=0),
                material="plywood", color="#FFF8F0", thickness=18.0,
                children=[
                    CabinetComponent(
                        name="柜门 - 拉手", type=ComponentType.HANDLE,
                        length=20.0, width=30.0, height=458.4,
                        position=Vector3(x=824, y=152.8, z=-30),
                        material="metal", color="#C0C0C0",
                    ),
                ],
            ),
        ],
    )
    return cabinet


def create_wardrobe() -> Cabinet:
    """创建衣柜模板 - 较高较宽，带层板、挂衣杆和双门"""
    cabinet = Cabinet(
        name="衣柜",
        length=1800.0,
        width=600.0,
        height=2200.0,
        material="plywood",
        components=[
            CabinetComponent(
                id="left_panel", name="左侧板", type=ComponentType.SIDE_PANEL,
                length=18.0, width=600.0, height=2200.0,
                position=Vector3(x=0, y=0, z=0),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="right_panel", name="右侧板", type=ComponentType.SIDE_PANEL,
                length=18.0, width=600.0, height=2200.0,
                position=Vector3(x=1782, y=0, z=0),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="top_panel", name="顶板", type=ComponentType.TOP_PANEL,
                length=1764.0, width=600.0, height=18.0,
                position=Vector3(x=18, y=2182, z=0),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="bottom_panel", name="底板", type=ComponentType.BOTTOM_PANEL,
                length=1764.0, width=600.0, height=18.0,
                position=Vector3(x=18, y=0, z=0),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="back_panel", name="背板", type=ComponentType.BACK_PANEL,
                length=1764.0, width=5.0, height=2164.0,
                position=Vector3(x=18, y=18, z=597.5),
                material="plywood", color="#DCC8B8", thickness=5.0,
            ),
            CabinetComponent(
                id="divider", name="中竖板", type=ComponentType.DIVIDER,
                length=18.0, width=562.0, height=2164.0,
                position=Vector3(x=891, y=18, z=18),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="shelf_left_upper", name="左上层板", type=ComponentType.SHELF,
                length=873.0, width=562.0, height=18.0,
                position=Vector3(x=18, y=1800, z=18),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="shelf_right_upper", name="右上层板", type=ComponentType.SHELF,
                length=873.0, width=562.0, height=18.0,
                position=Vector3(x=909, y=1800, z=18),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="shelf_left_lower", name="左下层板", type=ComponentType.SHELF,
                length=873.0, width=562.0, height=18.0,
                position=Vector3(x=18, y=400, z=18),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="shelf_right_lower", name="右下层板", type=ComponentType.SHELF,
                length=873.0, width=562.0, height=18.0,
                position=Vector3(x=909, y=400, z=18),
                material="plywood", color="#E8D5C4", thickness=18.0,
            ),
            CabinetComponent(
                id="drawer_left", name="左抽屉", type=ComponentType.DRAWER,
                length=873.0, width=580.0, height=382.0,
                position=Vector3(x=18, y=18, z=0),
                material="plywood", color="#FFF5EB", thickness=18.0,
                children=[
                    CabinetComponent(
                        name="左抽屉 - 拉手", type=ComponentType.HANDLE,
                        length=261.9, width=30.0, height=20.0,
                        position=Vector3(x=305.55, y=342, z=-30),
                        material="metal", color="#C0C0C0",
                    ),
                ],
            ),
            CabinetComponent(
                id="drawer_right", name="右抽屉", type=ComponentType.DRAWER,
                length=873.0, width=580.0, height=382.0,
                position=Vector3(x=909, y=18, z=0),
                material="plywood", color="#FFF5EB", thickness=18.0,
                children=[
                    CabinetComponent(
                        name="右抽屉 - 拉手", type=ComponentType.HANDLE,
                        length=261.9, width=30.0, height=20.0,
                        position=Vector3(x=305.55, y=342, z=-30),
                        material="metal", color="#C0C0C0",
                    ),
                ],
            ),
            CabinetComponent(
                id="double_door", name="双开门", type=ComponentType.DOUBLE_DOOR,
                length=1764.0, width=18.0, height=1764.0,
                position=Vector3(x=18, y=418, z=0),
                material="plywood", color="#FFF5EB", thickness=18.0,
                children=[
                    CabinetComponent(
                        id="left_door", name="双开门 - 左门", type=ComponentType.SINGLE_DOOR,
                        length=882.0, width=18.0, height=1764.0,
                        position=Vector3(x=0, y=0, z=0),
                        material="plywood", color="#FFF5EB", thickness=18.0,
                        children=[
                            CabinetComponent(
                                name="双开门 - 左门 - 拉手", type=ComponentType.HANDLE,
                                length=20.0, width=30.0, height=1058.4,
                                position=Vector3(x=842, y=352.8, z=-30),
                                material="metal", color="#C0C0C0",
                            ),
                        ],
                    ),
                    CabinetComponent(
                        id="right_door", name="双开门 - 右门", type=ComponentType.SINGLE_DOOR,
                        length=882.0, width=18.0, height=1764.0,
                        position=Vector3(x=882, y=0, z=0),
                        material="plywood", color="#FFF5EB", thickness=18.0,
                        children=[
                            CabinetComponent(
                                name="双开门 - 右门 - 拉手", type=ComponentType.HANDLE,
                                length=20.0, width=30.0, height=1058.4,
                                position=Vector3(x=20, y=352.8, z=-30),
                                material="metal", color="#C0C0C0",
                            ),
                        ],
                    ),
                ],
            ),
        ],
    )
    return cabinet


def create_bookshelf() -> Cabinet:
    """创建书架模板 - 较宽，多层板，无门"""
    cabinet = Cabinet(
        name="书架",
        length=1200.0,
        width=400.0,
        height=1800.0,
        material="plywood",
        components=[
            CabinetComponent(
                id="left_panel", name="左侧板", type=ComponentType.SIDE_PANEL,
                length=18.0, width=400.0, height=1800.0,
                position=Vector3(x=0, y=0, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="right_panel", name="右侧板", type=ComponentType.SIDE_PANEL,
                length=18.0, width=400.0, height=1800.0,
                position=Vector3(x=1182, y=0, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="top_panel", name="顶板", type=ComponentType.TOP_PANEL,
                length=1164.0, width=400.0, height=18.0,
                position=Vector3(x=18, y=1782, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="bottom_panel", name="底板", type=ComponentType.BOTTOM_PANEL,
                length=1164.0, width=400.0, height=18.0,
                position=Vector3(x=18, y=0, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="back_panel", name="背板", type=ComponentType.BACK_PANEL,
                length=1164.0, width=5.0, height=1764.0,
                position=Vector3(x=18, y=18, z=397.5),
                material="plywood", color="#C4A882", thickness=5.0,
            ),
            CabinetComponent(
                id="shelf_1", name="层板1", type=ComponentType.SHELF,
                length=1164.0, width=380.0, height=18.0,
                position=Vector3(x=18, y=360, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="shelf_2", name="层板2", type=ComponentType.SHELF,
                length=1164.0, width=380.0, height=18.0,
                position=Vector3(x=18, y=720, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="shelf_3", name="层板3", type=ComponentType.SHELF,
                length=1164.0, width=380.0, height=18.0,
                position=Vector3(x=18, y=1080, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
            CabinetComponent(
                id="shelf_4", name="层板4", type=ComponentType.SHELF,
                length=1164.0, width=380.0, height=18.0,
                position=Vector3(x=18, y=1440, z=0),
                material="plywood", color="#D2B48C", thickness=18.0,
            ),
        ],
    )
    return cabinet


# 模板映射
CABINET_TEMPLATES = {
    "cabinet": create_default_cabinet,
    "kitchen": create_kitchen_cabinet,
    "wardrobe": create_wardrobe,
    "bookshelf": create_bookshelf,
}


def create_cabinet_by_template(template: str = "cabinet") -> Cabinet:
    """根据模板名称创建柜子，默认为标准柜"""
    factory = CABINET_TEMPLATES.get(template, create_default_cabinet)
    return factory().model_copy(deep=True)
