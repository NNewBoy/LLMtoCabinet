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
- `check_interference()` - 检查组件间干涉
- `commit_changes()` - 提交保存编辑结果

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
| HeaderBar | `HeaderBar.vue` | ✅ | 顶部导航栏（撤销/重做/保存/渲染/工具下拉列表）Element Plus 化 |
| Viewport3D | `Viewport3D.vue` | ✅ | 3D 渲染视图 + 点击选中 + 阴影（工具栏已迁移至 HeaderBar） |
| RenderModal | `RenderModal.vue` | ✅ | 渲染设置弹窗（截图角度/风格/材质/颜色，自动填充柜子属性） |
| ChatPanel | `ChatPanel.vue` | ✅ | AI 对话面板 Element Plus 化 |
| ComponentPanel | `ComponentPanel.vue` | ✅ | 组件树 + 属性 + 颜色/材料选择 Element Plus 化 |
| HistoryPanel | `HistoryPanel.vue` | ✅ | 历史版本列表 |
| SchemePanel | `SchemePanel.vue` | ✅ | 方案管理（新建/切换/重命名/删除）Element Plus 化 |
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
- [x] 对话中切换方案，直接关闭并停止旧对话
- [x] 3D视图视角调整，柜子正方向改为z轴正方向，支持坐标系显示
- [x] Agent对双开门识别成两扇单开门，门板坐标未设到开口(z=柜深)，门板厚度未设为18（width=thickness）（更换LLM）
- [x] 增加模型AI级渲染功能，提供渲染图下载功能

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
- [x] 新增组件类型：door、double_door、handle
- [x] 双开门自动创建左右门子组件
- [x] 双开门开合动画（左门向左开，右门向右开）
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
- **厨柜模板**：900×600×800，单开门配竖拉手，柜子开口方向为 +Z，背板 z=0，内部层板避开背板
- **衣柜模板**：1800×600×2200，双开门含左右门子组件及竖拉手，下层层板分隔抽屉与门板，抽屉配横拉手，柜子开口方向为 +Z
- **书架模板**：1200×400×1800，4层层板均匀分布，无门，背板 z=0，层板避开背板
- **模板工厂**：`CABINET_TEMPLATES` 映射 + `create_cabinet_by_template()` 函数
- **HeaderBar**：`projectName` 改为 `computed(() => cabinetStore.cabinet?.name)`，实时显示当前方案模板名
- **SchemePanel UI 重构**：Glassmorphism + Dark Mode 风格，SVG 图标替换 emoji，两行布局（名称输入独占一行），自定义下拉箭头，聚焦光晕效果

### 2026-06-16 (晚上)
- **组件类型扩展**：新增 door（单开门）、double_door（双开门）、handle（拉手）
- **双开门支持**：添加双开门时自动创建左右两扇门子组件
- **双开门动画**：左门向左开（绕左侧边），右门向右开（绕右侧边）
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
- **对话中切换方案**：AI 对话进行中切换方案时，前端立即关闭旧对话并请求后端停止旧项目 Agent
- **坐标系显示**：3D 视图新增坐标系开关，显示带箭头和 x/y/z 标签的坐标轴
- **+Z 开口方向统一**：所有模板开口方向统一为 +Z，默认相机和门/抽屉动画同步调整
- **模板背板规则**：四个模板背板统一 `z=0`；侧板/顶板/底板保持完整柜深包围背板；内部层板/中竖板/抽屉从 `z=5` 开始避免与背板干涉
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
  - `isDoorType` 只匹配 `door`，不处理 `double_door` 容器
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
│       │   ├── RenderModal.vue
│       │   ├── ChatPanel.vue
│       │   ├── ComponentPanel.vue
│       │   ├── HistoryPanel.vue
│       │   ├── SchemePanel.vue
│       │   └── ToastNotification.vue
│       ├── styles/
│       │   └── theme.css   # Glassmorphism + Dark Mode 主题 + Element Plus 暗色覆盖
│       ├── stores/         # Pinia 状态管理
│       │   ├── cabinetStore.ts
│       │   ├── chatStore.ts
│       │   ├── themeStore.ts   # 主题状态（浅色/暗色切换）
│       │   ├── viewportStore.ts
│       │   └── websocketStore.ts
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

