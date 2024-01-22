import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc/index.js";
import ProjectCard from "../subComponent/ProjectCard.jsx";
import {projects} from '../../../constants/index.js'
const Projects = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} -mt-16`} >What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.4, 1)}
          className="mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
        >
         Following projects showcase my proficiency in building innovative and scalable
          applications using the MERN (MongoDB, Express.js, React.js, Node.js)
          stack. Each project reflects my commitment to delivering high-quality
          software solutions with a focus on user experience, performance, and
          functionality.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap items-center justify-center gap-16">
      {
        projects.map((project,index)=>(
          <ProjectCard
          key={`project-${index}`}
          index={index}
          image={project.image}
          name={project.name}
          source_code_link={project.source_code_link}
          description={project.description}
          tags={project.tags}
          {...Projects}
          />
          
        ))
      }
      
      </div>
    </>
  );
};

export default SectionWrapper(Projects,"projects");
