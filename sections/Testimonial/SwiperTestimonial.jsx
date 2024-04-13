import React from 'react';
import PropTypes from 'prop-types';
import InnerHTML from 'html-react-parser';
// import '../../styles/styles.scss'
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Import Swiper styles
// import 'swiper/swiper.scss'
// import 'swiper/scss'
// import 'swiper/scss/navigation'
// import 'swiper/scss/pagination'
// import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/pagination/pagination.scss'
// import 'swiper/components/scrollbar/scrollbar.scss'

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y])

const SwiperSlider = (props) => {
  return (
    <>
      <Swiper
        spaceBetween={props.spaceBetween}
        loop={true}
        autoplay={{ delay: props.slideDeley }}
        slidesPerView={props.slidesPerView}
        pagination={true}
        scrollbar={false}
      
        
        
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {props.slides.map((slide) => (
          <SwiperSlide className='bg-lite_new rounded-20px shadow-light_secondary shadow-lg p-2 rounded-md pb-7' >
            <div className="flex flex-row">
              <div className="w-16 py-5">
                {slide.img && <img src={slide.img} className='rounded-full w-14 bg-primary' alt="" />}
              </div>
              <div className="flex flex-col p-4 ">
                {slide.cite && InnerHTML(slide.cite)}
              </div>
            </div>
            {slide.content && InnerHTML(slide.content)}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

SwiperSlider.propTypes = {
  slides: PropTypes.array,
}

export default SwiperSlider
