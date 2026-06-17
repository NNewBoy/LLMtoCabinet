# 柜子3D模型在线编辑器 - 开发进度报告

## 项目概述
**Cabinet3D Editor** - 基于 Web 的在线 3D 柜子编辑器，用户可通过自然语言对话编辑柜子模型。

---

## 开发阶段进度

### Phase 1: 基础框架搭建 (MVP) ✅ 已完成

| 功能项 | 状态 | 说明 |
|--------|------|------|
| 前端项目初始化 (Vue3 + Vite + Three.js) | ✅ | 使用 Vue3 + TypeScript + Vite 构建 |
| 后端项目初始化 (FastAPI + SQLite) | ✅ | FastAPI + SQLAlchemy 异步 |
| 基础 3D 渲染 | ✅ | Three.js 渲染默认柜子模板 |
| 3D 视角控制 | ✅ | OrbitControls 支持旋转/缩放/平移 |
| REST API 项目 CRUD | ✅ | 完整的项目增删改查接口 |
| Cabinet Object 数据模型 | ✅ | Pydantic v2 模型定义 |

### Phase 2: Agent 集成 ✅ 已完成

| 功能项 | 状态 | 说明 |
|--------|------|------|
| DeepAgents 集成 | ✅ | 使用 LangChain DeepAgents 框架 |
| Skill 工具函数实现 | ✅ | 5 个核心工具函数 |
| CabinetManager 编辑引擎 | ✅ | 完整的编辑引擎实现 |
| WebSocket 通信 | ✅ | 实时双向通信 |
| AI 对话面板 | ✅ | 流式响应展示 |

**已实现的工具函数：**
- `query_cabinet()` - 查询柜子结构
- `add_component()` - 添加板件/组件
- `remove_component()` - 删除板件/组件
- `modify_component()` - 修改板件属性
- `undo_redo()` - 撤销/重做操作

**已实现的 Skills：**
- `cabinet_editing/SKILL.md` - 柜子编辑操作指南
- `cabinet_design/SKILL.md` - 柜子设计规范与约束

### Phase 3: 核心编辑功能 ✅ 已完成

| 功能项 | 状态 | 说明 |
|--------|------|------|
| 自然语言添加/删除板件 | ✅ | 通过 Agent 理解意图并执行 |
| 自然语言修改板件属性 | ✅ | 支持尺寸、位置、材料、颜色修改 |
| Undo/Redo 功能 | ✅ | 操作历史栈管理 |
| 编辑结果实时渲染 | ✅ | WebSocket 推送 + 响应式更新 |
| Agent 流式响应 | ✅ | SSE 流式展示思考过程 |

### Phase 4: 增强与优化 ✅ 已完成

| 功能项 | 状态 | 说明 |
|--------|------|------|
| 板件选中高亮 (3D) | ✅ | Raycaster 点击检测 + 高亮材质 |
| 属性面板 | ✅ | ComponentPanel 显示组件属性 |
| 项目保存/加载 | ✅ | SchemePanel 方案管理 |
| 方案重命名/删除 | ✅ | 方案列表支持重命名和删除 |
| 材质/颜色可视化选择 | ✅ | 预设颜色选择器 + 材料下拉选择 |
| 模型导出功能 | ❌ | 待实现 JSON/OBJ 导出 |
| 错误处理优化 | ✅ | Toast 通知组件 + 错误提示 |

### Phase 5: 交互优化 ✅ 已完成

| 功能项 | 状态 | 说明 |
|--------|------|------|
| 3D 点击切换组件标签 | ✅ | 点击 3D 视图自动切换到组件标签 |
| 点击展开组件树 | ✅ | 点击子物体自动展开父级组件 |
| 颜色/材料直接修改 | ✅ | 直接调用 API，不经过 Agent，响应更快 |
| 组件状态同步 | ✅ | 使用 v-show 保持组件状态，expandedIds 移到 store |

### Phase 6: UI/UX 重构 ✅ 已完成

