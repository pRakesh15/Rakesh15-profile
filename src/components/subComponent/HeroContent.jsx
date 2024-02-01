"use clint";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ParticleContainer } from "../activity/ParticleContainer";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop } from "../../utils/motion";
import { slideInFromLeft } from "../../utils/motion";
import { slideInFromRight } from "../../utils/motion";
import OpenModal from "./OpenModal";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { slideInFromButtom } from "../../utils/motion";
function HeroContent() {
  const [show, setShow] = useState(false);
  const isOpen = () => {
    setShow(true);
  };
  const isClose = () => {
    setShow(false);
  };
  return (
    <div className=" xl:flex-row  flex-col-reverse flex gap-8 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-24 mt-20 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center ml-11 text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Hi,I'm Rakesh</h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-3 mt-6 text-6xl  text-white max-w-[600px] w-auto h-auto"
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
            className="text-lg text-gray-400 my-3 max-w-[600px]"
          >
            I am a seasoned full-stack software developer with a passion for
            creating robust and scalable solutions. Proficient in both frontend
            and backend technologies, Check out my project and skills.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            onClick={isOpen}
          >
            Learn More!
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
                color="#FFAB0F"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
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
        <OpenModal isOpen={show} onClose={isClose} />
      </motion.div>
    </div>
  );
}

export default HeroContent;
