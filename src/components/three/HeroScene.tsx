'use client'

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FloatingObject from './FloatingObject'
import SceneEnvironment from './SceneEnvironment'

export default function HeroScene() {
  const [dragging, setDragging] = useState(false)

  return (
    <div
      className="h-full w-full"
      style={{ touchAction: 'pan-y' }}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <SceneEnvironment />
          <FloatingObject />
          <OrbitControls
            autoRotate={!dragging}
            autoRotateSpeed={1.5}
            enableDamping
            dampingFactor={0.06}
            enableZoom={false}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
