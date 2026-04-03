'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingObject() {
  const groupRef = useRef<THREE.Group>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const targetRotation = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    let rafId: number
    let pending = false

    const handleMouseMove = (e: MouseEvent) => {
      if (pending) return
      pending = true
      rafId = requestAnimationFrame(() => {
        targetRotation.current = {
          x: (e.clientY / window.innerHeight - 0.5) * 0.5,
          y: (e.clientX / window.innerWidth - 0.5) * 0.8,
        }
        pending = false
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  useFrame((state) => {
    const { clock } = state
    const t = clock.elapsedTime

    if (!groupRef.current) return

    // Auto-rotation
    groupRef.current.rotation.y += 0.003

    // Sinusoidal bob
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.18

    // Mouse parallax — lerp toward target
    groupRef.current.rotation.x +=
      (targetRotation.current.x - groupRef.current.rotation.x) * 0.05

    // Wireframe icosahedron counter-rotates slightly for visual interest
    if (wireRef.current) {
      wireRef.current.rotation.x -= 0.002
      wireRef.current.rotation.z += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {/* Metallic torus knot */}
      <mesh ref={torusRef}>
        <torusKnotGeometry args={[0.9, 0.3, 200, 20]} />
        <meshStandardMaterial
          color="#d4d0cc"
          metalness={0.92}
          roughness={0.08}
          envMapIntensity={1}
        />
      </mesh>

      {/* Wireframe icosahedron overlay */}
      <mesh ref={wireRef}>
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
