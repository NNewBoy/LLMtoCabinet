<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
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

function hexToNumber(hex: string): number {
  const cleaned = hex.replace('#', '')
  const parsed = parseInt(cleaned, 16)
  return isNaN(parsed) ? 0xD2B48C : parsed
}

function initScene() {
  if (!canvasRef.value) return

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x2a2a3e)

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

  // 光照
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
  dirLight.position.set(1000, 2000, 500)
  dirLight.castShadow = true
  scene.add(dirLight)

  const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3)
  dirLight2.position.set(-500, 500, -500)
  scene.add(dirLight2)

  // 地面网格
  const gridHelper = new THREE.GridHelper(2000, 20, 0x444466, 0x333355)
  scene.add(gridHelper)

  // 轨道控制器
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  controls.target.set(0, 1000, 0)
  controls.update()

  window.addEventListener('resize', onResize)
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
  // 清除旧模型
  meshes.forEach(mesh => scene.remove(mesh))
  meshes.clear()
  originalPositions.clear()
  originalMaterials.clear()
  originalRotations.clear()

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

function renderComponent(comp: CabinetComponent, ox: number, oy: number, oz: number) {
  const geometry = new THREE.BoxGeometry(comp.length, comp.height, comp.width)

  const color = hexToNumber(comp.color)
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.6,
    metalness: 0.1,
    transparent: false,
    opacity: 1.0,
    side: THREE.DoubleSide,
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true

  mesh.position.set(
    ox + comp.position.x + comp.length / 2,
    oy + comp.position.y + comp.height / 2,
    oz + comp.position.z + comp.width / 2
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
  }
  mesh.visible = comp.is_visible

  scene.add(mesh)
  meshes.set(comp.id, mesh)

  // 备份原始状态
  originalPositions.set(comp.id, mesh.position.clone())
  originalMaterials.set(comp.id, material.clone())
  originalRotations.set(comp.id, mesh.rotation.clone())

  for (const child of comp.children) {
    renderComponent(child, ox, oy, oz)
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

// ==================== 门板/抽屉打开动画 ====================

// 备份门板/抽屉的原始状态
let doorOriginals: Map<string, {
  parent: THREE.Object3D
  posX: number; posY: number; posZ: number
  rotY: number
  pivotGroup?: THREE.Group
  childMeshIds?: string[]
}> = new Map()

// 查找某个组件的所有子组件 mesh ID
function findChildMeshIds(parentId: string): string[] {
  const ids: string[] = []
  meshes.forEach((mesh, id) => {
    // 子组件 ID 格式为 "parentName_childName" 或直接查找 userData
    // 通过 cabinet 数据查找 children
  })
  // 从 cabinetStore 中查找
  const cabinet = cabinetStore.cabinet
  if (!cabinet) return ids
  const parent = cabinet.components.find(c => c.id === parentId)
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
      if (type === 'door' || type === 'drawer') {
        const orig = doorOriginals.get(id)
        if (!orig) return

        if (type === 'door' && orig.pivotGroup) {
          // 先动画关闭 pivot group 旋转
          addTween(orig.pivotGroup, 'rotation', 'y', 0, 0.6)
          // 动画完成后移除 group 并还原 mesh（延迟执行）
          setTimeout(() => {
            const group = orig.pivotGroup!
            // 先将子物体移回 scene 并还原位置
            if (orig.childMeshIds) {
              for (const cid of orig.childMeshIds) {
                const childMesh = meshes.get(cid)
                const childOrig = doorOriginals.get(cid)
                if (childMesh && childOrig) {
                  scene.attach(childMesh)
                  childMesh.position.set(childOrig.posX, childOrig.posY, childOrig.posZ)
                  childMesh.rotation.set(0, childOrig.rotY, 0)
                }
              }
            }
            // 再将门板移回 scene
            scene.attach(mesh)
            scene.remove(group)
            mesh.position.set(orig.posX, orig.posY, orig.posZ)
            mesh.rotation.y = orig.rotY
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

      if (type === 'door') {
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

        // 计算门板左侧边在世界坐标中的 X 位置
        const geom = mesh.geometry as THREE.BoxGeometry
        geom.computeBoundingBox()
        const bbox = geom.boundingBox!
        const halfLength = (bbox.max.x - bbox.min.x) / 2
        const pivotX = mesh.position.x - halfLength

        // 创建 pivot group 放在左侧边位置
        const pivotGroup = new THREE.Group()
        pivotGroup.position.set(pivotX, mesh.position.y, mesh.position.z)
        scene.add(pivotGroup)

        // 将门板移入 group
        scene.remove(mesh)
        pivotGroup.add(mesh)
        mesh.position.set(halfLength, 0, 0)

        // 将子物体（拉手等）也移入 group
        for (const cid of childIds) {
          const childMesh = meshes.get(cid)
          if (childMesh) {
            // 备份子物体原始位置
            doorOriginals.set(cid, {
              parent: childMesh.parent!,
              posX: childMesh.position.x,
              posY: childMesh.position.y,
              posZ: childMesh.position.z,
              rotY: childMesh.rotation.y,
            })
            scene.remove(childMesh)
            pivotGroup.add(childMesh)
            // 转换为相对于 pivot 的局部坐标（保持 Y 不变）
            childMesh.position.x -= pivotX
            childMesh.position.y -= pivotGroup.position.y
            childMesh.position.z -= pivotGroup.position.z
          }
        }

        doorOriginals.get(id)!.pivotGroup = pivotGroup

        // 旋转 pivot group 实现门板绕左侧边向外旋转 120°
        addTween(pivotGroup, 'rotation', 'y', THREE.MathUtils.degToRad(120))
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
  // 还原位置
  meshes.forEach((mesh, id) => {
    const origPos = originalPositions.get(id)
    const origRot = originalRotations.get(id)
    if (origPos) {
      addTween(mesh, 'position', 'x', origPos.x)
      addTween(mesh, 'position', 'y', origPos.y)
      addTween(mesh, 'position', 'z', origPos.z)
    }
    if (origRot) {
      addTween(mesh, 'rotation', 'x', origRot.x)
      addTween(mesh, 'rotation', 'y', origRot.y)
      addTween(mesh, 'rotation', 'z', origRot.z)
    }
  })

  // 还原材质
  meshes.forEach((mesh, id) => {
    const orig = originalMaterials.get(id)
    if (orig) {
      mesh.material = orig.clone()
    }
  })

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
    console.error(newCabinet)
    renderCabinet(newCabinet)
  }
}, { deep: true })

onMounted(() => {
  initScene()
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
})

defineExpose({ toggleExplode, toggleTransparent, toggleDoors, resetAll })
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
      <button class="tool-btn" @click="resetAll" title="复原">复原</button>
    </div>
  </div>
</template>

<style scoped>
.viewport {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.canvas {
  width: 100%;
  height: 100%;
  display: block;
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
</style>