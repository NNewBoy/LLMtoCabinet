# Cabinet3D Editor

柜子家具3D模型自然语言在线编辑器。通过对话方式，对柜子的各板件和组件进行3D编辑。

## 功能特性

- **自然语言编辑** — 输入中文指令即可编辑柜子（如"在中间加一块隔板"、"把左侧板加高10cm"）
- **实时3D预览** — 基于 Three.js 的 WebGL 渲染，支持旋转/缩放/平移
- **智能Agent** — DeepAgents 框架驱动，自动理解意图并执行编辑操作
- **Undo/Redo** — 完整的撤销/重做支持（Ctrl+Z / Ctrl+Y）
- **Glassmorphism UI** — 现代深色主题，半透明毛玻璃效果
- **响应式设计** — 支持 PC、平板、移动端自适应布局
- **丰富组件** — 支持侧板、隔板、单开门、双开门、抽屉、拉手等多种组件
- **3D动画** — 门板开合动画（双开门左右分别打开）

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Vue 3 + TypeScript + Vite + Three.js + Pinia |
| 后端 | Python + FastAPI + SQLite + DeepAgents |
| 通信 | WebSocket (实时双向) + REST API |
| UI 风格 | Glassmorphism + Dark Mode |

## 快速开始

### 环境要求

- Python 3.11+
- Node.js 18+
- LLM API Key（DeepSeek / OpenAI / Anthropic）

### 1. 后端启动

```bash
cd backend

# 创建并激活虚拟环境
python -m venv venv

# Linux/macOS
source venv/bin/activate

# Windows (PowerShell)
.\venv\Scripts\Activate.ps1

# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填入你的 LLM API Key
# 必须配置: LLM_MODEL 和 LLM_API_KEY

# 启动服务（默认端口 8001）
uvicorn main:app --port 8001 --reload
```

### 2. 前端启动

```bash
cd frontend

# 安装依赖
npm install

# 启动开发服务器（默认端口 5174）
npm run dev
```

打开浏览器访问 `http://localhost:5174`。

## 界面布局

### PC 端（≥768px）
```
┌─────────────────────────────────────────────────────────────┐
│  HeaderBar (撤销/重做/保存)                                   │
├─────────────────────────────────────┬───────────────────────┤
│                                     │  工具面板 (360px)      │
│                                     │  ┌─┬─┬─┬─┐           │
│          3D 视图                     │  │💬│🧩│📋│📁│          │
│      (Three.js 渲染)                │  └─┴─┴─┴─┘           │
│                                     │                       │
│                                     │  对话/组件/历史/方案   │
│                                     │                       │
└─────────────────────────────────────┴───────────────────────┘
```

### 移动端（<768px）
```
┌─────────────────────┐
│     HeaderBar       │
├─────────────────────┤
│                     │
│     3D 视图         │
│                     │
├─────────────────────┤
│  💬 │ 🧩 │ 📋 │ 📁  │
├─────────────────────┤
│                     │
│   工具面板          │
│                     │
└─────────────────────┘
```

## 功能说明

### 自然语言编辑

在右侧聊天面板输入自然语言指令：

| 指令 | 效果 |
|------|------|
| 在中间加一块隔板 | 在柜体中心高度添加 shelf 组件 |
| 把左侧板加高10cm | 修改左侧面板 height +100mm |
| 删掉右边的门板 | 移除右侧门板组件 |
| 换成橡木材料 | 修改 material 为 oak |
| 柜子加宽到900mm | 修改柜体整体 length 为 900 |
| 加一扇单开门 | 添加 single_door 组件 |
| 加双开门 | 添加 double_door，自动创建左右门 |
| 给门板加拉手 | 添加 handle 作为门板子组件 |
| 撤销 | 回退上一步操作 |

### 组件管理

- **组件树**：查看所有组件的层级关系，支持展开/折叠子组件
- **属性面板**：查看/修改选中组件的属性（尺寸、位置、材料、颜色）
- **颜色选择**：9 种预设颜色，点击即可应用
- **材料选择**：5 种预设材料（多层板、中密度板、刨花板、橡木、胡桃木）

### 组件类型

| 类型 | 说明 |
|------|------|
| side_panel | 侧板 |
| back_panel | 背板 |
| top_panel | 顶板 |
| bottom_panel | 底板 |
| shelf | 隔板 |
| single_door | 单开门（绕左侧边旋转） |
| double_door | 双开门（自动创建左右门子组件） |
| drawer | 抽屉 |
| handle | 拉手（门板子组件） |

### 3D 视图操作

- **旋转**：鼠标左键拖拽
- **缩放**：鼠标滚轮
- **平移**：鼠标右键拖拽
- **选中**：点击组件高亮显示（蓝色边框描边）
- **工具栏**：
  - 爆炸图：组件分离展示
  - 透视图：半透明显示内部结构
  - 开门：门板/抽屉开合动画
  - 复原：恢复初始状态

### 方案管理

