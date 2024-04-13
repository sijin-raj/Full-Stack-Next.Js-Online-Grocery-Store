"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Button from "../components/Common/Button";
import { TitleText } from "../components";
import { SubText } from "../components/CustomTexts";
import GetStarted from "./GetStarted";

const Contact = () => (
  <section className={`${styles.paddings}`}>
    <TitleText title={<>Empowering Digital Experiences
      for Future World.</>} textStyles="text-center" />

    <SubText
      title={
        <>
          Get more sales, leads and revenue for your business quickly and easily
          with our personalized approach
        </>
      }
      textStyles="text-center"
    />

    <GetStarted />

    {/* <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} w-full mt-20 px-20 flex lg:flex-row flex-col gap-6`}>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="xl:w-1/2 relative flex justify-center items-center">
        <img
          src="/contact.png"
          alt="planet-09"
          className="w-full  object-cover rounded-[40px]"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="lg:w-1/2 flex justify-center flex-col  sm:p-8 p-3  relative">
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-black">
            Our AppifyX was
            incorporated in the year
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-black"></p>
        </div>

        <p className="mt-[24px] mb-6 font-normal sm:text-[12px] lg:text-[20px]  text-gray-600">
          We initially started our operation with countable work force. Later we spread our operations in to Riyadh, Jeddah, Dammam, Al- Khobar and our presence is almost in and around Kingdom of Saudi Arabia is achieved gradually. Our plethora of services encompass, Website design and Development, Domain Registration,Website Hosting, Mobile Apps Development, Digital Marketing,Out door Advertising
        </p>
        <Button
          to=""
          text="Contact Support team"
        />
      </motion.div>
    </motion.div> */}
  </section>
);

export default Contact;
