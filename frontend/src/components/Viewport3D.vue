<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { useCabinetStore } from '../stores/cabinetStore'
import { useViewportStore } from '../stores/viewportStore'
import { useThemeStore } from '../stores/theme'
import type { Cabinet, CabinetComponent } from '../utils/types'

const cabinetStore = useCabinetStore()
const viewportStore = useViewportStore()
const themeStore = useThemeStore()
const canvasRef = ref<HTMLCanvasElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let animationId: number
let meshes: Map<string, THREE.Mesh> = new Map()

// 原始位置/材质备份
let originalPositions: Map<string, THREE.Vector3> = new Map()
let originalMaterials: Map<string, THREE.Material> = new Map()
let originalRotations: Map<string, THREE.Euler> = new Map()

// 动画状态
let activeTweens: Array<{ update: (dt: number) => boolean }> = []
let lastTime = 0

// 功能状态（从 viewportStore 统一管理）
let gridHelper: THREE.GridHelper | null = null
let groundMesh: THREE.Mesh | null = null
let axesHelper: THREE.Group | null = null
let dirLight: THREE.DirectionalLight | null = null
let ambientLightRef: THREE.AmbientLight | null = null

// 选中高亮相关
let raycaster: THREE.Raycaster
let mouse: THREE.Vector2
let selectedMesh: THREE.Mesh | null = null
let highlightMaterial: LineMaterial | null = null

function hexToNumber(hex: string): number {
  const cleaned = hex.replace('#', '')
  const parsed = parseInt(cleaned, 16)
  return isNaN(parsed) ? 0xD2B48C : parsed
}

function createAxisLabel(text: string, color: string): THREE.Sprite {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')!

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = 'bold 72px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.lineWidth = 8
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.9)'
  ctx.strokeText(text, 64, 64)
  ctx.fillStyle = color
  ctx.fillText(text, 64, 64)

  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false })
  const sprite = new THREE.Sprite(material)
  sprite.scale.set(120, 120, 1)
  sprite.renderOrder = 1000
  return sprite
}

function createAxesHelper(length: number): THREE.Group {
  const group = new THREE.Group()
  const headLength = length * 0.08
  const headWidth = length * 0.04

  const makeArrow = (dir: THREE.Vector3, color: number) => {
    const arrow = new THREE.ArrowHelper(
      dir,
      new THREE.Vector3(0, 0, 0),
      length,
      color,
      headLength,
      headWidth,
    )
    // 设置箭头不被遮挡
    arrow.traverse(child => {
      const mesh = child as THREE.Mesh
      if (mesh.material) {
        const mat = mesh.material as THREE.LineBasicMaterial | THREE.MeshBasicMaterial
        mat.depthTest = false
        mat.depthWrite = false
        mat.transparent = true
      }
    })
    arrow.renderOrder = 999
    return arrow
  }

  const xArrow = makeArrow(new THREE.Vector3(1, 0, 0), 0xff3333)
  const yArrow = makeArrow(new THREE.Vector3(0, 1, 0), 0x33cc66)
  const zArrow = makeArrow(new THREE.Vector3(0, 0, 1), 0x3388ff)

  const xLabel = createAxisLabel('x', '#ff3333')
  xLabel.position.set(length + 100, 0, 0)
  const yLabel = createAxisLabel('y', '#33cc66')
  yLabel.position.set(0, length + 100, 0)
  const zLabel = createAxisLabel('z', '#3388ff')
  zLabel.position.set(0, 0, length + 100)

  group.add(xArrow, yArrow, zArrow, xLabel, yLabel, zLabel)
  return group
}

// 根据当前主题更新3D场景背景和环境光
function updateSceneBackground() {
  if (!scene) return
  scene.background = new THREE.Color(themeStore.isDark ? 0x0f172a : 0xeef2f8)
}

function updateSceneTheme() {
  if (!scene) return
  updateSceneBackground()
  // 浅色模式提高环境光强度，让板件更明亮
  if (ambientLightRef) {
    ambientLightRef.intensity = themeStore.isDark ? 0.5 : 0.8
  }
}