| 功能项 | 状态 | 说明 |
|--------|------|------|
| Glassmorphism 风格 | ✅ | 半透明背景、模糊效果、柔和阴影 |
| Dark Mode 深色主题 | ✅ | 深蓝渐变背景、靛蓝紫色调 |
| 响应式布局 | ✅ | PC端/平板/移动端自适应 |
| PC端布局 | ✅ | 顶部菜单 + 右侧工具栏(360px) + 左侧3D视图 |
| 移动端布局 | ✅ | 顶部3D视图 + 中间菜单 + 底部工具栏 |
| CSS 变量系统 | ✅ | 统一的颜色、间距、圆角、动画变量 |
| 动画效果 | ✅ | 悬停上浮、滑入滑出、脉冲动画 |
| 3D 场景优化 | ✅ | 多光源照明、木纹纹理、边缘线轮廓、阴影 |

---

## 前端组件完成情况

| 组件 | 文件 | 状态 | 功能说明 |
|------|------|------|----------|
| HeaderBar | `HeaderBar.vue` | ✅ | 顶部导航栏（撤销/重做/保存）Glassmorphism 风格 |
| Viewport3D | `Viewport3D.vue` | ✅ | 3D 渲染视图 + 工具栏 + 点击选中 + 阴影 |
| ChatPanel | `ChatPanel.vue` | ✅ | AI 对话面板 Glassmorphism 风格 |
| ComponentPanel | `ComponentPanel.vue` | ✅ | 组件树 + 属性 + 颜色/材料选择 |
| HistoryPanel | `HistoryPanel.vue` | ✅ | 历史版本列表 |
| SchemePanel | `SchemePanel.vue` | ✅ | 方案管理（新建/切换/重命名/删除） |
| ToastNotification | `ToastNotification.vue` | ✅ | Toast 通知组件 Glassmorphism 风格 |

---

## 后端模块完成情况

| 模块 | 文件 | 状态 | 功能说明 |
|------|------|------|----------|
| API Router | `api/projects.py` | ✅ | REST API 接口（含组件属性修改） |
| WebSocket | `api/websocket.py` | ✅ | WebSocket 通信处理 |
| CabinetManager | `engine/cabinet_manager.py` | ✅ | 柜子编辑引擎 |
| OperationHistory | `engine/history.py` | ✅ | 操作历史管理 |
| Agent Tools | `agent/tools.py` | ✅ | 7 个工具函数（含干涉检查、提交保存） |
| Agent Skills | `agent/skills/` | ✅ | 2 个 Skill 文件 |
| Agent | `agent/cabinet_agent.py` | ✅ | DeepAgents 创建 + Agent 缓存 + 对话历史管理 + 历史快照/恢复 |
| 数据模型 | `models/cabinet.py` | ✅ | Cabinet/CabinetComponent 定义 |
| 数据库模型 | `models/database.py` | ✅ | SQLAlchemy ORM 模型 |
| 序列化工具 | `utils/serialization.py` | ✅ | JSON 序列化/反序列化 |

---

## API 接口列表

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/projects` | 获取方案列表 |
| POST | `/api/projects` | 创建新项目 |
| GET | `/api/projects/{id}` | 获取项目信息 |
| PUT | `/api/projects/{id}` | 更新项目信息 |
| DELETE | `/api/projects/{id}` | 删除项目 |
| GET | `/api/projects/{id}/cabinet` | 获取柜子模型 |
| PUT | `/api/projects/{id}/components/{cid}` | 修改组件属性（颜色/材料等） |
| POST | `/api/projects/{id}/undo` | 撤销操作（直接调用 CabinetManager） |
| POST | `/api/projects/{id}/redo` | 重做操作（直接调用 CabinetManager） |
| POST | `/api/projects/{id}/stop` | 停止当前 Agent 对话 |
| GET | `/api/projects/{id}/history` | 获取历史状态（can_undo/can_redo） |
| GET | `/api/projects/{id}/snapshots` | 获取快照列表 |
| POST | `/api/projects/{id}/snapshots/{idx}/restore` | 恢复快照 |

---

## 设计系统

### Glassmorphism + Dark Mode 风格

**主色调：**
- 主色：`#818cf8` (靛蓝紫)
- 成功色：`#34d399` (翡翠绿)
- 警告色：`#fbbf24` (琥珀黄)
- 错误色：`#f87171` (珊瑚红)

