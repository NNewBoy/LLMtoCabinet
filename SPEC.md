# 柜子3D模型在线编辑器 - 软件规格说明书 (SPEC)

## 1. 项目概述

### 1.1 项目名称
**Cabinet3D Editor** - 柜子家具3D模型自然语言在线编辑器

### 1.2 项目定位
一个基于 Web 的在线 3D 柜子编辑器，用户可通过自然语言对话的方式，对柜子的各板件和组件进行编辑操作。系统由 AI Agent 驱动，自动理解用户意图并执行相应的编辑指令。

### 1.3 核心价值
- **自然语言交互**：用户无需学习 3D 建模软件，通过对话即可编辑柜子模型
- **实时 3D 预览**：编辑操作即时在浏览器 3D 视图中呈现
- **智能编辑**：Agent 自动理解复杂编辑意图，拆解为具体操作步骤

---

## 2. 技术架构

### 2.1 整体架构

```
┌─────────────────────────────────────────────────────────────┐
│                        用户浏览器                              │
│  ┌─────────────────────────┐  ┌───────────────────────────┐  │
│  │   Vue3 + Three.js        │  │   聊天面板 (AI对话)        │  │
│  │   3D 渲染引擎            │  │   - 自然语言输入           │  │
│  │   - 柜子模型渲染         │  │   - 操作反馈展示          │  │
│  │   - 交互操作 (旋转/缩放) │  │   - 历史消息流            │  │
│  └──────────┬──────────────┘  └───────────┬───────────────┘  │
└─────────────┼───────────────────────────────┼────────────────┘
              │          WebSocket / HTTP      │
              │  (模型数据同步 + Agent消息流)    │
┌─────────────┼───────────────────────────────┼────────────────┐
│             ▼                               ▼                 │
│  ┌──────────────────────────────────────────────────────┐    │
│  │               FastAPI 后端服务                         │    │
│  │                                                        │    │
│  │  ┌──────────────────┐  ┌──────────────────────────┐   │    │
│  │  │  API Router       │  │  Agent 引擎 (DeepAgents)  │   │    │
│  │  │  - REST API       │  │  - LLM 调用              │   │    │
│  │  │  - WebSocket      │  │  - Skill 调度            │   │    │
│  │  │  - 会话管理       │  │  - 工具调用              │   │    │
│  │  └────────┬─────────┘  └───────────┬──────────────┘   │    │
│  │           │                         │                   │    │
│  │  ┌────────▼─────────────────────────▼──────────────┐   │    │
│  │  │              Cabinet 编辑引擎                     │   │    │
│  │  │  - Cabinet Object 模型管理                       │   │    │
│  │  │  - 板件/组件 CRUD 操作                           │   │    │
│  │  │  - 几何计算 & 碰撞检测                           │   │    │
│  │  │  - 操作历史 / Undo-Redo                         │   │    │
│  │  └──────────────────────┬──────────────────────────┘   │    │
│  │                         │                               │    │
│  │  ┌──────────────────────▼──────────────────────────┐   │    │
│  │  │              SQLite 数据持久层                     │   │    │
│  │  │  - 用户/项目/模型 存储                            │   │    │
│  │  │  - 操作历史 记录                                  │   │    │
│  │  └─────────────────────────────────────────────────┘   │    │
│  └──────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 技术栈

| 层级 | 技术选型 | 说明 |
|------|----------|------|
| 前端框架 | Vue 3 + TypeScript | 响应式UI框架 |
| 构建工具 | Vite | 快速开发构建 |
| 3D 渲染 | Three.js | WebGL 3D渲染引擎 |
| 前端状态管理 | Pinia | Vue3 官方状态管理 |
| 前端通信 | WebSocket + Fetch API | 实时+请求响应双通道 |
| 后端框架 | FastAPI (Python 3.11+) | 高性能异步Web框架 |
| AI Agent | DeepAgents (LangChain) | LLM Agent 框架 |
| LLM 模型 | DeepSeek / GPT-4 / Claude | 支持工具调用的LLM |
| 数据库 | SQLite + SQLAlchemy (异步) | 轻量级嵌入式数据库 |
| 异步任务 | asyncio | Python 原生异步 |
| 数据校验 | Pydantic v2 | 类型安全的数据模型 |

---

## 3. 功能需求

### 3.1 用户故事

| ID | 用户角色 | 功能描述 | 优先级 |
|----|---------|---------|--------|
| US-01 | 用户 | 能在浏览器中查看柜子的3D模型，支持旋转、缩放、平移 | P0 |
| US-02 | 用户 | 能通过自然语言输入编辑指令（如"把左边侧板加高10cm"） | P0 |
| US-03 | 用户 | 能看到AI对指令的理解确认和编辑结果反馈 | P0 |
| US-04 | 用户 | 能通过自然语言添加/删除板件（如"加一块隔板在中间"） | P1 |
| US-05 | 用户 | 能通过自然语言修改板件属性（尺寸、位置、材料、颜色） | P1 |
| US-06 | 用户 | 能撤销/重做编辑操作 | P2 |
| US-07 | 用户 | 能保存和加载柜子项目 | P2 |
| US-08 | 用户 | 能导出柜子模型数据 | P3 |

### 3.2 功能模块划分

| 模块 | 功能 | 
|------|------|
| **3D 渲染模块** | 柜子模型实时渲染、视角控制（旋转/缩放/平移）、板件高亮选中、材质/颜色渲染 |
| **AI 对话模块** | 聊天界面、自然语言输入、Agent 响应流式展示、操作确认/拒绝 |
| **编辑引擎模块** | Cabinet Object 构建与维护、板件/组件 CRUD 操作、几何参数计算、合法性校验 |
| **Agent 引擎模块** | LLM 调用（DeepAgents）、Skill 注册与调度、工具函数绑定、操作意图解析 |
| **数据持久化模块** | 用户/项目信息存储、柜子模型序列化/反序列化、操作历史记录 |

---

## 4. 数据模型

### 4.1 Cabinet Object 核心模型

```
Cabinet (柜子整体)
├── id: str                          # 唯一标识
├── name: str                        # 柜子名称
├── length: float                    # 总长 (X轴, mm)
├── width: float                     # 总宽 (Z轴, mm)  
├── height: float                    # 总高 (Y轴, mm)
├── position: Vector3                # 世界坐标 {x, y, z}
├── rotation: Vector3                # 朝向/旋转 {x, y, z} (欧拉角, 度)
├── material: str                    # 默认材料 (如 "oak", "plywood")
├── components: List[CabinetComponent]  # 子组件列表
└── metadata: dict                   # 扩展元数据
```

### 4.2 CabinetComponent (组件/板件)

```
CabinetComponent (板件或组件)
├── id: str                          # 唯一标识
├── name: str                        # 组件名称 (如 "左侧板", "隔板1")
├── type: ComponentType              # 类型枚举
│   ├── SIDE_PANEL                   # 侧板
│   ├── BACK_PANEL                   # 背板
│   ├── TOP_PANEL                    # 顶板
│   ├── BOTTOM_PANEL                 # 底板
│   ├── SHELF                        # 隔板/层板
│   ├── DOOR                         # 门板
│   ├── DRAWER                       # 抽屉
│   ├── DIVIDER                      # 分隔板
│   └── CUSTOM                       # 自定义组件
├── length: float                    # 长度 (X轴, mm)
├── width: float                     # 宽度 (Z轴, mm, 即板材厚度)
├── height: float                    # 高度 (Y轴, mm)
├── position: Vector3                # 相对柜体的本地坐标 {x, y, z}
├── rotation: Vector3                # 相对旋转 {x, y, z}
├── material: str                    # 材料
├── color: str                       # 颜色 (hex, 如 "#8B4513")
├── thickness: float                 # 板厚 (mm, 默认18)
├── is_visible: bool                 # 是否可见
├── children: List[CabinetComponent] # 子组件 (如抽屉内的分隔)
└── metadata: dict                   # 扩展属性
```

### 4.3 Vector3

```
Vector3
├── x: float    # X坐标 (柜子长度方向)
├── y: float    # Y坐标 (柜子高度方向)
└── z: float    # Z坐标 (柜子宽度/深度方向)
```

### 4.4 数据库表结构 (SQLite)

```sql
-- 用户表
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 项目表
CREATE TABLE projects (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    cabinet_json TEXT NOT NULL,       -- Cabinet Object JSON 序列化
    thumbnail TEXT,                    -- 缩略图 base64
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 操作历史表 (用于 Undo/Redo)
CREATE TABLE operation_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id TEXT NOT NULL,
    sequence_num INTEGER NOT NULL,    -- 操作序号
    operation_type TEXT NOT NULL,     -- 操作类型: add/update/delete
    target_id TEXT,                   -- 操作目标组件ID
    snapshot_json TEXT NOT NULL,      -- 操作前的快照
    description TEXT,                 -- 操作描述
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- 对话历史表
CREATE TABLE conversation_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id TEXT NOT NULL,
    role TEXT NOT NULL,               -- user / assistant / system
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);
```

---

## 5. API 设计

### 5.1 REST API

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/api/projects` | 创建新项目（初始化默认柜子） |
| `GET` | `/api/projects/{id}` | 获取项目信息及柜子模型 |
| `PUT` | `/api/projects/{id}` | 更新项目信息 |
| `DELETE` | `/api/projects/{id}` | 删除项目 |
| `GET` | `/api/projects/{id}/cabinet` | 获取柜子完整 Object JSON |
| `POST` | `/api/projects/{id}/undo` | 撤销上一步操作 |
| `POST` | `/api/projects/{id}/redo` | 重做已撤销操作 |
| `GET` | `/api/projects/{id}/history` | 获取操作历史 |

