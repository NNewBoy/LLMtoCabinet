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
    name: str = "标准橱柜"
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
        name="标准橱柜",
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