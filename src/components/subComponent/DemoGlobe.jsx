import React from 'react'
import { useGLTF } from '@react-three/drei'

export function DemoGlobe(props) {
  const { nodes, materials } = useGLTF('/models/earth.glb')

  // Bhubaneswar, Odisha coordinates
  const bhubaneswarLat = 20.2961
  const bhubaneswarLon = 85.8245

  // Convert latitude and longitude to 3D position on the sphere
  const latLonToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)
    const x = -radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.cos(phi)
    const z = radius * Math.sin(phi) * Math.sin(theta)
    return [x, y, z]
  }

  const globeRadius = 1.128
  const pinPosition = latLonToVector3(bhubaneswarLat, bhubaneswarLon, globeRadius)

  return (
    <group {...props} dispose={null}>
      {/* Render the 3D globe model */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Scene_-_Root']}
        scale={globeRadius}
      />
      
      {/* Render the red location pin icon */}
      <mesh position={pinPosition}>
        <sphereGeometry args={[0.03, 32, 32]} /> {/* Slightly larger sphere for the icon */}
        <meshStandardMaterial color="red" /> {/* Red color for the pin */}
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/earth.glb')
