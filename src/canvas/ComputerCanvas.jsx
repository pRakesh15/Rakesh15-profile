import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
const ComputerCanvas = () => {
  const computer = useGLTF("./gaming_desktop/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={2} />
      <primitive object={computer.scene} scale={0.75} position={[0,-3.25,-1.5]} rotation={[-0.01,-0.2,-0.1]}/>
    </mesh>
  );
};
const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='"demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerCanvas />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
