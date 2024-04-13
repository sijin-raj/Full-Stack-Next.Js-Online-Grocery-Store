"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../utils/motion";
import { saveAs } from "file-saver";
import Button from "../components/Common/Button";

const Hero = () => {
  const saveFile = () => {
    saveAs("/sijin-raj.pdf", "sijin-raj-resume.pdf");
  };
  return (
    <>
      <section data-cursor-exclusion className={`${styles.yPaddings} sm:pl-16 sm:p-0 lg:p-10 xl:pb-7 bg-background-theme`} id="header">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 p-5 lg:p-1  lg:mt-24 mt-4`}>
          <div className="  mx-auto flex flex-col-reverse xl:flex-row items-center space-y-6 xl:space-y-0 xl:space-x-10">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="w-full xl:w-4/5 sm:p-2 lg:p-10   mx-auto flex xl:items-center xl:justify-center">
              <div className="flex flex-col items-start space-y-6">
                <h2 data-cursor-size="150px" className="text-2xl  lg:text-5xl font-semibold tracking-normal text-black xl:leading-snug">
                  Elevate Your Brand Online Presence with AppifyX
                </h2>
                <h4 className="text-sm md:text-base xl:text-lg font-normal  text-gray-600 xl:leading-8">
                  Unlock your business's digital potential with AppifyX. Our expert strategies and tailored solutions ensure your online presence stands out in today's competitive landscape. Join satisfied clients from the <span className="font-bold">Maldives, India, Saudi Arabia,</span> and <span className="font-bold">Bahrain</span>  who have experienced firsthand the transformative impact of our services. Let's grow your business together.                </h4>
                <div className="flex flex-row space-x-6 ">
                  <Button text="Get a quote" to="https://api.whatsapp.com/send/?phone=+919080031135&text=I%20hope%20you%27re%20doing%20well.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20your%20quotes%20with%20me?%20Looking%20forward%20to%20hearing%20from%20you.%20Thanks!" />
                  <Button text="Schedule a call" to="https://api.whatsapp.com/send/?phone=+919080031135&text=I%20hope%20you%27re%20doing%20well.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20your%20quotes%20with%20me?%20Looking%20forward%20to%20hearing%20from%20you.%20Thanks!" background="bg-transparent" textColor="text-primary" />

                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="w-full xl:w-1/2 p-5 flex flex-col  items-center justify-center space-y-8">
              <img src="/home-2.png" alt="Header" className="w-[420px]" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
