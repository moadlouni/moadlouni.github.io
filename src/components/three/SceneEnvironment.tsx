'use client'

import { Stars } from '@react-three/drei'

export default function SceneEnvironment() {
  return (
    <>
      {/* Ambient fill */}
      <ambientLight intensity={0.4} />

      {/* Key light — warm */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.4}
        color="#f5f0eb"
        castShadow
      />

      {/* Rim light — cool lavender */}
      <pointLight
        position={[-4, -2, -4]}
        intensity={0.6}
        color="#a0a0c0"
      />

      {/* Subtle back light */}
      <pointLight
        position={[0, 4, -6]}
        intensity={0.3}
        color="#ffffff"
      />

      {/* Very faint star field for depth */}
      <Stars
        radius={60}
        depth={30}
        count={200}
        factor={2}
        saturation={0}
        fade
        speed={0.3}
      />
    </>
  )
}
