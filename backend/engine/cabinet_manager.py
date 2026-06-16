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

    def _create_handle(self, parent_name: str, handle_x: float, handle_y: float,
                       handle_z: float, handle_length: float, handle_width: float,
                       handle_height: float) -> CabinetComponent:
        """创建拉手子组件

        坐标系说明（相对于父组件）：
          - z < 0 为父组件正面外侧（拉手应在此侧）
          - 竖拉手：长边沿 Y 轴 → height 为大值
          - 横拉手：长边沿 X 轴 → length 为大值
        """
        return CabinetComponent(
            name=f"{parent_name} - 拉手",
            type=ComponentType.HANDLE,
            length=handle_length,
            width=handle_width,
            height=handle_height,
            position=Vector3(x=handle_x, y=handle_y, z=handle_z),
            material="metal",
            color="#C0C0C0",
        )

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
            logger.info(f"添加子组件: {name} -> {parent.name} (type={type})")
            return {
                "success": True,
                "message": f"已添加 {name} 到 {parent.name} 的子组件",
                "component_id": component.id,
                "cabinet": cabinet_to_dict(self.cabinet),
            }

        # 单开门自动配竖拉手（左侧居中，长边沿 Y 轴）
        if comp_type == ComponentType.SINGLE_DOOR:
            handle_height = component.height * 0.6   # 竖拉手长边沿 Y
            handle_y = (component.height - handle_height) / 2  # 垂直居中
            handle = self._create_handle(
                parent_name=name,
                handle_x=component.length - 40,  # 右侧20位置
                handle_y=handle_y,                    # 垂直居中
                handle_z=-30,                         # 门板正面外侧（z<0）
                handle_length=20,                     # X方向窄
                handle_width=30,                      # Z方向突出厚度
                handle_height=handle_height,          # Y方向长
            )
            component.children.append(handle)
            logger.info(f"自动创建单开门拉手: {handle.name}")

        # 双开门自动配拉手
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
            
            # 左门竖拉手（右侧居中，长边沿 Y 轴）
            handle_h = door_height * 0.6
            handle_y = (door_height - handle_h) / 2
            left_handle = self._create_handle(
                parent_name=f"{name} - 左门",
                handle_x=door_length - 40,     # 右侧，拉手左边缘在20处
                handle_y=handle_y,                    # 垂直居中
                handle_z=-30,                         # 门板正面外侧
                handle_length=20,                     # X方向窄
                handle_width=30,                      # Z方向突出厚度
                handle_height=handle_h,               # Y方向长
            )
            left_door.children.append(left_handle)
            
            # 右门竖拉手（左侧居中，长边沿 Y 轴）
            right_handle = self._create_handle(
                parent_name=f"{name} - 右门",
                handle_x=20,           # 左侧10%位置
                handle_y=handle_y,                    # 垂直居中
                handle_z=-30,                         # 门板正面外侧
                handle_length=20,                     # X方向窄
                handle_width=30,                      # Z方向突出厚度
                handle_height=handle_h,               # Y方向长
            )
            right_door.children.append(right_handle)
            
            component.children.append(left_door)
            component.children.append(right_door)
            logger.info(f"自动创建双开门子组件: {left_door.name}, {right_door.name}")
            logger.info(f"自动创建双开门拉手: {left_handle.name}, {right_handle.name}")

        # 抽屉自动配横拉手（顶部居中，长边沿 X 轴）
        if comp_type == ComponentType.DRAWER:
            handle_len = component.length * 0.3   # 横拉手长边沿 X
            handle_x = (component.length - handle_len) / 2  # 水平居中
            handle = self._create_handle(
                parent_name=name,
                handle_x=handle_x,                # 水平居中
                handle_y=component.height - 40,  # 顶部位置
                handle_z=-30,                      # 抽面正面外侧
                handle_length=handle_len,          # X方向长
                handle_width=30,                   # Z方向突出厚度
                handle_height=20,                  # Y方向窄
            )
            component.children.append(handle)
            logger.info(f"自动创建抽屉拉手: {handle.name}")

        self.cabinet.components.append(component)
        logger.info(f"添加组件: {name} (type={type}, position={position})")

        # 构建成功消息
        success_msg = f"已添加 {name}"
        if comp_type == ComponentType.DOUBLE_DOOR:
            success_msg += "（含左右两扇门及拉手）"
        elif comp_type in [ComponentType.SINGLE_DOOR, ComponentType.DRAWER]:
            success_msg += "（含拉手）"

        return {
            "success": True,
            "message": success_msg,
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
        logger.info(f"删除组件: {removed.name} ({component_id})")
        return {
            "success": True,
            "message": f"已删除 {removed.name}",
            "cabinet": cabinet_to_dict(self.cabinet),
        }

    def modify(self, target_id: str, properties: dict, save_history: bool = True) -> dict:
        """修改柜子或组件属性"""
        if not self.cabinet:
            return {"error": "柜子未加载"}

        if target_id == "cabinet":
            target = self.cabinet
            if save_history:
                self.history.push(self.cabinet, f"修改柜子属性")
        else:
            target = self.cabinet.find_component(target_id)
            if not target:
                logger.warning(f"修改失败: 组件 {target_id} 不存在")
                return {"error": f"组件 {target_id} 不存在"}
            if save_history:
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
        logger.info(f"{desc}: {properties}")
        return {
            "success": True,
            "message": f"修改完成",
            "cabinet": cabinet_to_dict(self.cabinet),
        }

    def commit_changes(self, description: str = "编辑完成") -> dict:
        """提交保存快照（在干涉检查通过后调用）"""
        if not self.cabinet:
            return {"error": "柜子未加载"}

        self.history.save_snapshot(self.cabinet, description)
        logger.info(f"提交保存快照: {description}")
        return {
            "success": True,
            "message": f"已保存: {description}",
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

    def check_interference(self) -> dict:
        """检查组件间是否存在干涉（重叠）

        规则：
        - 只检查叶子组件（不含容器类型如 double_door）
        - 排除父子关系的组件对（如门板和其拉手）
        - 使用 AABB 包围盒检测
        """
        if not self.cabinet:
            return {"error": "柜子未加载"}

        # 收集所有叶子组件的绝对位置和尺寸
        leaves = []
        self._collect_leaves(self.cabinet.components, 0, 0, 0, None, leaves)

        interferences = []

        # 两两检查
        for i in range(len(leaves)):
            for j in range(i + 1, len(leaves)):
                a = leaves[i]
                b = leaves[j]

                # 跳过父子关系
                if a["parent_id"] == b["id"] or b["parent_id"] == a["id"]:
                    continue

                # AABB 检测
                if self._aabb_overlap(a, b):
                    interferences.append({
                        "component_a": {"id": a["id"], "name": a["name"]},
                        "component_b": {"id": b["id"], "name": b["name"]},
                        "overlap_volume": self._calc_overlap_volume(a, b),
                    })

        if interferences:
            # 按重叠体积降序排序
            interferences.sort(key=lambda x: x["overlap_volume"], reverse=True)
            logger.warning(f"检测到 {len(interferences)} 处干涉")
            return {
                "has_interference": True,
                "count": len(interferences),
                "interferences": interferences,
                "message": f"检测到 {len(interferences)} 处组件干涉",
            }
        else:
            logger.info("干涉检查通过，无干涉")
            return {
                "has_interference": False,
                "count": 0,
                "interferences": [],
                "message": "干涉检查通过，无干涉",
            }

    def _collect_leaves(self, components, parent_x, parent_y, parent_z, parent_id, result):
        """递归收集叶子组件及其绝对坐标"""
        # 容器类型，不参与干涉检查
        container_types = {ComponentType.DOUBLE_DOOR}

        for comp in components:
            abs_x = parent_x + comp.position.x
            abs_y = parent_y + comp.position.y
            abs_z = parent_z + comp.position.z

            if comp.type in container_types:
                # 容器类型：递归收集子组件
                self._collect_leaves(comp.children, abs_x, abs_y, abs_z, comp.id, result)
            elif comp.children:
                # 有子组件的叶子（如门板）：自身参与检查，子组件也参与
                result.append({
                    "id": comp.id,
                    "name": comp.name,
                    "type": comp.type.value,
                    "x": abs_x,
                    "y": abs_y,
                    "z": abs_z,
                    "length": comp.length,
                    "width": comp.width,
                    "height": comp.height,
                    "parent_id": parent_id,
                })
                # 递归收集子组件
                self._collect_leaves(comp.children, abs_x, abs_y, abs_z, comp.id, result)
            else:
                # 纯叶子组件
                result.append({
                    "id": comp.id,
                    "name": comp.name,
                    "type": comp.type.value,
                    "x": abs_x,
                    "y": abs_y,
                    "z": abs_z,
                    "length": comp.length,
                    "width": comp.width,
                    "height": comp.height,
                    "parent_id": parent_id,
                })

    def _aabb_overlap(self, a, b) -> bool:
        """AABB 包围盒重叠检测"""
        # A 盒体范围
        a_min_x, a_max_x = a["x"], a["x"] + a["length"]
        a_min_y, a_max_y = a["y"], a["y"] + a["height"]
        a_min_z, a_max_z = a["z"], a["z"] + a["width"]

        # B 盒体范围
        b_min_x, b_max_x = b["x"], b["x"] + b["length"]
        b_min_y, b_max_y = b["y"], b["y"] + b["height"]
        b_min_z, b_max_z = b["z"], b["z"] + b["width"]

        # 三个轴都有重叠才是干涉
        return (
            a_min_x < b_max_x and a_max_x > b_min_x and
            a_min_y < b_max_y and a_max_y > b_min_y and
            a_min_z < b_max_z and a_max_z > b_min_z
        )

    def _calc_overlap_volume(self, a, b) -> float:
        """计算两个 AABB 盒体的重叠体积"""
        dx = min(a["x"] + a["length"], b["x"] + b["length"]) - max(a["x"], b["x"])
        dy = min(a["y"] + a["height"], b["y"] + b["height"]) - max(a["y"], b["y"])
        dz = min(a["z"] + a["width"], b["z"] + b["width"]) - max(a["z"], b["z"])
        return max(0, dx) * max(0, dy) * max(0, dz)

    def to_dict(self) -> dict:
        """序列化当前柜子对象"""
        if not self.cabinet:
            return {"error": "柜子未加载"}
        return cabinet_to_dict(self.cabinet)
