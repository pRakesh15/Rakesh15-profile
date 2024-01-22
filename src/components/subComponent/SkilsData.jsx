"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Image } from "@chakra-ui/react";
const SkilsData = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVarintes = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDealy = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVarintes}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDealy }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export default SkilsData;
