'use client';
import React, { useState, useEffect } from "react";

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => {
  

  

  return (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Blogs" textStyles="text-center" />
      <TitleText title={<>TECH BLOGS 📚</>} textStyles="text-center" />
      
    </motion.div>
  </section>
)}

export default Insights;
