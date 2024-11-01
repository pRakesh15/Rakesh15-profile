"use clint";
import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop } from "../../utils/motion";
import { slideInFromLeft } from "../../utils/motion";
import { slideInFromRight } from "../../utils/motion";
import { AnimatedModalDemo } from "./OpenModal";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constancs";
function HeroContent() {
  const [show, setShow] = useState(false);
  const isOpen = () => {
    setShow(true);
  };
  const isClose = () => {
    setShow(false);
  };

  // add size for the floting elements
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <div className=" xl:flex-row  flex-col-reverse flex gap-8 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-24 mt-20 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center text-start ml-4 md:ml-11 md:items-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
          >
            <SparklesIcon className="text-[#eb4566] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] md:text-[13px]">
              Hi, I'm Rakesh
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-3 mt-6 text-4xl md:text-6xl text-white max-w-full md:max-w-[600px] w-auto h-auto text-center md:text-start"
          >
            <span>
              Coding
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F70C18] to-[#FF7F00]">
                {" "}
                the Future,{" "}
              </span>
              Byte by Byte.
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-base md:text-lg text-gray-400 my-3 max-w-full md:max-w-[600px] text-center md:text-start"
          >
            I am a seasoned full-stack software developer with a passion for
            creating robust and scalable solutions. Proficient in both frontend
            and backend technologies, check out my projects and skills.
          </motion.p>

          <motion.a
            variants={slideInFromLeft(1)}
            onClick={isOpen}
            className="flex justify-center md:justify-start"
          >
            {/* Animated modal component */}
            <AnimatedModalDemo isOpen={show} onClose={isClose} />
          </motion.a>
        </div>

        {/*<ParticleContainer/> */}
        {/*image */}

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full  h-[600px] md:flex mt-5  justify-center items-center hidden sm:visible"
        >
          <Canvas
            className="cursor-pointer "
            camera={{ fov: 25, position: [5, 5, 5] }}
          >
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.5}>
              <MeshDistortMaterial
                color="#F0460E"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
             {/* all the floating elements */}
          </Canvas>
          <motion.img
            variants={slideInFromTop}
            className="imag object-contain absolute m-auto "
            src="/moon.png"
            alt="icon"
            height={450}
            width={450}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroContent;