### 5.2 WebSocket (实时通信)

- **端点**: `ws://host/ws/{project_id}`
- **协议**: JSON 消息双向通信

**客户端 -> 服务端消息类型**:

| 类型 | 说明 | Payload |
|------|------|---------|
| `chat_message` | 用户自然语言输入 | `{"text": "把左侧板加高10cm"}` |
| `request_sync` | 请求模型同步 | `{}` |
| `select_component` | 选中组件 | `{"component_id": "xxx"}` |

**服务端 -> 客户端消息类型**:

| 类型 | 说明 | Payload |
|------|------|---------|
| `agent_thinking` | Agent 思考过程 | `{"content": "..."}` |
| `agent_response` | Agent 最终回复 | `{"content": "已将左侧板加高10cm"}` |
| `cabinet_update` | 柜子模型更新 | `{"cabinet": {...}}` |
| `operation_result` | 操作结果 | `{"success": true, "message": "..."}` |
| `error` | 错误信息 | `{"code": "xxx", "message": "..."}` |
| `stream_end` | 流式响应结束 | `{}` |

---

## 6. Agent & Skills 设计

### 6.1 核心概念：Skills vs Tools

DeepAgents 中 **Skills** 和 **Tools** 是互补的两个层级：

| 概念 | 形式 | 作用 | 类比 |
|------|------|------|------|
| **Skills** | `SKILL.md` 文件 | 领域知识注入：告诉 Agent **如何做**、**规则是什么** | 操作手册 / SOP |
| **Tools** | Python 函数 | 执行能力：Agent 实际调用以完成操作 | 工具箱里的扳手 |

