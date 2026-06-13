// Cabinet 数据模型类型定义

export interface Vector3 {
  x: number
  y: number
  z: number
}

export type ComponentType =
  | 'side_panel'
  | 'back_panel'
  | 'top_panel'
  | 'bottom_panel'
  | 'shelf'
  | 'door'
  | 'drawer'
  | 'divider'
  | 'custom'

export interface CabinetComponent {
  id: string
  name: string
  type: ComponentType
  length: number
  width: number
  height: number
  position: Vector3
  rotation: Vector3
  material: string
  color: string
  thickness: number
  is_visible: boolean
  children: CabinetComponent[]
  metadata: Record<string, any>
}

export interface Cabinet {
  id: string
  name: string
  length: number
  width: number
  height: number
  position: Vector3
  rotation: Vector3
  material: string
  components: CabinetComponent[]
  metadata: Record<string, any>
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: number
}

export interface WsMessage {
  type: 'agent_thinking' | 'agent_response' | 'cabinet_update' | 'operation_result' | 'error' | 'stream_end'
  content?: string
  cabinet?: Cabinet
  success?: boolean
  message?: string
  code?: string
}