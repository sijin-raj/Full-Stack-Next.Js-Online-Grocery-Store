"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { SubText } from "../components/CustomTexts";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TitleText
          title={<>AppifyX work will talk to you</>}
          textStyles="text-center"
        />

        <SubText
          title={
            <>
              Come take a look at our web design and development case studies.<br /> <span>
                We don't just build websites! We build life long relationships  </span>

            </>
          }
          textStyles="text-center "
        />
        <div className="pt-24   grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3    md:gap-x-8 sm:gap-y-16  gap-16  items-center justify-center mx-auto space-x-1">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