- **Skills** 在 Agent 启动时被发现（读取 `SKILL.md` 的 frontmatter 中的 name/description），当用户任务匹配 skill 描述时，Agent 自动读取完整 skill 内容作为上下文
- **Tools** 通过 `tools=` 参数注册，LLM 根据 function signature 自动决策调用哪个工具

### 6.2 DeepAgents 架构

```
用户输入 (自然语言): "把左边侧板加高10cm"
      │
      ▼
┌──────────────────────────────────────────────────────┐
│                  DeepAgents Agent                     │
│                                                       │
│  ┌───────────────────────────────────────────────┐   │
│  │  System Prompt (角色 + 基本规则)               │   │
│  └───────────────────────────────────────────────┘   │
│                                                       │
│  ┌───────────────────────────────────────────────┐   │
│  │  Skills (skills=["./skills/"])                 │   │
│  │  ┌─ cabinet_editing/SKILL.md  ────────────┐   │   │
│  │  │ 柜子编辑领域知识:                        │   │   │
│  │  │  - 板件命名规范 / 坐标系统说明           │   │   │
│  │  │  - 编辑操作流程 / 校验规则               │   │   │
│  │  │  - 最佳实践 / 常见场景处理               │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  │  ┌─ cabinet_design/SKILL.md  ─────────────┐   │   │
│  │  │ 柜子设计规范:                            │   │   │
│  │  │  - 标准尺寸范围 / 板材厚度规范           │   │   │
│  │  │  - 结构约束 / 五金件预留                 │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  └───────────────┬───────────────────────────────┘   │
│                  │ Agent 读取 skill 获取上下文        │
│                  │ 然后决定调用哪个 Tool               │
│  ┌───────────────▼───────────────────────────────┐   │
│  │  Tools (tools=[...])                           │   │
│  │  ├── query_cabinet()    查询柜子结构           │   │
│  │  ├── add_component()    添加板件/组件          │   │
│  │  ├── remove_component() 删除板件/组件          │   │
│  │  ├── modify_component() 修改板件属性           │   │
│  │  └── undo_redo()        撤销/重做              │   │
│  └───────────────┬───────────────────────────────┘   │
└──────────────────┼──────────────────────────────────┘
                   │
                   ▼
        CabinetManager 执行实际操作
                   │
                   ▼
      操作结果 + 更新后的 Cabinet Object JSON
```

