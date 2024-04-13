'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex items-center justify-center`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className=" flex justify-center flex-col"
      >
        <TypingText title="| What we perform" />
        <TitleText title={<>Techniques that we use to transform your imagination into existence.</>} />
        <div className="mt-[48px]  grid grid-cols-1 xl:grid-cols-3 gap-4">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      {/* <motion.div
        variants={planetVariants('right')}
        className={` ${styles.flexCenter}`}
      >
        <img
          src="/home-3-choose.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div> */}
    </motion.div>
  </section>
);

export default WhatsNew;
