import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Material Kaca Premium (Frosted Glass)
const GlassMaterial = ({ color }) => (
  <meshPhysicalMaterial
    color={color}
    transmission={0.9}
    opacity={1}
    metalness={0.1}
    roughness={0.15}
    ior={1.5}
    thickness={1.5}
    envMapIntensity={1.5}
    clearcoat={1}
    clearcoatRoughness={0.1}
  />
)

const FloatingShapes = () => {
  const group = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  // Parallax halus mengikuti mouse
  useFrame((state) => {
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, (state.mouse.x * Math.PI) / 10, 0.05)
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, (state.mouse.y * Math.PI) / 10, 0.05)
    if (group.current) {
      group.current.rotation.y = mouse.current.x
      group.current.rotation.x = -mouse.current.y
    }
  })

  return (
    <group ref={group}>
      {/* Torus / Cincin Besar Kiri */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-4, 2, -3]} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
          <torusGeometry args={[1.5, 0.5, 32, 64]} />
          <GlassMaterial color="#d4e866" />
        </mesh>
      </Float>

      {/* Sphere / Bola Kanan Atas */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[5, 2.5, -5]}>
          <sphereGeometry args={[1.4, 64, 64]} />
          <GlassMaterial color="#ffffff" />
        </mesh>
      </Float>

      {/* Icosahedron Kiri Bawah */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-5, -2.5, -6]} rotation={[0, Math.PI / 4, 0]}>
          <icosahedronGeometry args={[1.8, 0]} />
          <GlassMaterial color="#ffffff" />
        </mesh>
      </Float>
      
      {/* Torus Kecil Kanan Bawah */}
      <Float speed={3} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[4, -3, -2]} rotation={[-Math.PI / 4, 0, Math.PI / 6]}>
          <torusGeometry args={[0.9, 0.3, 16, 32]} />
          <GlassMaterial color="#d4e866" />
        </mesh>
      </Float>
    </group>
  )
}

const HeroWave = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#d4e866" />
        
        {/* Environment map untuk efek refleksi kaca yang realistis */}
        <Environment preset="city" />
        
        <FloatingShapes />
      </Canvas>
    </div>
  )
}

export default HeroWave