### 6.3 Agent System Prompt

```
你是一个专业的柜子家具设计助手。你可以帮助用户通过自然语言来编辑柜子的3D模型。

## 你的能力
- 查看柜子当前的结构和属性
- 添加新的板件或组件（隔板、门板、抽屉等）
- 删除已有的板件或组件
- 修改板件的尺寸、位置、材料、颜色等属性
- 撤销和重做编辑操作

## 操作流程
- 编辑前，先调用 query_cabinet 了解当前柜子结构
- 编辑后，简要说明做了什么修改
- 如果用户的指令不明确，主动询问确认
- 对于无法执行的操作，说明原因
```

### 6.4 Skills - SKILL.md 文件（领域知识）

Skills 是 `SKILL.md` 文件，存放在 `backend/agent/skills/` 目录下。Agent 启动时自动发现，当用户任务匹配 skill 描述时自动加载。

#### 6.4.1 目录结构

```
backend/agent/skills/
├── cabinet_editing/
│   └── SKILL.md              # 柜子编辑操作指南
└── cabinet_design/
    └── SKILL.md              # 柜子设计规范与约束
```

#### 6.4.2 `cabinet_editing/SKILL.md` - 柜子编辑操作指南

```markdown
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
- Z 轴：柜子深度方向（前后）
- 板件位置 position 是相对柜体原点的坐标
- 柜体原点位于柜子左下前角

## 板件尺寸说明
- 侧板 (side_panel)：length=板厚, width=柜深, height=柜高
- 顶/底板 (top/bottom_panel)：length=柜长, width=柜深, height=板厚
- 背板 (back_panel)：length=柜长, width=板厚, height=柜高
- 隔板 (shelf)：length=柜内宽, width=柜深, height=板厚
- 门板 (door)：length=门宽, width=板厚, height=门高

## 编辑操作流程
1. 先调用 query_cabinet 查看当前柜子结构
2. 根据用户意图确定操作类型（添加/删除/修改）
3. 计算出正确的参数值（位置、尺寸等）
4. 调用对应工具执行操作
5. 操作完成后告知用户结果

## 校验规则
- 修改后的板件必须在柜体边界范围内
- 添加隔板时 Y 坐标应介于底板高度和顶板高度之间
- 删除侧板/顶板/底板等结构件时需提醒用户
- 板件之间不能重叠（位置冲突检查）

## 常见场景
- "加一块隔板" → 计算中间高度，添加 shelf 类型组件
- "把侧板加高" → 修改侧板的 height 属性
- "删除中间的隔板" → 先查询隔板列表，再删除指定隔板
- "换成橡木材料" → 修改 material 属性为 "oak"
```

#### 6.4.3 `cabinet_design/SKILL.md` - 柜子设计规范

```markdown
---
name: cabinet-design
description: >
  柜子家具设计规范与约束。当用户的设计需求涉及尺寸、材料、结构合理性时使用。
  包含标准尺寸范围、板材厚度、结构约束等设计知识。
---

# 柜子设计规范

## 标准尺寸范围
- 柜子总高：600mm ~ 2400mm
- 柜子总宽：300mm ~ 1200mm
- 柜子总深：300mm ~ 650mm
- 常见层板间距：300mm ~ 450mm

## 板材厚度规范
- 侧板/顶板/底板/隔板：18mm（标准）
- 背板：5mm 或 9mm
- 门板：18mm 或 20mm
- 抽屉面板：18mm

## 结构约束
- 侧板必须成对存在（左+右）
- 顶板和底板必须存在
- 隔板不能超过柜子内部宽度
- 门板铰链侧需预留安装间隙

## 材料类型
- plywood：多层板（默认）
- mdf：中密度纤维板
- particleboard：刨花板
- oak：橡木
- walnut：胡桃木

## 颜色预设
- 原木色：#D2B48C
- 白色：#FFFFFF
- 深胡桃：#5C3A21
- 浅橡木：#C4A882
- 灰色：#B0B0B0
```

