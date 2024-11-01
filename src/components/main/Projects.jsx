import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { myProjects } from "../constancs/index.js";
import CanvasLoader from "../subComponent/Loading.jsx";
import { DemoComputer } from "../subComponent/DemoComputer";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion.js";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];
  //   console.log(currentProject)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="projects"
    >
      <section className="c-space my-20 md:mx-20  lg:mx-20">
        <p className="head-text">My Selected Work</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <motion.div
            variants={slideInFromLeft(0.3)}
            className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200"
          >
            <div className="absolute top-0 right-0">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
              style={currentProject.logoStyle}
            >
              <img
                className="w-10 h-10 shadow-sm"
                src={currentProject.logo}
                alt="logo"
              />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">
                {currentProject.title}
              </p>

              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              <a
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
              {
                currentProject?.host?<p>Check Live Site</p>:<p>Check Repository</p>
              }
                
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  className="w-3 h-3"
                />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
              <button
                className="arrow-btn"
                onClick={() => handleNavigation("previous")}
              >
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button
                className="arrow-btn"
                onClick={() => handleNavigation("next")}
              >
                <img
                  src="/assets/right-arrow.png"
                  alt="right arrow"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.6)}
            className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"
          >
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={2}
                    position={[0, -3, 0]}
                    rotation={[0, -0.1, 0]}
                  >
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