- **新建方案**：创建新的柜子项目
- **切换方案**：在多个方案间切换
- **重命名**：修改方案名称
- **删除**：删除不需要的方案
- **保存**：保存当前修改

## 设计风格

### Glassmorphism + Dark Mode

- **主色调**：靛蓝紫 `#818cf8`
- **成功色**：翡翠绿 `#34d399`
- **背景**：深蓝渐变 `#0f172a → #1e1b4b`
- **毛玻璃效果**：`backdrop-filter: blur(12px)`
- **边框**：`rgba(148, 163, 184, 0.15)`

### 动画效果

- 按钮悬停上浮 + 发光
- 列表项悬停滑动
- Toast 通知滑入滑出
- 连接状态脉冲动画
- 选中项渐变背景

## API 接口

### REST

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/projects` | 创建项目 |
| GET | `/api/projects/{id}` | 获取项目 |
| PUT | `/api/projects/{id}` | 更新项目 |
| DELETE | `/api/projects/{id}` | 删除项目 |
| PUT | `/api/projects/{id}/components/{cid}` | 修改组件属性 |
| POST | `/api/projects/{id}/undo` | 撤销 |
| POST | `/api/projects/{id}/redo` | 重做 |
| GET | `/api/projects/{id}/history` | 获取历史状态 |

### WebSocket

端点: `ws://host/ws/{project_id}`

```
客户端发送 → {"type": "chat_message", "text": "在中间加一块隔板"}
服务端推送 ← {"type": "cabinet_update", "cabinet": {...}}
```

## 项目结构

```
.
├── SPEC.md                           # 软件规格说明书
├── PROGRESS.md                       # 开发进度报告
├── README.md                         # 项目说明
├── DEPLOY_UBUNTU.md                  # Ubuntu 部署指南
├── backend/                          # Python 后端
│   ├── main.py                       # FastAPI 入口
│   ├── config.py                     # 配置（数据库/LLM/Skills路径）
│   ├── requirements.txt
│   ├── .env.example                  # 环境变量模板
│   ├── models/
│   │   ├── cabinet.py                # Cabinet/Component 数据模型
│   │   └── database.py               # SQLAlchemy ORM
│   ├── engine/
│   │   ├── cabinet_manager.py        # 柜子编辑引擎
│   │   └── history.py                # Undo/Redo 栈
│   ├── agent/
│   │   ├── tools.py                  # Agent 工具函数
│   │   ├── cabinet_agent.py          # DeepAgents 创建
│   │   └── skills/                   # SKILL.md 领域知识
│   │       ├── cabinet_editing/SKILL.md
│   │       └── cabinet_design/SKILL.md
│   ├── api/
│   │   ├── projects.py               # REST API
│   │   └── websocket.py              # WebSocket
│   ├── database/
│   │   └── connection.py             # SQLite 连接
│   └── utils/
│       └── serialization.py          # JSON 序列化
└── frontend/                         # Vue3 前端
    ├── src/
    │   ├── App.vue                   # 主布局（响应式）
    │   ├── config.ts                 # API/WS 路径配置
    │   ├── components/
    │   │   ├── HeaderBar.vue         # 顶部工具栏
    │   │   ├── Viewport3D.vue        # Three.js 3D 渲染
    │   │   ├── ChatPanel.vue         # AI 对话面板
    │   │   ├── ComponentPanel.vue    # 组件树 + 属性
    │   │   ├── HistoryPanel.vue      # 历史版本
    │   │   ├── SchemePanel.vue       # 方案管理
    │   │   └── ToastNotification.vue # 通知组件
    │   └── stores/
    │       ├── cabinetStore.ts       # 柜子状态
    │       ├── chatStore.ts          # 对话状态
    │       └── websocketStore.ts     # WebSocket 连接
    └── vite.config.ts                # 含 base 路径和 API/WebSocket 代理
```

## 部署

生产环境部署请参考 [Ubuntu 部署指南](./DEPLOY_UBUNTU.md)。

前端生产环境部署到 `/llmtocabinet/` 子路径，`vite.config.ts` 和 `config.ts` 已自动处理路径前缀。

## 架构说明

```
用户输入自然语言 → 前端通过 WebSocket 发送到后端
                        ↓
           DeepAgents Agent (加载 SKILL.md 领域知识)
                        ↓
           LLM 决策调用哪个 Tool (query/add/remove/modify)
                        ↓
           CabinetManager 执行编辑操作
                        ↓
           返回更新后的 Cabinet Object JSON
                        ↓
           WebSocket 推送至前端 → Three.js 重新渲染
```

**Skills vs Tools**：
- **Skills** = `SKILL.md` 文件，提供柜子编辑的领域知识（坐标系、尺寸规范、校验规则）
- **Tools** = Python 函数，Agent 实际调用来执行增删改查操作

## 响应式断点

| 断点 | 设备 | 工具栏宽度 |
|------|------|-----------|
| < 768px | 移动端 | 100% |
| 768-1023px | 平板 | 300px |
| 1024-1439px | PC | 360px |
| ≥ 1440px | 大屏 | 400px |

## 许可证

MIT