function initScene() {
  if (!canvasRef.value) return

  scene = new THREE.Scene()
  updateSceneBackground()

  const aspect = canvasRef.value.clientWidth / canvasRef.value.clientHeight
  camera = new THREE.PerspectiveCamera(50, aspect, 1, 10000)
  camera.position.set(2500, 2500, 2500)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    preserveDrawingBuffer: true,
  })
  renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true

  // 光照 - 侧上方光源设置以显示板件轮廓
  // 环境光 - 提供基础照明
  ambientLightRef = new THREE.AmbientLight(0xffffff, themeStore.isDark ? 0.5 : 0.8)
  scene.add(ambientLightRef)

  // 主光源 - 对角线方向照射，阴影均匀
  dirLight = new THREE.DirectionalLight(0xffffff, 0.9)
  dirLight.position.set(2500, 4000, 2500)
  dirLight.target.position.set(0, 0, 0)
  scene.add(dirLight.target)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.width = 2048
  dirLight.shadow.mapSize.height = 2048
  dirLight.shadow.camera.near = 100
  dirLight.shadow.camera.far = 8000
  dirLight.shadow.camera.left = -1500
  dirLight.shadow.camera.right = 1500
  dirLight.shadow.camera.top = 1500
  dirLight.shadow.camera.bottom = -1500
  dirLight.shadow.bias = -0.001
  dirLight.shadow.normalBias = 0.02
  scene.add(dirLight)

  // 补光1 - 对角线另一侧
  const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.4)
  dirLight2.position.set(-2500, 2500, -2500)
  scene.add(dirLight2)

  // 补光2 - 另一对角线
  const dirLight3 = new THREE.DirectionalLight(0xffffff, 0.3)
  dirLight3.position.set(-2000, 2000, 2000)
  scene.add(dirLight3)

  // 地面 - 接收阴影
  const groundGeometry = new THREE.PlaneGeometry(4000, 4000)
  const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.3 })
  groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
  groundMesh.rotation.x = -Math.PI / 2
  groundMesh.position.y = -1
  groundMesh.receiveShadow = true
  scene.add(groundMesh)

  // 地面网格
  gridHelper = new THREE.GridHelper(2000, 20, 0x444466, 0x333355)
  gridHelper.position.y = 0
  scene.add(gridHelper)

  axesHelper = createAxesHelper(1000)
  axesHelper.visible = false
  scene.add(axesHelper)

  // 轨道控制器
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  controls.target.set(0, 1000, 0)
  controls.update()

  // 初始化 Raycaster 用于点击检测
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // 蓝色描边材质 - 使用 LineMaterial 支持真正的线宽
  highlightMaterial = new LineMaterial({
    color: 0x4a90d9,
    linewidth: 2,
    depthTest: false,
    depthWrite: false,
    resolution: new THREE.Vector2(canvasRef.value.clientWidth, canvasRef.value.clientHeight),
  })

  // 添加鼠标点击事件
  canvasRef.value.addEventListener('click', onMouseClick)

  window.addEventListener('resize', onResize)
}

function onMouseClick(event: MouseEvent) {
  if (!canvasRef.value) return

  // 计算鼠标在归一化设备坐标中的位置
  const rect = canvasRef.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  // 更新射线
  raycaster.setFromCamera(mouse, camera)

  // 计算与所有网格的交点（过滤不可见的 mesh，如双开门占位符）
  const meshArray = Array.from(meshes.values()).filter(m => m.visible)
  const intersects = raycaster.intersectObjects(meshArray)

  if (intersects.length > 0) {
    const clickedMesh = intersects[0].object as THREE.Mesh
    const componentId = clickedMesh.userData.componentId as string

    if (componentId) {
      // 选中组件
      selectMesh(clickedMesh)
      cabinetStore.selectComponent(componentId)
    }
  } else {
    // 点击空白处取消选中
    deselectMesh()
    cabinetStore.selectComponent(null)
  }
}

function selectMesh(mesh: THREE.Mesh) {
  // 取消之前选中的网格
  deselectMesh()

  // 使用 Line2 创建更粗的描边
  const edges = new THREE.EdgesGeometry(mesh.geometry)
  const positions: number[] = []
  const posAttr = edges.attributes.position

  // 将边几何体的顶点转换为 LineGeometry 需要的格式
  for (let i = 0; i < posAttr.count; i++) {
    positions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i))
  }

  const lineGeometry = new LineGeometry()
  lineGeometry.setPositions(positions)

  const outline = new Line2(lineGeometry, highlightMaterial!)
  outline.name = 'selectionOutline'
  outline.computeLineDistances()
  outline.renderOrder = 999 // 确保描边最后渲染，不被遮挡
  mesh.add(outline)

  selectedMesh = mesh
}

function deselectMesh() {
  if (selectedMesh) {
    // 移除描边边框
    const outline = selectedMesh.getObjectByName('selectionOutline') as THREE.LineSegments | undefined
    if (outline) {
      selectedMesh.remove(outline)
      outline.geometry.dispose()
    }
    selectedMesh = null
  }
}

