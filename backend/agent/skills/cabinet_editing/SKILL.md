---
name: cabinet-editing
description: >
  柜子组件编辑操作流程与规则。当用户需要添加、删除、修改柜子的板件或组件时使用。
  涵盖查询柜子结构、编辑板件属性、调整位置尺寸等操作。
---

# 柜子编辑操作指南

## 坐标系统
- X 轴：柜子长度方向（左右）
- Y 轴：柜子高度方向（上下）
- Z 轴：柜子深度方向（前后），**+Z 为柜子正面/开口方向**
- 板件位置 position 是相对柜体原点的坐标
- 柜体原点位于柜子左下后角

## 柜体内部空间（重要！添加内部组件必须参照此范围）
- 查询柜子后可获得柜体 length、width、height 和侧板厚度（默认18mm）
- 内部可用 X 范围：从侧板内壁到侧板内壁，即 x=thickness 到 x=(length - thickness)
- 内部可用 Y 范围：从底板顶面到顶板底面，即 y=thickness 到 y=(height - thickness)
- 背板占用 z=0 到 z=背板厚度（默认5mm）
- 内部可用 Z 范围：从 z=背板厚度 到 z=width（如 5 到 600）
- **添加隔板/层板时，必须将 position.x 设为侧板厚度（如18），position.z 设为背板厚度（如5）**
- **隔板的 length 应等于柜子内部宽度（如 length - 2*thickness = 764）**
- **隔板的 width 应等于柜子深度减背板厚度（如 600-5=595），避免与背板干涉**

## 板件尺寸说明
- 侧板 (side_panel)：length=板厚, width=柜深, height=柜高，position.z=0（外框包围背板）
- 顶/底板 (top/bottom_panel)：length=柜长, width=柜深, height=板厚，position.z=0（外框包围背板）
- 背板 (back_panel)：length=柜长, width=背板厚度, height=柜高，position.z=0
- 隔板 (shelf)：length=柜内宽, width=柜深-背板厚度, height=板厚，position.z=背板厚度，避免与背板干涉
- 单开门/门板（single_door）：length=门宽, width=板厚(=thickness, 默认18), height=门高，绕左侧边旋转打开
- 双开门（double_door）：length=门宽, width=板厚(=thickness, 默认18), height=门高，两块 single_door（左门和右门）
  - 添加 double_door 时，系统会自动创建两块 single_door 子组件
  - 左门：position.x=0, length=柜内宽/2
  - 右门：position.x=柜内宽/2, length=柜内宽/2
- 抽屉（drawer）：length=抽面宽, width=柜深, height=抽面高，包含抽面、侧板、底板等结构
- 拉手 (handle)：通常作为门板或抽屉的子组件，使用 parent_id 添加

## 双开门结构说明
添加 double_door 时，数据结构如下：
```
double_door (父组件)
├── left_door (single_door, children[0])
│   └── handle (可选拉手)
└── right_door (single_door, children[1])
    └── handle (可选拉手)
```
- 父组件 double_door 的 dimensions 表示整个门板区域
- 子组件 single_door 的 position 是相对于父组件的坐标

## 编辑操作流程
1. 先调用 query_cabinet 查看当前柜子结构
2. 根据用户意图确定操作类型（添加/删除/修改）
3. 计算出正确的参数值（位置、尺寸等）
4. 调用对应工具执行操作
5. **调用 check_interference 检查干涉**
6. 如果存在干涉，调整干涉组件的位置或尺寸，重复检查直到无干涉
7. **干涉检查通过后，调用 commit_changes 保存本次编辑结果**
8. 操作完成后告知用户结果

## 干涉检查
- 使用 AABB 包围盒检测组件是否重叠
- 排除父子关系的组件对（如门板和其拉手）
- 容器类型（如 double_door）不参与检查，只检查其子组件
- 返回结果包含干涉组件对和重叠体积
- 修复干涉时优先调整新添加/修改的组件
- **修复干涉时使用 save_history=False，避免多次保存**：modify_component(target_id=..., properties={...}, save_history=False)

## 保存快照
- **只在干涉检查通过后调用一次 commit_changes 保存快照**
- 编辑操作（add/remove/modify）本身不保存快照
- commit_changes(description="描述") 保存本次编辑的最终结果

## 校验规则
- 修改后的板件必须在柜体边界范围内
- 添加隔板时 Y 坐标应介于底板高度和顶板高度之间
- 删除侧板/顶板/底板等结构件时需提醒用户
- **每次编辑后必须检查干涉，确保无组件重叠**

## 子组件规则
- 拉手、铰链、滑轨等五金配件必须作为其所属板件的子组件（children），不能与板件同级
- 添加子组件时需要传入 parent_id（父组件的 ID），position 是相对于父组件的坐标
- 拉手使用 type="handle"，例如：给门板加拉手 → add_component(parent_id="门板ID", type="handle", name="拉手", ...)

## 常见场景（附完整参数示例，假设柜子 800x600x2000，侧板厚18mm）
- 注意：单开门(single_door)和双开门(double_door)的 width 是门板厚度（与 thickness 一致，如18mm），**不是柜子深度**。请勿将 width 设为柜子 width（如600）！
- 门板/单开门/双开门应放在柜子正面：position.z = 柜子 width（如 600），开口方向为 +Z。拉手作为门/抽屉子组件时也放在父组件 +Z 正面外侧。
- "在中间加一块隔板" → add_component(type="shelf", name="中层隔板", position={"x":18,"y":1000,"z":5}, dimensions={"length":764,"width":595,"height":18})
- "在离底部三分之一处加隔板" → y = 18 + (2000-2*18)/3 ≈ 675，position={"x":18,"y":675,"z":5}
- "把侧板加高" → modify_component(target_id="left_panel", properties={"height": 新高度})
- "删除中间的隔板" → 先 query_cabinet 获取隔板ID，再 remove_component
- "换成橡木材料" → modify_component(target_id=组件ID, properties={"material": "oak"})
- "加一扇单开门" → add_component(type="single_door", name="左门板", position={"x":18,"y":18,"z":600}, dimensions={"length":764,"width":18,"height":1964})
  - 系统会自动创建单开门及竖拉手
- "加双开门" → add_component(type="double_door", name="双开门", position={"x":18,"y":18,"z":600}, dimensions={"length":764,"width":18,"height":1964})
  - 系统会自动创建双开门及左右门拉手
- "加一个抽屉" → add_component(type="drawer", name="抽屉", position={"x":18,"y":500,"z":5}, dimensions={"length":764,"width":595,"height":200})
  - 系统会自动创建抽屉及横拉手
- "给门板加拉手" → add_component(parent_id="门板ID", type="handle", name="拉手", position={"x":600,"y":393,"z":18}, dimensions={"length":20,"width":30,"height":1178})
  - 注意：拉手 position.z 应放在父组件 +Z 正面外侧（门板示例为 z=18）
