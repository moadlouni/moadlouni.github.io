'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import FloatingObject from './FloatingObject'
import SceneEnvironment from './SceneEnvironment'

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <SceneEnvironment />
        <FloatingObject />
      </Suspense>
    </Canvas>
  )
}