function onResize() {
  if (!canvasRef.value) return
  const width = canvasRef.value.clientWidth
  const height = canvasRef.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function renderCabinet(cabinet: Cabinet) {
  // 清除门板动画的 pivotGroup（开门状态下 mesh 在 pivotGroup 中，不在 scene 直接子节点）
  doorOriginals.forEach(orig => {
    if (orig.pivotGroup) {
      scene.remove(orig.pivotGroup)
    }
  })
  doorOriginals.clear()
  tweens = []

  // 清除旧模型
  meshes.forEach(mesh => scene.remove(mesh))
  meshes.clear()
  originalPositions.clear()
  originalMaterials.clear()
  originalRotations.clear()
  selectedMesh = null

  // 将柜体中心平移到世界坐标原点
  const ox = cabinet.position.x - cabinet.length / 2
  const oy = cabinet.position.y
  const oz = cabinet.position.z - cabinet.width / 2

  for (const comp of cabinet.components) {
    renderComponent(comp, ox, oy, oz)
  }

  // 重置功能状态
  viewportStore.isExploded = false
  viewportStore.isTransparent = false
  viewportStore.doorsOpen = false

  // 根据柜子尺寸调整相机位置和目标点
  const centerX = 0
  const centerY = cabinet.height / 2
  const centerZ = 0
  
  // 相机位置：1.5 倍柜子尺寸的偏移
  const cameraX = cabinet.length * 1
  const cameraY = cabinet.height * 1.2
  const cameraZ = cabinet.width * 5
  
  camera.position.set(cameraX, cameraY, cameraZ)
  controls.target.set(centerX, centerY, centerZ)
  controls.update()
}

// 创建木纹法线贴图
function createWoodNormalMap(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!

  // 填充基础色
  ctx.fillStyle = '#8080ff'
  ctx.fillRect(0, 0, 256, 256)

  // 绘制木纹线条
  for (let i = 0; i < 60; i++) {
    const y = Math.random() * 256
    const width = 1 + Math.random() * 3
    const offset = (Math.random() - 0.5) * 20

    ctx.strokeStyle = `rgba(${128 + offset}, ${128 + offset}, 255, 0.3)`
    ctx.lineWidth = width
    ctx.beginPath()
    ctx.moveTo(0, y)

    for (let x = 0; x < 256; x += 10) {
      ctx.lineTo(x, y + Math.sin(x * 0.05) * 5 + Math.random() * 2)
    }
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(2, 2)
  return texture
}

const woodNormalMap = createWoodNormalMap()

function renderComponent(
  comp: CabinetComponent,
  ox: number,
  oy: number,
  oz: number,
  parentX: number = 0,
  parentY: number = 0,
  parentZ: number = 0,
  doorSide?: 'left' | 'right'
) {
  // double_door 是容器类型，只渲染子组件，不渲染自身实体
  if (comp.type === 'double_door') {
    const absX = parentX + comp.position.x
    const absY = parentY + comp.position.y
    const absZ = parentZ + comp.position.z
    
    // 创建不可见的占位符用于点击选择
    const placeholderGeom = new THREE.BoxGeometry(comp.length, comp.height, comp.width || 1)
    const placeholderMat = new THREE.MeshBasicMaterial({ visible: false })
    const placeholder = new THREE.Mesh(placeholderGeom, placeholderMat)
    placeholder.visible = false // 设置 mesh 不可见，防止 raycaster 检测
    placeholder.position.set(
      ox + absX + comp.length / 2,
      oy + absY + comp.height / 2,
      oz + absZ + (comp.width || 1) / 2
    )
    placeholder.userData = {
      componentId: comp.id,
      componentName: comp.name,
      componentType: comp.type,
    }
    scene.add(placeholder)
    meshes.set(comp.id, placeholder)
    
    // 递归渲染子组件，为双开门的子门添加标记
    comp.children.forEach((child, index) => {
      renderComponent(child, ox, oy, oz, absX, absY, absZ, index === 0 ? 'left' : 'right')
    })
    return
  }

  const geometry = new THREE.BoxGeometry(comp.length, comp.height, comp.width)

  const color = hexToNumber(comp.color)
  const material = new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.6,
    metalness: 0.02,
    clearcoat: 0.1,
    clearcoatRoughness: 0.4,
    normalMap: woodNormalMap,
    normalScale: new THREE.Vector2(0.3, 0.3),
    transparent: false,
    opacity: 1.0,
    side: THREE.DoubleSide,
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = viewportStore.isShadowVisible
  mesh.receiveShadow = viewportStore.isShadowVisible

  // 添加边缘线以显示轮廓
  const edges = new THREE.EdgesGeometry(geometry)
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.12, transparent: true })
  const wireframe = new THREE.LineSegments(edges, lineMaterial)
  mesh.add(wireframe)

  // 子组件的 position 是相对于父组件的，需要加上父组件位置
  const absX = parentX + comp.position.x
  const absY = parentY + comp.position.y
  const absZ = parentZ + comp.position.z

  mesh.position.set(
    ox + absX + comp.length / 2,
    oy + absY + comp.height / 2,
    oz + absZ + comp.width / 2
  )

  mesh.rotation.set(
    THREE.MathUtils.degToRad(comp.rotation.x),
    THREE.MathUtils.degToRad(comp.rotation.y),
    THREE.MathUtils.degToRad(comp.rotation.z),
  )

  mesh.userData = {
    componentId: comp.id,
    componentName: comp.name,
    componentType: comp.type,
    doorSide: doorSide, // 'left' 或 'right'，用于双开门子门
  }
  mesh.visible = comp.is_visible

  scene.add(mesh)
  meshes.set(comp.id, mesh)

  // 备份原始状态
  originalPositions.set(comp.id, mesh.position.clone())
  originalMaterials.set(comp.id, material.clone())
  originalRotations.set(comp.id, mesh.rotation.clone())

  // 递归渲染子组件，传入当前组件的绝对位置作为父位置
  for (const child of comp.children) {
    renderComponent(child, ox, oy, oz, absX, absY, absZ)
  }
}

// ==================== 补间动画 ====================

interface Tween {
  target: THREE.Object3D
  prop: 'position' | 'rotation'
  axis: 'x' | 'y' | 'z'
  from: number
  to: number
  progress: number
  duration: number
}

let tweens: Tween[] = []

function addTween(target: THREE.Object3D, prop: 'position' | 'rotation', axis: 'x' | 'y' | 'z', to: number, duration = 0.6) {
  const from = prop === 'position' ? target.position[axis] : target.rotation[axis]
  tweens.push({ target, prop, axis, from, to, progress: 0, duration })
}