### 6.5 Tools - Python 工具函数

Agent 通过 `tools=` 参数注册 Python 函数，LLM 根据函数签名和 docstring 自动决策调用。工具函数直接操作 Cabinet Object，无需通过 API。

```python
# backend/agent/tools.py

from engine.cabinet_manager import CabinetManager

def query_cabinet(project_id: str, detail_level: str = "summary", component_id: str = None) -> dict:
    """
    查询当前柜子的结构信息、板件列表、尺寸等属性。

    Args:
        project_id: 项目ID
        detail_level: 查询详细程度，summary=概览（仅名称和ID列表），full=完整信息（含尺寸位置）
        component_id: 指定查询的组件ID，不填则查询全部
    """
    manager = CabinetManager(project_id)
    manager.load()
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
) -> dict:
    """
    向柜子添加新的板件或组件（隔板、门板、抽屉等）。

    Args:
        project_id: 项目ID
        type: 组件类型 (side_panel/back_panel/top_panel/bottom_panel/shelf/door/drawer/divider/custom)
        name: 组件名称，如 "中层隔板"
        position: 组件位置 {"x": float, "y": float, "z": float}，相对柜体坐标
        dimensions: 组件尺寸 {"length": float, "width": float, "height": float}，单位 mm
        material: 材料类型，默认 "plywood"
        color: 颜色 hex 值，默认 "#D2B48C"
        thickness: 板厚 mm，默认 18
    """
    manager = CabinetManager(project_id)
    manager.load()
    return manager.add_component(
        type=type, name=name, position=position,
        dimensions=dimensions, material=material,
        color=color, thickness=thickness,
    )


def remove_component(project_id: str, component_id: str) -> dict:
    """
    从柜子中删除指定的板件或组件。

    Args:
        project_id: 项目ID
        component_id: 要删除的组件ID
    """
    manager = CabinetManager(project_id)
    manager.load()
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
    manager = CabinetManager(project_id)
    manager.load()
    return manager.modify(target_id=target_id, properties=properties)


def undo_redo(project_id: str, action: str) -> dict:
    """
    撤销或重做上一步编辑操作。

    Args:
        project_id: 项目ID
        action: "undo" 撤销 或 "redo" 重做
    """
    manager = CabinetManager(project_id)
    manager.load()
    if action == "undo":
        return manager.undo()
    elif action == "redo":
        return manager.redo()
```

### 6.6 Agent 创建代码示例

```python
# backend/agent/cabinet_agent.py

from deepagents import create_deep_agent
from agent.tools import query_cabinet, add_component, remove_component, modify_component, undo_redo

CABINET_SYSTEM_PROMPT = """
你是一个专业的柜子家具设计助手。你可以帮助用户通过自然语言来编辑柜子的3D模型。

## 你的能力
- 查看柜子当前的结构和属性
- 添加新的板件或组件（隔板、门板、抽屉等）
- 删除已有的板件或组件
- 修改板件的尺寸、位置、材料、颜色等属性
- 撤销和重做编辑操作

## 操作流程
- 编辑前，先调用 query_cabinet 了解当前柜子结构
- 编辑后，简要说明做了什么修改
- 如果用户的指令不明确，主动询问确认
- 对于无法执行的操作，说明原因
"""

def create_cabinet_agent(project_id: str):
    """为指定项目创建柜子编辑 Agent"""

    # 将 project_id 绑定到工具函数（通过闭包）
    tools = [
        lambda **kwargs: query_cabinet(project_id=project_id, **kwargs),
        lambda **kwargs: add_component(project_id=project_id, **kwargs),
        lambda **kwargs: remove_component(project_id=project_id, **kwargs),
        lambda **kwargs: modify_component(project_id=project_id, **kwargs),
        lambda **kwargs: undo_redo(project_id=project_id, **kwargs),
    ]

    agent = create_deep_agent(
        model="deepseek:deepseek-chat",
        tools=tools,
        skills=["./skills/"],          # ← 加载 SKILL.md 领域知识
        system_prompt=CABINET_SYSTEM_PROMPT,
    )

    return agent
```

