import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Komponen Grid Partikel 3D Bergelombang (Gaya Klasik Persis Tangkapan Layar)
const WavyGrid = () => {
  const pointsRef = useRef()
  const rows = 45  // Jumlah baris ditingkatkan agar membentang sangat jauh ke kejauhan
  const cols = 65  // Jumlah kolom ditingkatkan agar mencakup seluruh lebar layar
  const gapX = 0.50 // Jarak horizontal antar partikel
  const gapZ = 0.55 // Jarak kedalaman antar partikel (membuat garis perspektif yang indah)

  // Generate koordinat posisi titik-titik awal secara merata
  const { positions } = useMemo(() => {
    const pos = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - cols / 2) * gapX
        const z = (r - rows / 2) * gapZ
        const y = 0
        pos.push(x, y, z)
      }
    }
    return {
      positions: new Float32Array(pos)
    }
  }, [rows, cols, gapX, gapZ])

  // Update tinggi partikel secara dinamis pada setiap frame (gelombang bergulir)
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const pos = pointsRef.current.geometry.attributes.position.array

    for (let i = 0; i < pos.length; i += 3) {
      const x = pos[i]
      const z = pos[i + 2]
      
      // Tinggi gelombang disesuaikan menjadi lebih ceper/lembut (0.28) agar ombaknya tetap terlihat "tidur" dan elegan
      const wave = Math.sin(z * 0.4 - time * 1.6) * 0.28 
                 + Math.cos(x * 0.12 + time * 0.8) * 0.08
      
      pos[i + 1] = wave
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef} rotation={[0.18, 0.0, 0.0]} position={[0, -3.3, 0.0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d4e866"           // Warna Lime khas BudJet
        size={0.11}               // Ukuran partikel kotak estetik seperti tangkapan layar
        sizeAttenuation={true}    // Partikel mengecil di kejauhan untuk efek kedalaman 3D yang nyata
        transparent={true}
        opacity={0.65}
        depthWrite={false}
        blending={THREE.AdditiveBlending} // Efek berpijar halus saat tumpang tindih
      />
    </points>
  )
}

const InteractiveScene = () => {
  const groupRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  // Parallax interaktif mengikuti kursor mouse secara sangat halus
  useFrame((state) => {
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, state.mouse.x * 0.25, 0.05)
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, state.mouse.y * 0.25, 0.05)
    
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x
      groupRef.current.rotation.x = -mouse.current.y
    }
  })

  return (
    <group ref={groupRef}>
      <WavyGrid />
    </group>
  )
}

const HeroWave = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <InteractiveScene />
      </Canvas>
    </div>
  )
}

export default HeroWave