function updateTweens(dt: number) {
  tweens = tweens.filter(t => {
    t.progress = Math.min(t.progress + dt / t.duration, 1)
    // easeInOutCubic
    const eased = t.progress < 0.5
      ? 4 * t.progress * t.progress * t.progress
      : 1 - Math.pow(-2 * t.progress + 2, 3) / 2
    const value = t.from + (t.to - t.from) * eased
    if (t.prop === 'position') {
      t.target.position[t.axis] = value
    } else {
      t.target.rotation[t.axis] = value
    }
    return t.progress < 1
  })
}

// ==================== 爆炸图 ====================

function toggleExplode() {
  if (viewportStore.isExploded) {
    // 还原
    meshes.forEach((mesh, id) => {
      const orig = originalPositions.get(id)
      if (orig) {
        addTween(mesh, 'position', 'x', orig.x)
        addTween(mesh, 'position', 'y', orig.y)
        addTween(mesh, 'position', 'z', orig.z)
      }
    })
    viewportStore.isExploded = false
  } else {
    // 爆炸：每个组件沿其相对于柜体中心的方向向外偏移
    const center = new THREE.Vector3(0, 1000, 0) // 柜体中心
    meshes.forEach((mesh) => {
      const dir = mesh.position.clone().sub(center).normalize()
      const offset = dir.multiplyScalar(300)
      addTween(mesh, 'position', 'x', mesh.position.x + offset.x)
      addTween(mesh, 'position', 'y', mesh.position.y + offset.y)
      addTween(mesh, 'position', 'z', mesh.position.z + offset.z)
    })
    viewportStore.isExploded = true
  }
}

// ==================== 透视图 ====================

function toggleTransparent() {
  if (viewportStore.isTransparent) {
    // 还原材质
    meshes.forEach((mesh, id) => {
      const orig = originalMaterials.get(id)
      if (orig) {
        mesh.material = orig.clone()
      }
    })
    viewportStore.isTransparent = false
  } else {
    // 半透明 + 线框
    meshes.forEach((mesh) => {
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.transparent = true
      mat.opacity = 0.3
      mat.needsUpdate = true
    })
    viewportStore.isTransparent = true
  }
}

function toggleAxes() {
  viewportStore.isAxesVisible = !viewportStore.isAxesVisible
  if (axesHelper) {
    axesHelper.visible = viewportStore.isAxesVisible
  }
}

function toggleGrid() {
  viewportStore.isGridVisible = !viewportStore.isGridVisible
  if (gridHelper) {
    gridHelper.visible = viewportStore.isGridVisible
  }
}

function toggleShadow() {
  viewportStore.isShadowVisible = !viewportStore.isShadowVisible
  const enabled = viewportStore.isShadowVisible
  // 关闭方向光投射阴影
  if (dirLight) {
    dirLight.castShadow = enabled
  }
  // 关闭地面接收阴影
  if (groundMesh) {
    groundMesh.visible = enabled
  }
  // 关闭所有 mesh 的投射和接收阴影
  meshes.forEach(mesh => {
    mesh.castShadow = enabled
    mesh.receiveShadow = enabled
  })
}

// ==================== 门板/抽屉打开动画 ====================

// 备份门板/抽屉的原始状态
let doorOriginals: Map<string, {
  parent: THREE.Object3D
  posX: number; posY: number; posZ: number
  rotY: number
  worldPosX?: number; worldPosY?: number; worldPosZ?: number
  pivotGroup?: THREE.Group
  childMeshIds?: string[]
}> = new Map()

// 判断是否是门板类型（double_door 是容器，其子组件 door 各自独立动画）
function isDoorType(type: string): boolean {
  return type === 'door'
}

// 递归查找组件
function findComponent(components: any[], id: string): any {
  for (const comp of components) {
    if (comp.id === id) return comp
    if (comp.children) {
      const found = findComponent(comp.children, id)
      if (found) return found
    }
  }
  return null
}

// 查找某个组件的所有子组件 mesh ID
function findChildMeshIds(parentId: string): string[] {
  const ids: string[] = []
  const cabinet = cabinetStore.cabinet
  if (!cabinet) return ids
  const parent = findComponent(cabinet.components, parentId)
  if (parent && parent.children) {
    for (const child of parent.children) {
      if (meshes.has(child.id)) ids.push(child.id)
    }
  }
  return ids
}

