"use client";
import React from "react";
import { slideInFromTop } from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft } from "../../utils/motion";
import { slideInFromRight } from "../../utils/motion";
import { motion } from "framer-motion";
const SkilText = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Think better with react js</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making app with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[20px] font-mono text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task deadline or idea
      </motion.div>
    </motion.div>
  );
};

export default SkilText;
