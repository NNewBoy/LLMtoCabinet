import logging
from typing import Optional
from models.cabinet import Cabinet, CabinetComponent, Vector3, ComponentType, create_default_cabinet
from engine.history import OperationHistory
from utils.serialization import cabinet_to_dict, component_summary, component_detail, json_to_cabinet

logger = logging.getLogger("cabinet3d.engine")


class CabinetManager:
    """柜子编辑引擎 - 维护 Cabinet Object 并提供操作方法"""

    def __init__(self):
        self.cabinet: Optional[Cabinet] = None
        self.history: OperationHistory = OperationHistory()

    def load(self, cabinet: Cabinet):
        """加载柜子对象（切换方案时清空操作历史）"""
        self.cabinet = cabinet
        self.history = OperationHistory()
        self.history.save_snapshot(cabinet, "初始状态")
        logger.info(f"加载柜子: {cabinet.name} ({len(cabinet.components)} 个组件)")

    def load_default(self):
        """加载默认柜子模板"""
        self.cabinet = create_default_cabinet().model_copy(deep=True)
        logger.info("加载默认柜子模板")

    def query(self, detail_level: str = "summary", component_id: str = None) -> dict:
        """查询柜子信息"""
        if not self.cabinet:
            logger.warning("查询失败: 柜子未加载")
            return {"error": "柜子未加载"}

        if component_id:
            comp = self.cabinet.find_component(component_id)
            if not comp:
                logger.warning(f"查询失败: 组件 {component_id} 不存在")
                return {"error": f"组件 {component_id} 不存在"}
            logger.info(f"查询组件: {comp.name} ({component_id})")
            return {"component": component_detail(comp)}

        logger.info(f"查询柜子: detail_level={detail_level}, 组件数={len(self.cabinet.components)}")
        if detail_level == "summary":
            return {
                "cabinet": {
                    "id": self.cabinet.id,
                    "name": self.cabinet.name,
                    "length": self.cabinet.length,
                    "width": self.cabinet.width,
                    "height": self.cabinet.height,
                    "material": self.cabinet.material,
                    "component_count": len(self.cabinet.components),
                },
                "components": component_summary(self.cabinet),
            }
        else:
            return {"cabinet": cabinet_to_dict(self.cabinet)}

    def add_component(
        self,
        type: str,
        name: str,
        position: dict,
        dimensions: dict,
        material: str = "plywood",
        color: str = "#D2B48C",
        thickness: float = 18.0,
        parent_id: str = None,
    ) -> dict:
        """添加组件"""
        if not self.cabinet:
            return {"error": "柜子未加载"}

        self.history.push(self.cabinet, f"添加 {name}")

        try:
            comp_type = ComponentType(type)
        except ValueError:
            logger.error(f"未知组件类型: {type}")
            return {"error": f"未知组件类型: {type}，有效类型: {[t.value for t in ComponentType]}"}

        component = CabinetComponent(
            name=name,
            type=comp_type,
            length=dimensions.get("length", 0),
            width=dimensions.get("width", 0),
            height=dimensions.get("height", 0),
            position=Vector3(**position),
            material=material,
            color=color,
            thickness=thickness,
        )

        if parent_id:
            parent = self.cabinet.find_component(parent_id)
            if not parent:
                logger.warning(f"父组件不存在: {parent_id}")
                return {"error": f"父组件 {parent_id} 不存在"}
            parent.children.append(component)
            self.history.save_snapshot(self.cabinet, f"添加 {name} 到 {parent.name}")
            logger.info(f"添加子组件: {name} -> {parent.name} (type={type})")
            return {
                "success": True,
                "message": f"已添加 {name} 到 {parent.name} 的子组件",
                "component_id": component.id,
                "cabinet": cabinet_to_dict(self.cabinet),
            }

        # 如果是双开门，自动创建两块单开门子组件
        if comp_type == ComponentType.DOUBLE_DOOR:
            door_length = component.length / 2
            door_width = component.width if component.width > 0 else thickness
            door_height = component.height
            
            left_door = CabinetComponent(
                name=f"{name} - 左门",
                type=ComponentType.SINGLE_DOOR,
                length=door_length,
                width=door_width,
                height=door_height,
                position=Vector3(x=0, y=0, z=0),
                material=material,
                color=color,
                thickness=thickness,
            )
            
            right_door = CabinetComponent(
                name=f"{name} - 右门",
                type=ComponentType.SINGLE_DOOR,
                length=door_length,
                width=door_width,
                height=door_height,
                position=Vector3(x=door_length, y=0, z=0),
                material=material,
                color=color,
                thickness=thickness,
            )
            
            component.children.append(left_door)
            component.children.append(right_door)
            logger.info(f"自动创建双开门子组件: {left_door.name}, {right_door.name}")

        self.cabinet.components.append(component)
        self.history.save_snapshot(self.cabinet, f"添加 {name}")
        logger.info(f"添加组件: {name} (type={type}, position={position})")
        return {
            "success": True,
            "message": f"已添加 {name}" + ("（含左右两扇门）" if comp_type == ComponentType.DOUBLE_DOOR else ""),
            "component_id": component.id,
            "cabinet": cabinet_to_dict(self.cabinet),
        }

    def remove_component(self, component_id: str) -> dict:
        """删除组件"""
        if not self.cabinet:
            return {"error": "柜子未加载"}

        comp = self.cabinet.find_component(component_id)
        if not comp:
            logger.warning(f"删除失败: 组件 {component_id} 不存在")
            return {"error": f"组件 {component_id} 不存在"}

        self.history.push(self.cabinet, f"删除 {comp.name}")

        removed = self.cabinet.remove_component(component_id)
        self.history.save_snapshot(self.cabinet, f"删除 {removed.name}")
        logger.info(f"删除组件: {removed.name} ({component_id})")
        return {
            "success": True,
            "message": f"已删除 {removed.name}",
            "cabinet": cabinet_to_dict(self.cabinet),
        }

    def modify(self, target_id: str, properties: dict) -> dict:
        """修改柜子或组件属性"""
        if not self.cabinet:
            return {"error": "柜子未加载"}

        if target_id == "cabinet":
            target = self.cabinet
            self.history.push(self.cabinet, f"修改柜子属性")
        else:
            target = self.cabinet.find_component(target_id)
            if not target:
                logger.warning(f"修改失败: 组件 {target_id} 不存在")
                return {"error": f"组件 {target_id} 不存在"}
            self.history.push(self.cabinet, f"修改 {target.name}")

        # 逐属性修改
        for key, value in properties.items():
            if key == "position" and isinstance(value, dict):
                setattr(target, "position", Vector3(**value))
            elif key == "rotation" and isinstance(value, dict):
                setattr(target, "rotation", Vector3(**value))
            elif hasattr(target, key):
                setattr(target, key, value)

        desc = f"修改柜子" if target_id == "cabinet" else f"修改 {target.name}"
        self.history.save_snapshot(self.cabinet, desc)
        logger.info(f"{desc}: {properties}")
        return {
            "success": True,
            "message": f"修改完成",
            "cabinet": cabinet_to_dict(self.cabinet),
        }

    def undo(self) -> dict:
        """撤销"""
        if not self.cabinet:
            return {"error": "柜子未加载"}

        entry = self.history.undo(self.cabinet)
        if not entry:
            logger.info("撤销失败: 没有可撤销的操作")
            return {"success": False, "message": "没有可以撤销的操作"}

        self.cabinet = json_to_cabinet(entry["snapshot"])
        self.history.save_snapshot(self.cabinet, f"撤销: {entry['description']}")
        logger.info(f"撤销操作: {entry['description']}")
        return {
            "success": True,
            "message": f"已撤销: {entry['description']}",
            "cabinet": cabinet_to_dict(self.cabinet),
        }

    def redo(self) -> dict:
        """重做"""
        if not self.cabinet:
            return {"error": "柜子未加载"}

        entry = self.history.redo(self.cabinet)
        if not entry:
            logger.info("重做失败: 没有可重做的操作")
            return {"success": False, "message": "没有可以重做的操作"}

        self.cabinet = json_to_cabinet(entry["snapshot"])
        self.history.save_snapshot(self.cabinet, f"重做: {entry['description']}")
        logger.info(f"重做操作: {entry['description']}")
        return {
            "success": True,
            "message": f"已重做: {entry['description']}",
            "cabinet": cabinet_to_dict(self.cabinet),
        }

    def to_dict(self) -> dict:
        """序列化当前柜子对象"""
        if not self.cabinet:
            return {"error": "柜子未加载"}
        return cabinet_to_dict(self.cabinet)
