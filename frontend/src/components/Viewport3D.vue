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

const COLOR_MAP: Record<string, number> = {
  '#D2B48C': 0xD2B48C,
  '#C4A882': 0xC4A882,
  '#FFFFFF': 0xFFFFFF,
  '#5C3A21': 0x5C3A21,
  '#B0B0B0': 0xB0B0B0,
  '#8B4513': 0x8B4513,
}

function hexToNumber(hex: string): number {
  return COLOR_MAP[hex.toUpperCase()] ?? 0xD2B48C
}

function initScene() {
  if (!canvasRef.value) return

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x2a2a3e)

  const aspect = canvasRef.value.clientWidth / canvasRef.value.clientHeight
  camera = new THREE.PerspectiveCamera(45, aspect, 1, 10000)
  camera.position.set(1500, 1200, 1500)
  camera.lookAt(400, 1000, 300)

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
  controls.target.set(400, 1000, 300)
  controls.update()

  // 窗口大小调整
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

  // 柜体原点坐标
  const ox = cabinet.position.x
  const oy = cabinet.position.y
  const oz = cabinet.position.z

  // 渲染每个组件
  for (const comp of cabinet.components) {
    renderComponent(comp, ox, oy, oz)
  }
}

function renderComponent(comp: CabinetComponent, ox: number, oy: number, oz: number) {
  // Three.js BoxGeometry 参数顺序: (width, height, depth)
  const geometry = new THREE.BoxGeometry(comp.length, comp.height, comp.width)

  const color = hexToNumber(comp.color)
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.6,
    metalness: 0.1,
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true

  // 位置计算：Three.js 中物体中心在几何体中心
  // 柜体原点在左下前角，所以需要加 half-length/height/width
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

  mesh.userData = { componentId: comp.id, componentName: comp.name }
  mesh.visible = comp.is_visible

  scene.add(mesh)
  meshes.set(comp.id, mesh)

  // 渲染子组件
  for (const child of comp.children) {
    renderComponent(child, ox, oy, oz)
  }
}

function animate() {
  animationId = requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

// 监听 cabinet 变化
watch(() => cabinetStore.cabinet, (newCabinet) => {
  if (newCabinet && scene) {
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
</style>