'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingObject() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    // Gentle vertical bob — OrbitControls handles all rotation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.18
  })

  return (
    <group ref={groupRef}>
      {/* Metallic torus knot */}
      <mesh>
        <torusKnotGeometry args={[0.9, 0.3, 200, 20]} />
        <meshStandardMaterial
          color="#d4d0cc"
          metalness={0.92}
          roughness={0.08}
          envMapIntensity={1}
        />
      </mesh>

      {/* Wireframe icosahedron overlay */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#a0a0c0"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  )
}