function toggleDoors() {
  if (viewportStore.doorsOpen) {
    // 关闭：动画还原
    meshes.forEach((mesh, id) => {
      const type = mesh.userData.componentType as string
      if (isDoorType(type) || type === 'drawer') {
        const orig = doorOriginals.get(id)
        if (!orig) return

        if (isDoorType(type) && orig.pivotGroup) {
          // 先动画关闭 pivot group 旋转
          addTween(orig.pivotGroup, 'rotation', 'y', 0, 0.6)
          // 动画完成后移除 group 并还原 mesh（延迟执行）
          setTimeout(() => {
            const group = orig.pivotGroup!
            
            // 先将子物体移回父组件并还原位置
            if (orig.childMeshIds) {
              for (const cid of orig.childMeshIds) {
                const childMesh = meshes.get(cid)
                const childOrig = doorOriginals.get(cid)
                if (childMesh && childOrig) {
                  // 移出 pivotGroup
                  group.remove(childMesh)
                  // 找到原始父组件并添加回去
                  const originalParent = childOrig.parent
                  originalParent.add(childMesh)
                  // 还原局部坐标
                  childMesh.position.set(childOrig.posX, childOrig.posY, childOrig.posZ)
                  childMesh.rotation.set(0, childOrig.rotY, 0)
                }
              }
            }
            
            // 将门板移回原始父组件
            group.remove(mesh)
            orig.parent.add(mesh)
            mesh.position.set(orig.posX, orig.posY, orig.posZ)
            mesh.rotation.y = orig.rotY
            
            // 移除 pivotGroup
            scene.remove(group)
          }, 650)
        } else if (type === 'drawer') {
          addTween(mesh, 'position', 'z', orig.posZ)
          // 子物体也还原
          if (orig.childMeshIds) {
            for (const cid of orig.childMeshIds) {
              const childMesh = meshes.get(cid)
              const childOrig = doorOriginals.get(cid)
              if (childMesh && childOrig) {
                addTween(childMesh, 'position', 'z', childOrig.posZ)
              }
            }
          }
        }
      }
    })
    viewportStore.doorsOpen = false
    // 延迟清理备份数据，等关闭动画完成
    setTimeout(() => doorOriginals.clear(), 700)
  } else {
    // 打开门板和抽屉
    meshes.forEach((mesh) => {
      const type = mesh.userData.componentType as string
      const id = mesh.userData.componentId as string

      if (isDoorType(type)) {
        const childIds = findChildMeshIds(id)
        const doorSide = mesh.userData.doorSide as string | undefined

        // 保存世界坐标用于还原
        const worldPos = new THREE.Vector3()
        mesh.getWorldPosition(worldPos)
        const worldRot = mesh.rotation.y

        // 备份
        doorOriginals.set(id, {
          parent: mesh.parent!,
          posX: mesh.position.x,
          posY: mesh.position.y,
          posZ: mesh.position.z,
          rotY: mesh.rotation.y,
          worldPosX: worldPos.x,
          worldPosY: worldPos.y,
          worldPosZ: worldPos.z,
          childMeshIds: childIds,
        })

        const geom = mesh.geometry as THREE.BoxGeometry
        geom.computeBoundingBox()
        const bbox = geom.boundingBox!
        const halfLength = (bbox.max.x - bbox.min.x) / 2
        
        // 根据是左门还是右门决定 pivot 位置和旋转方向
        let pivotX: number
        let rotateAngle: number
        
        if (doorSide === 'right') {
          // 右门：pivot 在右侧边，往外开（正角度）
          pivotX = mesh.position.x + halfLength
          rotateAngle = THREE.MathUtils.degToRad(120)
        } else {
          // 左门或普通单开门：pivot 在左侧边，往外开（负角度）
          pivotX = mesh.position.x - halfLength
          rotateAngle = -THREE.MathUtils.degToRad(120)
        }

        // 计算 pivot 的世界坐标
        const pivotWorldX = worldPos.x + (pivotX - mesh.position.x)
        
        // 创建 pivot group 放在世界坐标系
        const pivotGroup = new THREE.Group()
        pivotGroup.position.set(pivotWorldX, worldPos.y, worldPos.z)
        scene.add(pivotGroup)

        // 将门板移入 group（使用世界坐标）
        scene.remove(mesh)
        pivotGroup.add(mesh)
        // 门板相对于 pivot 的位置
        mesh.position.x = doorSide === 'right' ? -halfLength : halfLength
        mesh.position.y = 0
        mesh.position.z = 0
        mesh.rotation.y = 0

        // 将子物体（拉手等）也移入 group
        for (const cid of childIds) {
          const childMesh = meshes.get(cid)
          if (childMesh) {
            const childWorldPos = new THREE.Vector3()
            childMesh.getWorldPosition(childWorldPos)
            
            // 备份子物体原始位置
            doorOriginals.set(cid, {
              parent: childMesh.parent!,
              posX: childMesh.position.x,
              posY: childMesh.position.y,
              posZ: childMesh.position.z,
              rotY: childMesh.rotation.y,
              worldPosX: childWorldPos.x,
              worldPosY: childWorldPos.y,
              worldPosZ: childWorldPos.z,
            })
            scene.remove(childMesh)
            pivotGroup.add(childMesh)
            // 转换为相对于 pivot 的局部坐标
            childMesh.position.x = childWorldPos.x - pivotWorldX
            childMesh.position.y = 0
            childMesh.position.z = childWorldPos.z - worldPos.z
          }
        }

        doorOriginals.get(id)!.pivotGroup = pivotGroup

        // 旋转 pivot group
        addTween(pivotGroup, 'rotation', 'y', rotateAngle)
      } else if (type === 'drawer') {
        // 计算抽屉拉出距离 = 深度的 2/3
        const geom = mesh.geometry as THREE.BoxGeometry
        geom.computeBoundingBox()
        const bbox = geom.boundingBox!
        const depth = bbox.max.z - bbox.min.z
        const pullOut = depth * 2 / 3

        const childIds = findChildMeshIds(id)

        // 备份
        doorOriginals.set(id, {
          parent: mesh.parent!,
          posX: mesh.position.x,
          posY: mesh.position.y,
          posZ: mesh.position.z,
          rotY: mesh.rotation.y,
          childMeshIds: childIds,
        })

        // 抽屉向前拉出（+Z 为前方/开口方向）
        addTween(mesh, 'position', 'z', mesh.position.z + pullOut)

        // 子物体也跟随拉出
        for (const cid of childIds) {
          const childMesh = meshes.get(cid)
          if (childMesh) {
            doorOriginals.set(cid, {
              parent: childMesh.parent!,
              posX: childMesh.position.x,
              posY: childMesh.position.y,
              posZ: childMesh.position.z,
              rotY: childMesh.rotation.y,
            })
            addTween(childMesh, 'position', 'z', childMesh.position.z + pullOut)
          }
        }
      }
    })
    viewportStore.doorsOpen = true
  }
}

