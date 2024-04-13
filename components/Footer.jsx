'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-black border-t border-black `}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[24px] text-[44px] text-white">
        Thank you for visiting! For business inquiries, please contact us at info@appifyx.tech

        </h4>
        <a href='https://api.whatsapp.com/send/?phone=+919080031135&text=I%20hope%20you%27re%20doing%20well.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20your%20quotes%20with%20me?%20Looking%20forward%20to%20hearing%20from%20you.%20Thanks!' type="button" target='_blank' className="flex items-center h-fit py-4 px-6 bg-gold rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain text-white"
          />
          <span className="font-normal text-[16px] text-white">
            Contact Us
          </span>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-black opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <img src="/white-logo.png" alt="logo" className="w-36" />

          <p className="font-normal text-[14px] text-white">
            Copyright © 2024 🧡  AppfiyX. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
