'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-black ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[48px] text-[40px] text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);


export const SubText = ({ title, textStyles }) => (
  <motion.p
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-medium md:text-[18px] text-[12px] text-gray-600 ${textStyles}`}
  >
    {title}
  </motion.p>
);