// ==================== 复原 ====================

function resetAll() {
  // 先关闭门板/抽屉（如果已打开）
  if (viewportStore.doorsOpen) {
    meshes.forEach((mesh, id) => {
      const type = mesh.userData.componentType as string
      if (isDoorType(type) || type === 'drawer') {
        const orig = doorOriginals.get(id)
        if (!orig) return

        if (isDoorType(type) && orig.pivotGroup) {
          const group = orig.pivotGroup
          // 将子物体移回父组件
          if (orig.childMeshIds) {
            for (const cid of orig.childMeshIds) {
              const childMesh = meshes.get(cid)
              const childOrig = doorOriginals.get(cid)
              if (childMesh && childOrig) {
                group.remove(childMesh)
                const originalParent = childOrig.parent
                originalParent.add(childMesh)
                childMesh.position.set(childOrig.posX, childOrig.posY, childOrig.posZ)
                childMesh.rotation.set(0, childOrig.rotY, 0)
              }
            }
          }
          // 将门板移回父组件
          group.remove(mesh)
          orig.parent.add(mesh)
          mesh.position.set(orig.posX, orig.posY, orig.posZ)
          mesh.rotation.y = orig.rotY
          // 移除 pivotGroup
          scene.remove(group)
        } else if (type === 'drawer') {
          mesh.position.z = orig.posZ
          // 子物体也还原
          if (orig.childMeshIds) {
            for (const cid of orig.childMeshIds) {
              const childMesh = meshes.get(cid)
              const childOrig = doorOriginals.get(cid)
              if (childMesh && childOrig) {
                childMesh.position.z = childOrig.posZ
              }
            }
          }
        }
      }
    })
    doorOriginals.clear()
  }

  // 还原位置
  meshes.forEach((mesh, id) => {
    const origPos = originalPositions.get(id)
    const origRot = originalRotations.get(id)
    if (origPos) {
      mesh.position.copy(origPos)
    }
    if (origRot) {
      mesh.rotation.copy(origRot)
    }
  })

  // 还原材质
  meshes.forEach((mesh, id) => {
    const orig = originalMaterials.get(id)
    if (orig) {
      mesh.material = orig.clone()
    }
  })

  // 取消选中
  deselectMesh()
  cabinetStore.selectComponent(null)

  viewportStore.isExploded = false
  viewportStore.isTransparent = false
  viewportStore.doorsOpen = false
}

// ==================== 动画循环 ====================

function animate(time: number = 0) {
  animationId = requestAnimationFrame(animate)
  const dt = lastTime ? (time - lastTime) / 1000 : 0
  lastTime = time
  updateTweens(dt)
  controls.update()
  renderer.render(scene, camera)
}

// 监听 cabinet 变化
watch(() => cabinetStore.cabinet, (newCabinet) => {
  if (newCabinet && scene) {
    renderCabinet(newCabinet)
  }
}, { deep: true })

// 监听选中组件变化（从 ComponentPanel 点击时同步到 3D 视图）
watch(() => cabinetStore.selectedComponentId, (newId) => {
  if (newId) {
    const mesh = meshes.get(newId)
    if (mesh && mesh !== selectedMesh) {
      selectMesh(mesh)
    }
  } else {
    deselectMesh()
  }
})

// 监听 HeaderBar 工具栏触发信号
watch(() => viewportStore.toggleSignal, (signal) => {
  if (!signal) return
  switch (signal.action) {
    case 'explode': toggleExplode(); break
    case 'transparent': toggleTransparent(); break
    case 'doors': toggleDoors(); break
    case 'axes': toggleAxes(); break
    case 'grid': toggleGrid(); break
    case 'shadow': toggleShadow(); break
    case 'resetAll': resetAll(); break
  }
})

// 主题切换时更新3D场景
watch(() => themeStore.isDark, () => {
  updateSceneTheme()
})

onMounted(() => {
  initScene()
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('enter-render-mode', onEnterRenderMode)
  window.removeEventListener('exit-render-mode', onExitRenderMode)
  canvasRef.value?.removeEventListener('click', onMouseClick)
  renderer?.dispose()
})

// ==================== 渲染截图模式 ====================

// 保存进入渲染模式前的视图状态
let savedRenderState: {
  background: THREE.Color | null
  isExploded: boolean
  isTransparent: boolean
  doorsOpen: boolean
  isAxesVisible: boolean
  isGridVisible: boolean
  isShadowVisible: boolean
  cameraPosition: THREE.Vector3
  cameraTarget: THREE.Vector3
} | null = null