**Glassmorphism 效果：**
- 半透明背景：`rgba(15, 23, 42, 0.6)`
- 模糊效果：`backdrop-filter: blur(12px)`
- 细边框：`rgba(148, 163, 184, 0.15)`
- 柔和阴影：`0 8px 32px rgba(0, 0, 0, 0.3)`

**3D 场景：**
- 多光源照明（侧上方主光 + 补光）
- 木纹法线贴图纹理
- 黑色边缘线轮廓
- ShadowMaterial 地面阴影

---

## 响应式断点

| 断点 | 设备 | 工具栏宽度 |
|------|------|-----------|
| < 768px | 移动端 | 100% |
| 768-1023px | 平板 | 300px |
| 1024-1439px | PC | 360px |
| ≥ 1440px | 大屏 | 400px |

---

## 待开发功能

### 高优先级
- [x] Agent对话要连续，不需要每次都重新启动，减少对话等待时间
- [x] Agent每次对话前，要查询模型数据，确保模型是最新的
- [x] Agent修改模型后要对模型进行干涉检查
- [x] 对话示例可点击快速选择
- [x] Agent思考过程返回前端显示，用户可以实时查看
- [x] 对话中，前端可主动点击停止对话
- [x] 停止后的对话可继续执行，重新发起新对话会回滚暂停修改并删除本次停止历史
- [ ] 对话中切换方案，要停止旧对话
- [ ] 3D视图视角调整
- [ ] 增加模型AI级渲染功能，提供渲染图下载功能

### 中优先级
- [ ] 模型导出（JSON/OBJ/STL）
- [ ] 板件拖拽编辑
- [ ] 多语言支持

### 低优先级
- [ ] 用户登录/注册
- [ ] 协作编辑
- [ ] 版本历史对比

### 已完成 (2026-06-16)
- [x] Agent 连续对话（复用 Agent + MemorySaver checkpointer + thread_id）
- [x] Agent 每次对话前注入最新柜子状态上下文
- [x] 默认模型干涉修复
- [x] 选中高亮优化（蓝色边框描边）
- [x] 移动端长按优化
- [x] 对话完成前禁止新对话
- [x] 新增组件类型：single_door、double_door、handle
- [x] 双开门自动创建左右门子组件
- [x] 双开门开合动画（左门向左开，右门向右开）
- [x] 旧数据兼容迁移（door → single_door）
- [x] 门板/抽屉自动配拉手（单开门右侧竖拉手、双开门左右门竖拉手、抽屉顶部横拉手）
- [x] 新增默认模板：厨柜、衣柜、书架，新建方案时选择模板
- [x] 厨柜模板：单开门配拉手，层板z轴避让门板
- [x] 衣柜模板：双开门配左右门及拉手，下层层板分隔抽屉与门板，左右各一个抽屉配横拉手
- [x] 书架模板：4层层板、无门
- [x] HeaderBar 方案名读取 cabinet.name
- [x] SchemePanel Glassmorphism + Dark Mode 风格重构，两行布局增大名称输入区

---

## 技术债务

1. **3D 交互**：当前仅支持点击选中，缺少直接的拖拽编辑能力
2. **测试覆盖**：缺少单元测试和集成测试

---

## 最近更新