### 2026-06-25
- **浅色主题支持**：新增 Glassmorphism + Light Mode 主题，与原有 Dark Mode 并行支持
  - `theme.css` 重构：`:root` 定义浅色默认变量，`html.dark` 选择器覆盖暗色变量
  - 新增浅色主题变量：浅蓝渐变背景 `#eef2f8 → #e0e7ff`、浅色玻璃背景、浅色边框等
  - 新增 `--bg-modal-overlay`、`--bg-preview` 等主题感知变量
  - Element Plus 浅色/暗色模式全覆盖（按钮、输入框、选择器、对话框、弹出层等）
- **主题切换功能**：HeaderBar 工具栏新增 ☀/☾ 切换按钮
  - 新增 `stores/theme.ts`：Pinia store 管理主题状态
  - 优先级：URI 参数 `?theme=light|dark` > localStorage > 默认 dark
  - 切换通过 `html.dark` class 控制，CSS 变量即时生效，无需刷新页面
  - `main.ts` 移除硬编码 `classList.add('dark')`，改由 theme store 控制
  - `App.vue` onMounted 调用 `themeStore.init()`
- **URI 传参支持**：外部平台可通过 `?theme=light` 或 `?theme=dark` 跳转指定主题
- **组件主题适配修复**：修复多个组件中硬编码暗色颜色未跟随主题切换
  - App.vue：`.tool-tabs` 背景改用 `var(--glass-bg)`
  - HistoryPanel.vue：选中态 `color: white` → `var(--color-primary)`
  - SchemePanel.vue：选中态 `color: white`、时间戳 `rgba(255,255,255,0.7)` → `var(--color-primary)`
  - RenderModal.vue：遮罩层 `rgba(0,0,0,0.6)` → `var(--bg-modal-overlay)`，预览背景 → `var(--bg-preview)`
- **3D 场景主题切换**：Viewport3D 3D 渲染场景跟随主题切换
  - 新增 `updateSceneBackground()`：暗色 `0x0f172a` / 浅色 `0xeef2f8`
  - 新增 `updateSceneTheme()`：同步更新背景和环境光强度（暗色 0.5 / 浅色 0.8）
  - `watch(themeStore.isDark)` 监听主题变化自动更新 3D 场景
  - `exitRenderMode` 恢复背景改用主题感知颜色

### 2026-06-24
- **渲染表单自动填充**：RenderModal 打开时从柜子模型计算最常用的颜色和材质
  - `collectAllComponents`：递归遍历组件树（含子组件如拉手），收集所有板件
  - `mostFrequent`：统计出现次数最多的值
  - 弹窗打开后 `initFormFromCabinet` 将柜子中使用最多的 color 和 material 填入表单，覆盖预设默认值
- **渲染图上传改造**：截图上传接口由 JSON 改为 `multipart/form-data`
  - 新增 `dataUrlToFile` 函数：将 canvas 的 base64 data URL 解码为二进制，封装成 `File` 对象（保留原 MIME 类型）
  - `uploadScreenshot` 重写：用 `FormData` 包装 `file` 字段，POST 到 `/render_api/images/upload`，返回 `data.data.image_id`
  - 使用 `fetch` + `FormData` 时不手动设置 `Content-Type`，由浏览器自动添加带 boundary 的 `multipart/form-data` 头
- **渲染请求参数变更**：`handleSubmit` 中 `image_url` 参数替换为 `image_id`，与上传接口返回字段对齐
- **渲染跳转策略优化**：
  - 本地开发环境（`import.meta.env.DEV`）：origin 改为 `${protocol}//${hostname}:5173`，跳转到 5173 端口前端服务
  - 生产环境：使用 `window.location.origin`，行为不变
  - 移动端检测：通过 `navigator.userAgent` 识别 Android/iPhone/iPad 等设备，命中时用 `window.location.href` 在当前页加载渲染结果，PC 端保持 `window.open` 新窗口打开