---

## 7. 前端设计

### 7.1 页面布局

```
┌─────────────────────────────────────────────────────────────┐
│  Header: Logo | 项目名称 | 保存 | 导出 | 撤销/重做            │
├──────────────────────────────────────┬──────────────────────┤
│                                      │                      │
│                                      │    Chat Panel        │
│       3D Viewport                    │   ┌──────────────┐   │
│      (Three.js Canvas)              │   │ AI: 你好...   │   │
│                                      │   │              │   │
│                                      │   │ User: 把左边  │   │
│                                      │   │ 侧板加高10cm  │   │
│                                      │   │              │   │
│                                      │   │ AI: 好的...   │   │
│                                      │   │              │   │
│                                      │   └──────────────┘   │
│                                      │   ┌──────────────┐   │
│                                      │   │ 输入框  [发送] │   │
│                                      │   └──────────────┘   │
├──────────────────────────────────────┴──────────────────────┤
│  Footer: 组件列表 | 属性面板 | 状态栏                         │
└─────────────────────────────────────────────────────────────┘
```

### 7.2 前端组件树

```
App.vue
├── HeaderBar.vue                  # 顶部工具栏
│   ├── ProjectName.vue
│   ├── SaveButton.vue
│   ├── ExportButton.vue
│   └── UndoRedoButtons.vue
├── MainLayout.vue
│   ├── Viewport3D.vue             # 3D 渲染区域
│   │   └── CabinetRenderer.ts     # Three.js 柜子渲染
│   └── ChatPanel.vue              # AI 对话面板
│       ├── MessageList.vue        # 消息列表
│       ├── MessageBubble.vue      # 单条消息
│       └── ChatInput.vue          # 输入框
├── FooterBar.vue                  # 底部面板
│   ├── ComponentList.vue          # 组件列表
│   ├── PropertyPanel.vue          # 属性面板（选中组件时）
│   └── StatusBar.vue              # 连接状态
└── stores/
    ├── cabinetStore.ts            # Pinia - 柜子模型状态
    ├── chatStore.ts               # Pinia - 对话状态
    └── websocketStore.ts          # Pinia - WebSocket 连接
```

### 7.3 Three.js 渲染流程

```
1. 初始化场景 (Scene, Camera, Renderer, Lights)
2. 接收 Cabinet Object JSON (从后端 WebSocket/REST)
3. 遍历 Cabinet.components 创建 Three.js Mesh
   - 每个组件: BoxGeometry(长, 高, 宽) -> Mesh(geometry, material)
   - 应用位置(position)、旋转(rotation)
   - 应用颜色/材质 (MeshStandardMaterial)
4. 渲染循环 (requestAnimationFrame)
5. 交互控制 (OrbitControls: 旋转/缩放/平移)
6. 监听 cabinetStore 变化 -> 增量更新场景
```

### 7.4 状态管理 (Pinia Store)

```typescript
// cabinetStore.ts
interface CabinetState {
  cabinet: Cabinet | null
  selectedComponentId: string | null
  isLoading: boolean
}

// chatStore.ts  
interface ChatState {
  messages: ChatMessage[]
  isStreaming: boolean
  currentStreamContent: string
}

// websocketStore.ts
interface WebSocketState {
  isConnected: boolean
  reconnectAttempts: number
}
```

---

## 8. 后端详细设计

### 8.1 项目结构

```
backend/
├── main.py                    # FastAPI 应用入口
├── config.py                  # 配置管理
├── models/
│   ├── __init__.py
│   ├── cabinet.py             # Cabinet Object 数据类
│   └── database.py            # SQLAlchemy ORM 模型
├── api/
│   ├── __init__.py
│   ├── projects.py            # 项目 CRUD API
│   └── websocket.py           # WebSocket 处理
├── engine/
│   ├── __init__.py
│   ├── cabinet_manager.py     # 柜子编辑引擎（核心）
│   └── history.py             # Undo/Redo 管理
├── agent/
│   ├── __init__.py
│   ├── cabinet_agent.py       # DeepAgents 创建与配置
│   ├── tools.py               # Agent 工具函数
│   └── skills/                # SKILL.md 领域知识目录
│       ├── cabinet_editing/
│       │   └── SKILL.md       # 柜子编辑操作指南
│       └── cabinet_design/
│           └── SKILL.md       # 柜子设计规范与约束
├── database/
│   ├── __init__.py
│   ├── connection.py          # 数据库连接管理
│   └── migrations/            # 数据库迁移
└── utils/
    ├── __init__.py
    └── serialization.py       # Cabinet Object <-> JSON 序列化
```

