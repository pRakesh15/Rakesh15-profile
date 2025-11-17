import { useRef, useState } from "react";
import Button from "../subComponent/Button.jsx";
import { Tilt } from "react-tilt";
import { useInView, motion } from "framer-motion";
import { slideInFromRight } from "../../utils/motion.js";
import { Canvas } from "@react-three/fiber";
import { DemoGlobe } from "../subComponent/DemoGlobe.jsx";
import { OrbitControls } from "@react-three/drei";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" rp5865442@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="about"
    >
      <section className="c-space my-20 md:my-5  md:mx-20  lg:mx-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
          <div className="col-span-1 xl:row-span-3">
            {/* add pin container for make the card animate */}
            <Tilt
              option={{
                max: 40,
                scale: 1,
                speed: 400,
              }}
            >
              <div className="grid-container">
                <img
                  src="assets/grid1.png"
                  alt="grid-1"
                  className="w-full sm:h-[276px] h-fit object-contain"
                />

                <div>
                  <p className="grid-headtext">Hi, I’m Rakesh Pradhan</p>
                  <p className="grid-subtext">
                    Impact-driven Backend developer with 2 years of experience in
                    building scalable APIs and backend systems using Node.js,
                    NestJS, and GraphQL.
                  </p>
                </div>
              </div>
            </Tilt>
          </div>

          <div className="col-span-1 xl:row-span-3">
            <Tilt
              option={{
                max: 40,
                scale: 1,
                speed: 400,
              }}
            >
              <div className="grid-container">
                <img
                  src="assets/grid2.png"
                  alt="grid-2"
                  className="w-full sm:h-[276px] h-fit object-contain "
                />

                <div>
                  <p className="grid-headtext">Tech Stack</p>
                  <p className="grid-subtext">
                    I specialize in a variety of languages, frameworks, and
                    tools that allow me to build robust and scalable
                    applications
                  </p>
                </div>
              </div>
            </Tilt>
          </div>

          <div className="col-span-1 xl:row-span-4">
            <motion.div
              variants={slideInFromRight(0.4)}
              className="grid-container"
            >
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                {/*
                   height={326}
                width={326}
             
             */}
                <Canvas
                  className="cursor-pointer  "
                  camera={{ fov: 25, position: [5, 5, 5] }}
                >
                  <OrbitControls enableZoom={false} autoRotate />
                  <ambientLight intensity={1} />
                  <directionalLight position={[3, 2, 1]} />
                  <DemoGlobe />
                </Canvas>
              </div>
              <div>
                <p className="grid-headtext">
                  I’m very flexible with time zone communications & locations
                </p>
                <p className="grid-subtext">
                  I&apos;m based in Noida , UtterPradesh and open to remote work
                  worldwide.
                </p>
                <a href="#contact">
                  <Button
                    name="Contact Me"
                    isBeam
                    containerClass="w-full mt-10"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
              <img
                src="assets/grid3.png"
                alt="grid-3"
                className="w-full sm:h-[266px] h-fit object-contain"
              />

              <div>
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                  I love solving problems and building things through code.
                  Programming isn&apos;t just my profession—it&apos;s my
                  passion. I enjoy exploring new technologies, and enhancing my
                  skills.
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1 xl:row-span-2">
            <Tilt
              option={{
                max: 40,
                scale: 1,
                speed: 400,
              }}
            >
              <div className="grid-container">
                <img
                  src="assets/grid4.png"
                  alt="grid-4"
                  className="w-full md:h-[156px] sm:h-[276px] h-fit object-cover sm:object-top"
                />

                <div className="space-y-2">
                  <p className="grid-subtext text-center">Contact me</p>
                  <div className="copy-container" onClick={handleCopy}>
                    <img
                      src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                      alt="copy"
                    />
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                      prakesh15.dev@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