// 进入渲染截图模式：关闭所有视觉干扰，背景改白
function enterRenderMode() {
  if (!camera || !controls) return

  // 保存当前状态
  savedRenderState = {
    background: scene.background instanceof THREE.Color ? scene.background.clone() : null,
    isExploded: viewportStore.isExploded,
    isTransparent: viewportStore.isTransparent,
    doorsOpen: viewportStore.doorsOpen,
    isAxesVisible: viewportStore.isAxesVisible,
    isGridVisible: viewportStore.isGridVisible,
    isShadowVisible: viewportStore.isShadowVisible,
    cameraPosition: camera.position.clone(),
    cameraTarget: controls.target.clone(),
  }

  // 关闭门板（立即，无动画）
  if (viewportStore.doorsOpen) {
    meshes.forEach((mesh, id) => {
      const type = mesh.userData.componentType as string
      const orig = doorOriginals.get(id)
      if (!orig) return

      if (isDoorType(type) && orig.pivotGroup) {
        const group = orig.pivotGroup
        // 将子物体移回父组件
        if (orig.childMeshIds) {
          for (const cid of orig.childMeshIds) {
            const childMesh = meshes.get(cid)
            const childOrig = doorOriginals.get(cid)
            if (childMesh && childOrig) {
              group.remove(childMesh)
              childOrig.parent.add(childMesh)
              childMesh.position.set(childOrig.posX, childOrig.posY, childOrig.posZ)
              childMesh.rotation.set(0, childOrig.rotY, 0)
            }
          }
        }
        group.remove(mesh)
        orig.parent.add(mesh)
        mesh.position.set(orig.posX, orig.posY, orig.posZ)
        mesh.rotation.y = orig.rotY
        scene.remove(group)
      } else if (type === 'drawer') {
        mesh.position.z = orig.posZ
        if (orig.childMeshIds) {
          for (const cid of orig.childMeshIds) {
            const childMesh = meshes.get(cid)
            const childOrig = doorOriginals.get(cid)
            if (childMesh && childOrig) childMesh.position.z = childOrig.posZ
          }
        }
      }
    })
    doorOriginals.clear()
    viewportStore.doorsOpen = false
  }

  // 关闭爆炸图、透视图（立即还原）
  if (viewportStore.isExploded || viewportStore.isTransparent) {
    meshes.forEach((mesh, id) => {
      const origPos = originalPositions.get(id)
      const origRot = originalRotations.get(id)
      const origMat = originalMaterials.get(id)
      if (origPos) mesh.position.copy(origPos)
      if (origRot) mesh.rotation.copy(origRot)
      if (origMat && viewportStore.isTransparent) mesh.material = origMat.clone()
    })
    viewportStore.isExploded = false
    viewportStore.isTransparent = false
  }

  // 关闭坐标系
  if (viewportStore.isAxesVisible && axesHelper) {
    axesHelper.visible = false
    viewportStore.isAxesVisible = false
  }

  // 关闭网格
  if (viewportStore.isGridVisible && gridHelper) {
    gridHelper.visible = false
    viewportStore.isGridVisible = false
  }

  // 关闭阴影
  if (viewportStore.isShadowVisible) {
    if (dirLight) dirLight.castShadow = false
    if (groundMesh) groundMesh.visible = false
    meshes.forEach(mesh => {
      mesh.castShadow = false
      mesh.receiveShadow = false
    })
    viewportStore.isShadowVisible = false
  }

  // 背景改白
  scene.background = new THREE.Color(0xffffff)
}

// 退出渲染模式：恢复之前的状态
function exitRenderMode() {
  if (!savedRenderState) return

  // 恢复背景
  scene.background = savedRenderState.background || new THREE.Color(themeStore.isDark ? 0x0f172a : 0xeef2f8)

  // 恢复阴影
  if (savedRenderState.isShadowVisible) {
    if (dirLight) dirLight.castShadow = true
    if (groundMesh) groundMesh.visible = true
    meshes.forEach(mesh => {
      mesh.castShadow = true
      mesh.receiveShadow = true
    })
    viewportStore.isShadowVisible = true
  }

  // 恢复网格
  if (savedRenderState.isGridVisible && gridHelper) {
    gridHelper.visible = true
    viewportStore.isGridVisible = true
  }

  // 恢复坐标系
  if (savedRenderState.isAxesVisible && axesHelper) {
    axesHelper.visible = true
    viewportStore.isAxesVisible = true
  }

  // 恢复透视图
  if (savedRenderState.isTransparent) {
    meshes.forEach(mesh => {
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.transparent = true
      mat.opacity = 0.3
      mat.needsUpdate = true
    })
    viewportStore.isTransparent = true
  }

  // 恢复爆炸图
  if (savedRenderState.isExploded) {
    const center = new THREE.Vector3(0, 1000, 0)
    meshes.forEach(mesh => {
      const dir = mesh.position.clone().sub(center).normalize()
      const offset = dir.multiplyScalar(300)
      mesh.position.add(offset)
    })
    viewportStore.isExploded = true
  }

  // 恢复门板
  if (savedRenderState.doorsOpen) {
    toggleDoors()
  }

  // 恢复相机
  camera.position.copy(savedRenderState.cameraPosition)
  controls.target.copy(savedRenderState.cameraTarget)
  controls.update()

  savedRenderState = null
}

