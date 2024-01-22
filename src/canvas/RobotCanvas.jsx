import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
const RobotCanvas = () => {
  const robo = useGLTF("./earthHologram/scene.gltf");

  return <primitive object={robo.scene} scale={1.3} rotation={[-0.01,-0.2,-0.1]} />;
};

const ContactCanve = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={Math.PI / 2}
        />
        <RobotCanvas />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ContactCanve;
