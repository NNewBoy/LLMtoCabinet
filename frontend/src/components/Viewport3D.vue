<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { useCabinetStore } from '../stores/cabinetStore'
import type { Cabinet, CabinetComponent } from '../utils/types'

const cabinetStore = useCabinetStore()
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

// 功能状态
const isExploded = ref(false)
const isTransparent = ref(false)
const doorsOpen = ref(false)
const isAxesVisible = ref(false)
let axesHelper: THREE.Group | null = null

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

  const xArrow = new THREE.ArrowHelper(
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(0, 0, 0),
    length,
    0xff3333,
    headLength,
    headWidth,
  )
  const yArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 0),
    length,
    0x33cc66,
    headLength,
    headWidth,
  )
  const zArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, 0, 0),
    length,
    0x3388ff,
    headLength,
    headWidth,
  )

  const xLabel = createAxisLabel('x', '#ff3333')
  xLabel.position.set(length + 100, 0, 0)
  const yLabel = createAxisLabel('y', '#33cc66')
  yLabel.position.set(0, length + 100, 0)
  const zLabel = createAxisLabel('z', '#3388ff')
  zLabel.position.set(0, 0, length + 100)

  group.add(xArrow, yArrow, zArrow, xLabel, yLabel, zLabel)
  return group
}

function initScene() {
  if (!canvasRef.value) return

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0f172a)

  const aspect = canvasRef.value.clientWidth / canvasRef.value.clientHeight
  camera = new THREE.PerspectiveCamera(45, aspect, 1, 10000)
  camera.position.set(-1200, 2400, -2800)
  camera.lookAt(0, 1000, 0)

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
  })
  renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true

  // 光照 - 侧上方光源设置以显示板件轮廓
  // 环境光 - 提供基础照明
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  // 主光源 - 从侧上方照射，阴影投到侧后方（缩短阴影）
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.9)
  dirLight.position.set(-1500, 4000, -1500)
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

  // 补光1 - 从另一侧上方照射
  const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.4)
  dirLight2.position.set(-2000, 2500, -1000)
  scene.add(dirLight2)

  // 补光2 - 从正面侧上方照射
  const dirLight3 = new THREE.DirectionalLight(0xffffff, 0.3)
  dirLight3.position.set(0, 2000, -2500)
  scene.add(dirLight3)

  // 地面 - 接收阴影
  const groundGeometry = new THREE.PlaneGeometry(4000, 4000)
  const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.3 })
  const ground = new THREE.Mesh(groundGeometry, groundMaterial)
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -1
  ground.receiveShadow = true
  scene.add(ground)

  // 地面网格
  const gridHelper = new THREE.GridHelper(2000, 20, 0x444466, 0x333355)
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
  isExploded.value = false
  isTransparent.value = false
  doorsOpen.value = false
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
  mesh.castShadow = true
  mesh.receiveShadow = true

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
  if (isExploded.value) {
    // 还原
    meshes.forEach((mesh, id) => {
      const orig = originalPositions.get(id)
      if (orig) {
        addTween(mesh, 'position', 'x', orig.x)
        addTween(mesh, 'position', 'y', orig.y)
        addTween(mesh, 'position', 'z', orig.z)
      }
    })
    isExploded.value = false
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
    isExploded.value = true
  }
}

// ==================== 透视图 ====================

function toggleTransparent() {
  if (isTransparent.value) {
    // 还原材质
    meshes.forEach((mesh, id) => {
      const orig = originalMaterials.get(id)
      if (orig) {
        mesh.material = orig.clone()
      }
    })
    isTransparent.value = false
  } else {
    // 半透明 + 线框
    meshes.forEach((mesh) => {
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.transparent = true
      mat.opacity = 0.3
      mat.needsUpdate = true
    })
    isTransparent.value = true
  }
}

function toggleAxes() {
  isAxesVisible.value = !isAxesVisible.value
  if (axesHelper) {
    axesHelper.visible = isAxesVisible.value
  }
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

// 判断是否是门板类型（double_door 是容器，其子组件 single_door 各自独立动画）
function isDoorType(type: string): boolean {
  return type === 'single_door'
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
  if (doorsOpen.value) {
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
    doorsOpen.value = false
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
          // 右门：pivot 在右侧边，向右旋转（负角度）
          pivotX = mesh.position.x + halfLength
          rotateAngle = -THREE.MathUtils.degToRad(120)
        } else {
          // 左门或普通单开门：pivot 在左侧边，向左旋转（正角度）
          pivotX = mesh.position.x - halfLength
          rotateAngle = THREE.MathUtils.degToRad(120)
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

        // 抽屉向前拉出（-Z 为前方）
        addTween(mesh, 'position', 'z', mesh.position.z - pullOut)

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
            addTween(childMesh, 'position', 'z', childMesh.position.z - pullOut)
          }
        }
      }
    })
    doorsOpen.value = true
  }
}

// ==================== 复原 ====================

function resetAll() {
  // 先关闭门板/抽屉（如果已打开）
  if (doorsOpen.value) {
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

  isExploded.value = false
  isTransparent.value = false
  doorsOpen.value = false
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

onMounted(() => {
  initScene()
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  canvasRef.value?.removeEventListener('click', onMouseClick)
  renderer?.dispose()
})

defineExpose({ toggleExplode, toggleTransparent, toggleDoors, toggleAxes, resetAll })
</script>

<template>
  <div class="viewport">
    <canvas ref="canvasRef" class="canvas"></canvas>
    <div v-if="!cabinetStore.cabinet" class="loading-overlay">
      <p>等待加载柜子模型...</p>
    </div>
    <div class="toolbar">
      <button class="tool-btn" :class="{ active: isExploded }" @click="toggleExplode" title="爆炸图">爆炸图</button>
      <button class="tool-btn" :class="{ active: isTransparent }" @click="toggleTransparent" title="透视图">透视图</button>
      <button class="tool-btn" :class="{ active: doorsOpen }" @click="toggleDoors" title="门板/抽屉打开">开门</button>
      <button class="tool-btn" :class="{ active: isAxesVisible }" @click="toggleAxes" title="显示/隐藏坐标系">坐标系</button>
      <button class="tool-btn" @click="resetAll" title="复原">复原</button>
    </div>
    <div class="hint">
      <span>点击组件可选中查看属性</span>
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

.toolbar {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tool-btn {
  padding: 8px 14px;
  border: 1px solid #0f3460;
  border-radius: 6px;
  background: rgba(26, 26, 46, 0.85);
  color: #e0e0e0;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
  white-space: nowrap;
  backdrop-filter: blur(4px);
}

.tool-btn:hover {
  background: #0f3460;
  border-color: #e94560;
}

.tool-btn.active {
  background: #e94560;
  border-color: #e94560;
  color: white;
}

.hint {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 26, 46, 0.85);
  padding: 6px 16px;
  border-radius: 4px;
  color: #888;
  font-size: 12px;
  backdrop-filter: blur(4px);
}
</style>