// 设置相机角度（柜子居中，留白适中）
function setCameraAngle(angle: 'front' | 'top' | 'side_45') {
  if (!camera || !controls) return
  const cab = cabinetStore.cabinet
  // 柜子渲染原点偏移后，世界中心在 (0, height/2, 0)
  const centerX = 0
  const centerY = cab ? cab.height / 2 : 1000
  const centerZ = 0

  const W = cab ? cab.length : 800
  const H = cab ? cab.height : 2000
  const D = cab ? cab.width : 600
  const aspect = camera.aspect
  const fov = camera.fov * (Math.PI / 180)

  const halfFovV = fov / 2
  const halfFovH = Math.atan(Math.tan(halfFovV) * aspect)

  // 计算相机到柜子中心的距离
  // 相机在 center + dist * viewDir 处看向 center，需要所有8个角点在视锥内且留白5%
  // 关键：角点到相机的深度 = dist - dot(corner, viewDir)，而非 dist
  function calcDist(viewDirX: number, viewDirY: number, viewDirZ: number): number {
    // 归一化 viewDir
    const vLen = Math.sqrt(viewDirX * viewDirX + viewDirY * viewDirY + viewDirZ * viewDirZ)
    const vnx = viewDirX / vLen, vny = viewDirY / vLen, vnz = viewDirZ / vLen
    // 相机 right = cross(viewDir, worldUp)
    const rx = -vnz, ry = 0, rz = vnx
    const rLen = Math.sqrt(rx * rx + ry * ry + rz * rz)
    const rnx = rx / rLen, rny = ry / rLen, rnz = rz / rLen
    // 相机 up = cross(right, viewDir)
    const ux = rny * vnz - rnz * vny
    const uy = rnz * vnx - rnx * vnz
    const uz = rnx * vny - rny * vnx
    const uLen = Math.sqrt(ux * ux + uy * uy + uz * uz)
    const unw = ux / uLen, uny = uy / uLen, unz = uz / uLen

    // 柜子8个角点，相对于柜子中心 (0, centerY, 0)
    const hw = W / 2, hh = H / 2, hd = D / 2
    const corners = [
      [-hw, -hh, -hd], [hw, -hh, -hd], [-hw, hh, -hd], [hw, hh, -hd],
      [-hw, -hh, hd],  [hw, -hh, hd],  [-hw, hh, hd],  [hw, hh, hd],
    ]

    // 对每个角点：dist ≥ |projR|/(tan(halfFovH)*fitRatio) + dot(corner, viewDir)
    //          dist ≥ |projU|/(tan(halfFovV)*fitRatio) + dot(corner, viewDir)
    // 水平和垂直约束独立计算，取所有角点中最大值
    const fitRatio = 0.9
    const limitH = Math.tan(halfFovH) * fitRatio
    const limitV = Math.tan(halfFovV) * fitRatio
    let result = 0
    for (const [cx, cy, cz] of corners) {
      const dViewDir = cx * vnx + cy * vny + cz * vnz
      const projR = cx * rnx + cy * rny + cz * rnz
      const projU = cx * unw + cy * uny + cz * unz
      const distH = Math.abs(projR) / limitH + dViewDir
      const distV = Math.abs(projU) / limitV + dViewDir
      const dist = Math.max(distH, distV)
      if (dist > result) result = dist
    }
    return result
  }

  switch (angle) {
    case 'front': {
      // 从 +Z 看柜子开口，viewDir = (0, 0, -1)
      const dist = calcDist(0, 0, -1)
      camera.position.set(centerX, centerY, centerZ + dist)
      break
    }
    case 'top': {
      // 45°从 +Y +Z 方向看向柜子中心，顶板最高点在屏幕95%位置（上方留白5%）
      const topDist = calcDist(0, -1, -1)
      // calcDist 保证留白5%（限制方向在90%位置），需要缩放到顶板在95%位置
      const dist = topDist * 0.95 / 0.9
      const d = dist / Math.sqrt(2)
      camera.position.set(centerX, centerY + d, centerZ + d)
      break
    }
    case 'side_45': {
      // 从 +X +Y +Z 看柜子，viewDir = (-1, -1, -1)
      const dist = calcDist(-1, -1, -1)
      const d = dist / Math.sqrt(3)
      camera.position.set(centerX + d, centerY + d, centerZ + d)
      break
    }
  }
  controls.target.set(centerX, centerY, centerZ)
  camera.up.set(0, 1, 0)
  controls.update()
}

// 监听渲染截图的事件
let isInRenderMode = false

function onEnterRenderMode(e: Event) {
  const detail = (e as CustomEvent).detail
  const angle = detail?.angle || 'front'

  // 仅首次进入时保存状态并关闭视觉干扰
  if (!isInRenderMode) {
    enterRenderMode()
    isInRenderMode = true
  }

  // 每次都调整相机角度
  setCameraAngle(angle)
}

function onExitRenderMode() {
  if (isInRenderMode) {
    exitRenderMode()
    isInRenderMode = false
  }
}

window.addEventListener('enter-render-mode', onEnterRenderMode)
window.addEventListener('exit-render-mode', onExitRenderMode)

defineExpose({ toggleExplode, toggleTransparent, toggleDoors, toggleAxes, toggleGrid, toggleShadow, resetAll, setCameraAngle, enterRenderMode, exitRenderMode })
</script>

<template>
  <div class="viewport">
    <canvas ref="canvasRef" class="canvas"></canvas>
    <div v-if="!cabinetStore.cabinet" class="loading-overlay">
      <p>等待加载柜子模型...</p>
    </div>
  </div>
</template>

<style scoped>
.viewport {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.canvas {
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 46, 0.9);
  color: #888;
  font-size: 16px;
}

</style>
