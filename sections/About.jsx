'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me 😁" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-black"
      >I'm 
         <span className="font-extrabold text-green-400"> Sijin Raj</span>, an experienced Software Development Engineer in Test (SDET) 💻 with a passion for ensuring high-quality and reliable software solutions.{' '}
         I have worked on a variety of projects, ranging from enterprise
        <span className="font-extrabold text-red-400">
         applications to mobile apps
        </span>{' '}
        I specialize in designing and implementing{' '}
        <span className="font-extrabold text-green-400">test automation frameworks 🧪</span> 
        using tools like Playwrite, and Cypress, and I'm well-versed in  {' '}
        <span className="font-extrabold text-yellow-400">software development 🚀.</span>
        
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
