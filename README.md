# Cabinet3D Editor

柜子家具3D模型自然语言在线编辑器。通过对话方式，对柜子的各板件和组件进行3D编辑。

## 功能特性

- **自然语言编辑** — 输入中文指令即可编辑柜子（如"在中间加一块隔板"、"把左侧板加高10cm"）
- **实时3D预览** — 基于 Three.js 的 WebGL 渲染，支持旋转/缩放/平移
- **智能Agent** — DeepAgents 框架驱动，自动理解意图并执行编辑操作
- **Undo/Redo** — 完整的撤销/重做支持

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Vue 3 + TypeScript + Vite + Three.js + Pinia |
| 后端 | Python + FastAPI + SQLite + DeepAgents |
| 通信 | WebSocket (实时双向) + REST API |

## 快速开始

### 环境要求

- Python 3.11+
- Node.js 18+
- LLM API Key（DeepSeek / OpenAI / Anthropic）

### 1. 后端启动

```bash
cd backend

# 安装依赖
pip install -r requirements.txt

# 配置环境变量（创建 .env 文件）
cat > .env << EOF
LLM_MODEL=deepseek:deepseek-chat
LLM_API_KEY=your-api-key-here
EOF

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

## 项目结构

```
.
├── SPEC.md                           # 软件规格说明书
├── backend/                          # Python 后端
│   ├── main.py                       # FastAPI 入口
│   ├── config.py                     # 配置（数据库/LLM/Skills路径）
│   ├── requirements.txt
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
    │   ├── App.vue                   # 主布局
    │   ├── components/
    │   │   ├── Viewport3D.vue        # Three.js 3D 渲染
    │   │   ├── ChatPanel.vue         # AI 对话面板
    │   │   ├── HeaderBar.vue         # 顶部工具栏
    │   │   └── FooterBar.vue         # 组件列表/属性面板
    │   └── stores/
    │       ├── cabinetStore.ts       # 柜子状态
    │       ├── chatStore.ts          # 对话状态
    │       └── websocketStore.ts     # WebSocket 连接
    └── vite.config.ts                # 含 API/WebSocket 代理
```

## 使用示例

在右侧聊天面板输入自然语言指令：

| 指令 | 效果 |
|------|------|
| 在中间加一块隔板 | 在柜体中心高度添加 shelf 组件 |
| 把左侧板加高10cm | 修改左侧面板 height +100mm |
| 删掉右边的门板 | 移除右侧门板组件 |
| 换成橡木材料 | 修改 material 为 oak |
| 柜子加宽到900mm | 修改柜体整体 length 为 900 |
| 撤销 | 回退上一步操作 |

## API 接口

### REST

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/projects` | 创建项目 |
| GET | `/api/projects/{id}` | 获取项目 |
| PUT | `/api/projects/{id}` | 更新项目 |
| DELETE | `/api/projects/{id}` | 删除项目 |
| POST | `/api/projects/{id}/undo` | 撤销 |
| POST | `/api/projects/{id}/redo` | 重做 |

### WebSocket

端点: `ws://host/ws/{project_id}`

```
客户端发送 → {"type": "chat_message", "text": "在中间加一块隔板"}
服务端推送 ← {"type": "cabinet_update", "cabinet": {...}}
```

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