### 8.2 Cabinet 编辑引擎核心逻辑

```python
class CabinetManager:
    """柜子编辑引擎 - 维护 Cabinet Object 并提供操作方法"""
    
    def __init__(self, project_id: str):
        self.project_id = project_id
        self.cabinet: Cabinet = None
        self.history: OperationHistory = None
    
    def load(self) -> Cabinet:
        """从数据库加载柜子模型"""
        pass
    
    def save(self):
        """保存当前状态到数据库"""
        pass
    
    def add_component(self, **kwargs) -> CabinetComponent:
        """添加组件，含合法性校验"""
        # 1. 校验尺寸（板件必须在柜体范围内）
        # 2. 校验位置（不能与已有板件重叠）
        # 3. 创建组件对象
        # 4. 添加到 cabinet.components
        # 5. 记录操作历史
        pass
    
    def remove_component(self, component_id: str):
        """删除组件"""
        pass
    
    def modify(self, target_id: str, properties: dict):
        """修改柜子或组件属性"""
        pass
    
    def undo(self):
        """撤销"""
        pass
    
    def redo(self):
        """重做"""
        pass
    
    def to_dict(self) -> dict:
        """序列化为字典（发送给前端）"""
        pass
```

---

## 9. 数据流

### 9.1 用户编辑操作完整流程

```
用户输入: "把左边侧板加高10cm"
         │
         ▼
┌─ ChatPanel ─────────────────────────────────────────────┐
│  发送 WebSocket: {type: "chat_message", text: "..."}    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─ FastAPI WebSocket Handler ────────────────────────────┐
│  1. 接收消息                                             │
│  2. 获取/创建 Agent 实例                                  │
│  3. 调用 agent.ainvoke(messages=[...])                   │
│  4. 流式返回 Agent 响应                                   │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─ DeepAgents Agent ─────────────────────────────────────┐
│  1. LLM 理解意图: "修改左侧板，height + 100"              │
│  2. LLM 决定调用: cabinet_modify                         │
│  3. 参数: {target_id: "left_panel", properties:         │
│            {height: current_height + 100}}              │
│  4. 执行 modify_cabinet() 工具函数                       │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─ CabinetManager ───────────────────────────────────────┐
│  1. 查找组件 left_panel                                  │
│  2. 保存快照到 history                                   │
│  3. 更新 height 属性                                     │
│  4. 校验合法性                                           │
│  5. 保存到数据库                                         │
│  6. 返回更新后的 Cabinet Object                          │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─ WebSocket 推送 ───────────────────────────────────────┐
│  1. 发送 agent_response: "已将左侧板加高10cm"             │
│  2. 发送 cabinet_update: {cabinet: {...}}               │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─ 前端接收 & 更新 ───────────────────────────────────────┐
│  1. cabinetStore 更新 Cabinet Object                    │
│  2. Three.js 重新渲染左侧板                              │
│  3. ChatPanel 显示 AI 回复                               │
└────────────────────────────────────────────────────────┘
```

---

## 10. 默认柜子模板

系统初始化时创建一个默认柜子模板，作为用户编辑的起点：

