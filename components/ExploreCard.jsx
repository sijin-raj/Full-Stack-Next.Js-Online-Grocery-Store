'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`w-full flex flex-col space-y-2 items-center justify-center`}
  >

    <div className={`rounded-[10px] flex items-center justify-center`}>
      <img src={imgUrl} alt={title} className='w-[880px] h-[360px] rounded-md shadow-md ' />
    </div>


  </motion.div>
);

export default ExploreCard;