- **Element Plus 全局集成**：`main.ts` 中全局引入 Element Plus 和 `element-plus/dist/index.css`，`document.documentElement.classList.add('dark')` 启用暗色模式
- **主题 CSS 抽离**：从 `App.vue` 中提取全局样式到 `src/styles/theme.css`
  - 设计令牌（Design Tokens）：保留项目原有配色体系（靛蓝紫主色、翡翠绿成功色等）
  - Element Plus 暗色模式覆盖（`html.dark` 选择器）：Button、Tabs、Input、Select、Dialog、MessageBox、Popover、ColorPicker、Upload 等 20+ 组件
  - 全局重置、Glassmorphism 工具类、滚动条、选中文本、`prefers-reduced-motion` 无障碍支持
  - 按钮禁用态样式（`is-disabled`）：所有变体（primary/success/warning/danger/default/link）覆盖 hover/focus/active 状态，`opacity: 0.45` + `cursor: not-allowed`
  - Input/Textarea 禁用态样式：`.el-textarea.is-disabled .el-textarea__inner` 和 `.el-input.is-disabled .el-input__wrapper`
- **前端组件 Element Plus 化**：全部原生 HTML 元素替换为 Element Plus 组件
  - `<button>` → `<el-button>`（HeaderBar 7个、RenderModal 7个、ChatPanel 3个、ComponentPanel 2个、SchemePanel 3个）
  - `<select>` → `<el-select>` + `<el-option>`（RenderModal 5个、ComponentPanel 1个、SchemePanel 1个）
  - `<textarea>` → `<el-input type="textarea">`（ChatPanel 1个、RenderModal 1个）
  - `<input>` → `<el-input>`（SchemePanel 2个）
  - App.vue 移动端 tab buttons 保持不变（按要求排除）
- **CSS 清理**：移除 Element Plus 替换后不再需要的旧样式
  - HeaderBar：`.btn` 简化（移除 padding/border-radius/font-size/cursor/transition/::before 伪元素）
  - RenderModal：`.form-select` 移除 30+ 行原生 select 样式，`.form-textarea` 移除原生 textarea 样式，`.toggle-btn`/`.angle-btn`/`.btn-cancel`/`.btn-submit` 简化
  - ChatPanel：`.chat-input textarea` 移除 20 行原生样式，`.send-btn`/`.stop-btn`/`.example`/`.continue-btn` 简化
  - ComponentPanel：`.expand-btn` 简化，`.prop-select` 移除原生 select 样式
  - SchemePanel：`.name-input`/`.template-select` 移除原生样式（改用 `:deep()` 保留图标偏移），`.action-btn` 移除 `::before` 伪元素
- **工具栏迁移**：Viewport3D 中的工具栏（爆炸图/透视图/开门/坐标系/网格/阴影/复原）迁移到 HeaderBar
  - 新增 `viewportStore.ts`：Pinia store 管理 6 个工具状态 + `toggleSignal` 信号机制
  - HeaderBar 渲染按钮右侧新增「工具」el-popover 下拉列表，select 风格垂直列表，活跃项带 ✓ 勾选标记
  - Viewport3D 通过 `watch(viewportStore.toggleSignal)` 监听信号执行 Three.js 操作
  - Viewport3D 中移除 toolbar 模板和 CSS
- **渲染弹窗取消选中**：点击渲染按钮时调用 `cabinetStore.selectComponent(null)` 取消 3D 视图中物体的选中状态

### 2026-06-23
- **渲染截图相机角度优化**：重写 `setCameraAngle` 函数，基于透视投影数学精确计算相机距离
  - 正确处理柜子非中心原点坐标（X/Z 居中，Y 从 0 开始）
  - 水平和垂直 FOV 约束独立计算，支持任意宽高比
  - 角点深度 = `dist - dot(corner, viewDir)`，自动保证相机在柜子包围盒外
  - 限制方向精确 5% 留白（柜子占 90%），另一方向自然留白 ≥ 5%
- **俯视图优化**：top 视角改为 45° 从 +Y 和 +Z 方向俯视柜子中心
  - 顶板最高点在屏幕 95% 位置，上方背景留白精确 5%
  - 能同时看到柜身正面和完整顶板
- **RenderModal 渲染模式**：支持 front / top / side_45 三种截图角度，背景白色，关闭坐标系/网格/阴影等视觉干扰

---

*最后更新：2026-06-25*