```json
{
  "id": "default_cabinet",
  "name": "标准橱柜",
  "length": 800,
  "width": 600,
  "height": 2000,
  "position": {"x": 0, "y": 0, "z": 0},
  "rotation": {"x": 0, "y": 0, "z": 0},
  "material": "plywood",
  "components": [
    {
      "id": "left_panel",
      "name": "左侧板",
      "type": "side_panel",
      "length": 18, "width": 600, "height": 2000,
      "position": {"x": 0, "y": 0, "z": 300},
      "rotation": {"x": 0, "y": 0, "z": 0},
      "material": "plywood", "color": "#D2B48C", "thickness": 18
    },
    {
      "id": "right_panel",
      "name": "右侧板",
      "type": "side_panel",
      "length": 18, "width": 600, "height": 2000,
      "position": {"x": 782, "y": 0, "z": 300},
      "rotation": {"x": 0, "y": 0, "z": 0},
      "material": "plywood", "color": "#D2B48C", "thickness": 18
    },
    {
      "id": "top_panel",
      "name": "顶板",
      "type": "top_panel",
      "length": 800, "width": 600, "height": 18,
      "position": {"x": 0, "y": 1982, "z": 300},
      "rotation": {"x": 0, "y": 0, "z": 0},
      "material": "plywood", "color": "#D2B48C", "thickness": 18
    },
    {
      "id": "bottom_panel",
      "name": "底板",
      "type": "bottom_panel",
      "length": 800, "width": 600, "height": 18,
      "position": {"x": 0, "y": 0, "z": 300},
      "rotation": {"x": 0, "y": 0, "z": 0},
      "material": "plywood", "color": "#D2B48C", "thickness": 18
    },
    {
      "id": "back_panel",
      "name": "背板",
      "type": "back_panel",
      "length": 800, "width": 5, "height": 2000,
      "position": {"x": 0, "y": 0, "z": 0},
      "rotation": {"x": 0, "y": 0, "z": 0},
      "material": "plywood", "color": "#C4A882", "thickness": 5
    }
  ]
}
```

---

## 11. 开发阶段规划

### Phase 1: 基础框架搭建 (MVP)
- [ ] 前端项目初始化 (Vue3 + Vite + Three.js)
- [ ] 后端项目初始化 (FastAPI + SQLite)
- [ ] 基础 3D 渲染（加载默认柜子模板并显示）
- [ ] 3D 视角控制（旋转、缩放、平移）
- [ ] REST API 项目 CRUD
- [ ] Cabinet Object 数据模型实现

### Phase 2: Agent 集成
- [ ] DeepAgents 集成
- [ ] 5 个 Skill 工具函数实现
- [ ] CabinetManager 编辑引擎实现
- [ ] WebSocket 通信建立
- [ ] AI 对话面板前端

### Phase 3: 核心编辑功能
- [ ] 自然语言添加/删除板件
- [ ] 自然语言修改板件属性
- [ ] Undo/Redo 功能
- [ ] 编辑结果实时渲染反馈
- [ ] Agent 流式响应展示

### Phase 4: 增强与优化
- [ ] 板件选中高亮
- [ ] 属性面板（点击查看/手动编辑）
- [ ] 项目保存/加载
- [ ] 材质/颜色可视化选择
- [ ] 模型导出功能
- [ ] 错误处理与用户提示优化

---

## 12. 非功能性需求

| 类别 | 要求 |
|------|------|
| 性能 | 3D 渲染帧率 >= 30fps，Agent 响应时间 < 10s（含 LLM 调用） |
| 可用性 | WebSocket 断线自动重连，编辑操作异常时自动回滚 |
| 兼容性 | 支持 Chrome/Firefox/Edge 最新两个大版本 |
| 安全性 | 用户输入过滤，API 输入校验，无代码注入风险 |
| 可扩展性 | Skill 机制支持热注册新技能，组件类型支持扩展 |

---

## 13. 关键依赖版本

```
# Python
python >= 3.11
fastapi == 0.115.*
uvicorn[standard] == 0.34.*
sqlalchemy[asyncio] == 2.0.*
deepagents >= 0.1.0
pydantic == 2.*

# Node.js
node >= 18
vue == 3.5.*
vite == 6.*
three == 0.175.*
pinia == 2.*
```

---

## 附录 A: 术语表

| 术语 | 说明 |
|------|------|
| Cabinet Object | 柜子数据模型，包含整体属性和组件列表 |
| 板件 (Panel) | 柜子的基本构成单元，如侧板、隔板、门板 |
| 组件 (Component) | 板件的统称，包括抽屉等复杂子结构 |
| Skill | DeepAgents 中注册的可调用能力单元 |
| Tool | Agent 可调用的 Python 函数 |
| 3D Viewport | 浏览器中 Three.js 渲染的 3D 视图区域 |

## 附录 B: 参考资料

- DeepAgents 文档: https://docs.langchain.com/oss/python/deepagents/overview
- FastAPI 文档: https://fastapi.tiangolo.com/
- Three.js 文档: https://threejs.org/docs/
- Vue 3 文档: https://cn.vuejs.org/