### 2026-06-16 (深夜)
- **Agent 连续对话**：复用 Agent 实例 + MemorySaver checkpointer + thread_id，同一项目内对话不再每次重建 Agent
- **柜子状态注入**：每次对话前查询柜子最新概览，以 `[当前柜子状态]` 前缀注入用户消息
- **方案切换清空对话**：切换方案时调用 `clear_agent_history` 清空 Agent 对话历史和 checkpointer
- **依赖更新**：新增 `langgraph-checkpoint>=2.0.0`
- **创建方案 API**：`POST /api/projects` 新增 `template` 查询参数（cabinet/kitchen/wardrobe/bookshelf）
- **厨柜模板**：900×600×800，单开门配竖拉手，层板z=18避让门板(z=0~18)
- **衣柜模板**：1800×600×2200，双开门含左右门子组件及竖拉手，下层层板(y=400)分隔上下区域，底部左右各一个抽屉配横拉手，双开门覆盖上层板到顶板
- **书架模板**：1200×400×1800，4层层板均匀分布，无门
- **模板工厂**：`CABINET_TEMPLATES` 映射 + `create_cabinet_by_template()` 函数
- **HeaderBar**：`projectName` 改为 `computed(() => cabinetStore.cabinet?.name)`，实时显示当前方案模板名
- **SchemePanel UI 重构**：Glassmorphism + Dark Mode 风格，SVG 图标替换 emoji，两行布局（名称输入独占一行），自定义下拉箭头，聚焦光晕效果

### 2026-06-16 (晚上)
- **组件类型扩展**：新增 single_door（单开门）、double_door（双开门）、handle（拉手）
- **双开门支持**：添加双开门时自动创建左右两扇门子组件
- **双开门动画**：左门向左开（绕左侧边），右门向右开（绕右侧边）
- **数据迁移**：旧数据中的 door 类型自动迁移为 single_door
- **子组件渲染**：正确处理双开门子组件的相对坐标
- **递归查找**：修复 findChildMeshIds 支持嵌套组件查找
- **自动配拉手**：添加单开门/双开门/抽屉时自动创建拉手子组件
  - 单开门：右侧竖拉手（长边沿 Y 轴，位于门板正面外侧）
  - 双开门：左门右侧竖拉手 + 右门左侧竖拉手
  - 抽屉：顶部横拉手（长边沿 X 轴，位于抽面正面外侧）
- **SKILL.md 更新**：添加默认拉手配置规则和抽屉组件说明

### 2026-06-16 (下午)
- **撤销/重做优化**：改为 HTTP 接口直接调用 CabinetManager，无需经过 Agent
- **撤销/重做按钮**：统一放在 HeaderBar 中，Viewport3D 移除重复按钮
- **键盘快捷键**：支持 Ctrl+Z 撤销、Ctrl+Y 重做
- **默认模型修复**：修复顶板、底板、背板与侧板的干涉问题
- **选中高亮优化**：改为蓝色边框描边，模型颜色不变
- **描边穿透**：设置 depthTest/depthWrite/renderOrder 确保描边不被遮挡
- **描边加粗**：使用 Line2 + LineMaterial 实现真正的线宽控制
- **移动端优化**：修复长按可交互项时的蓝色框框问题
- **对话限制**：AI 回复完成前禁止发送新消息
- **can_undo/can_redo**：后端添加历史状态查询方法

### 2026-06-16 (上午)
- **UI 重构**：Glassmorphism + Dark Mode 风格
- **响应式布局**：PC端/平板/移动端自适应
- **3D 场景优化**：多光源照明、木纹纹理、边缘线轮廓、阴影
- **动画效果**：悬停上浮、滑入滑出、脉冲动画、打字指示器
- **CSS 变量系统**：统一的颜色、间距、圆角、动画变量
- **保存按钮**：成功后 Toast 提示并刷新方案列表

### 2026-06-15
- 修复 3D 视图点击子物体自动展开组件树的 bug
- 将颜色/材料修改改为直接 API 调用（不经过 Agent，响应更快）
- 使用 v-show 替代 v-if 解决组件状态同步问题
- 将 expandedIds 移到 cabinetStore 统一管理
- 实现 3D 视图中板件点击选中高亮功能（Raycaster + 高亮材质）
- 实现材质/颜色可视化选择器（ComponentPanel）
- 实现 Toast 通知组件（错误处理与用户友好提示）
- 添加后端重要流程日志打印
- 新增 `PUT /api/projects/{id}/components/{cid}` 接口

