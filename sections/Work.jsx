import React from "react";
// import Tilt from 'react-tilt'
import { motion } from "framer-motion";

import styles from "../styles";
// import { github } from '../assets'
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { TitleText, TypingText } from "../components";

import { fadeIn, staggerContainer } from "../utils/motion";
import { SubText } from "../components/CustomTexts";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="  w-full">
        <div className="text-black flex items-center justify-center">
          <div className="rounded-full w-20 h-20 text-3xl font-bold flex items-center justify-center bg-white">
            {index + 1}
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center text-center">
          <h3 className="text-white  font-bold text-[16px]">{name}</h3>
          <p className="mt-2 w-4/5 text-white text-[14px]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const styling = {
    backgroundImage: "url('/bg.png')",
    width:"100%",
    height:"100%"
  }
  return (
    <section className={`${styles.paddings} relative z-10`} style={styling} >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        {/* <TypingText
          title="| People on the World Track"
          textStyles="text-center"
        /> */}
        <TitleText title={<>Maximize Your Online Potential
        </>} textStyles="text-center" />

        <SubText
          title={
            <>
              Market & Grow Your Business Digitally With AppifyX
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-20 rounded-3xl bg-primary p-10 flex flex-col lg:flex-row items-center justify-center gap-2">
          <div className="absolute -mt-28 hidden lg:block">
            <svg
              width="1027"
              height="10"
              viewBox="0 0 947 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                width="1027"
                height="10"
                rx="5"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
          </div>


          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