### 2026-06-14
- 重构 UI 布局：右侧工具栏（360px）集成对话/组件/历史/方案
- ComponentPanel 改为上下布局（组件树 + 属性）
- HeaderBar 简化，移除组件/历史/方案按钮
- 撤销/重做按钮根据历史状态自动禁用

### 2026-06-13
- 方案列表支持重命名和删除功能
- 保存按钮迁移到 HeaderBar
- 添加 ComponentPanel 组件列表面板

### 2026-06-17
- **对话示例快捷填入**：ChatPanel 示例指令改为数组维护，点击示例可快速填入输入框
- **Agent 思考过程展示**：后端实时推送工具调用状态，前端展示查询、添加、修改、干涉检查等步骤
- **停止/继续对话**：新增 `POST /api/projects/{id}/stop`，对话执行中可停止，停止消息标注“已停止”并支持继续执行
- **暂停回滚机制**：停止时保存 cabinet/history/Agent history 快照；继续执行保留中间状态；重新发起新对话时回滚暂停模型修改并恢复暂停前 Agent 历史
- **Agent 快照优化**：`snapshot_agent_history` / `restore_agent_history` 只操作已有 checkpointer，避免新建和继续对话重复复用 Agent
- **干涉检查功能**：添加组件干涉检查，使用 AABB 包围盒检测重叠
  - `check_interference()` 工具函数：检查组件间是否存在干涉
  - `commit_changes()` 工具函数：在干涉检查通过后保存快照
  - 排除父子关系组件对（如门板和拉手）
  - 容器类型（如 double_door）不参与检查
- **快照保存优化**：编辑操作不再自动保存快照，改为在干涉检查通过后统一保存
  - 避免一次对话产生多次快照
  - API 接口修改属性仍会自动保存快照
- **干涉检查配置**：通过环境变量 `ENABLE_INTERFERENCE_CHECK` 控制是否启用
  - 设为 `true` 启用干涉检查（默认）
  - 设为 `false` 禁用干涉检查
- **双开门动画修复**：修复双开门关闭动画后模型消失的问题
  - `isDoorType` 只匹配 `single_door`，不处理 `double_door` 容器
- **双开门占位符修复**：修复双开门占位符可被选中的问题
  - 设置 `placeholder.visible = false` 防止 raycaster 检测
- **方案切换修复**：修复切换方案时打开的门板残留问题
  - `renderCabinet` 时清理 `doorOriginals` 中的 pivotGroup
- **组件树滚动**：选中 3D 视图组件时，组件树自动滚动到对应位置
- **展开按钮优化**：增大 expand-btn 的可点击范围

---

## 项目结构

```
LLMtoCabinet_deeepseek/
├── frontend/
│   └── src/
│       ├── components/     # Vue 组件
│       │   ├── HeaderBar.vue
│       │   ├── Viewport3D.vue
│       │   ├── ChatPanel.vue
│       │   ├── ComponentPanel.vue
│       │   ├── HistoryPanel.vue
│       │   ├── SchemePanel.vue
│       │   └── ToastNotification.vue
│       ├── stores/         # Pinia 状态管理
│       └── utils/          # 工具函数和类型定义
├── backend/
│   ├── agent/              # Agent 相关
│   │   ├── skills/         # Skill 文件
│   │   ├── tools.py        # 工具函数
│   │   └── cabinet_agent.py
│   ├── api/                # API 路由
│   ├── engine/             # 编辑引擎
│   ├── models/             # 数据模型
│   ├── utils/              # 工具函数
│   └── main.py             # 入口文件
└── SPEC.md                 # 规格说明书
```

---

*最后更新：2026-06-17*
