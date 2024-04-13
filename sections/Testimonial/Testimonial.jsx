import SwiperSlider from './SwiperTestimonial';

import SliderImg1 from '../../public/team/team_1.png';
import SliderImg2 from '../../public/team/team_2.png';
import SliderImg3 from '../../public/team/team_3.png';
import SliderImg4 from '../../public/team/team_4.png';
// import SliderImg5 from '../../public/team/team_5.png';
import { TitleText, TypingText } from '../../components';

// import SliderImg2 from '../../images/popup-testimonial/raviprakash.jpg';
// import SliderImg3 from '../../images/popup-testimonial/tgrgte.png';
// import SliderImg4 from '../../images/popup-testimonial/tommmy.jpg';
// import Background from '../../public/';

const Slides = [
  {
    cite: `
            <cite className="flex flex-col"><span className="elementor-testimonial__name">Mohammad</span><span className="elementor-testimonial__company"> - AppifyX </span><span className="elementor-testimonial__title">Great product!</span></cite>
        `,
    content: `
            <div className="swiper-slide-contents">
            <div className="elementor-testimonial__text p-4"> AppifyX has been a game-changer for my team. We're able to manage our tasks, communicate in real-time, and collaborate seamlessly thanks to this powerful platform. And what's more, the customer support team is incredibly helpful and responsive. Highly recommended!</div>
            </div>`,
    img: '/team/team_1.png',
  },
  {
    cite: `
            <cite className="flex flex-col"><span className="elementor-testimonial__name"> Rizka Anneiza </span><span className="elementor-testimonial__title"> - CJ Designs <br></span></cite>
        `,
    content: `
            <div className="swiper-slide-contents "><div className="elementor-testimonial__text p-4">
            AppifyX has completely transformed the way I work remotely. With its intuitive interface and powerful collaboration features, I'm able to stay connected and productive no matter where I am in the world. I couldn't imagine going back to the old way of doing things! </div>
            </div>`,
    img: '/team/team_2.png',
  },
  {
    cite: `
            <cite className="flex flex-col"><span className="elementor-testimonial__name">Fathima Anees</span><span className="elementor-testimonial__title">- Wise Tech</span></cite>
        `,
    content: `
            <div className="swiper-slide-contents "><div className="elementor-testimonial__text p-4">
            If you're looking for a reliable and user-friendly tool to help you work remotely, look no further than AppifyX. With its intuitive interface and robust feature set, this platform makes remote work feel seamless and stress-free. I can't recommend it enough!
            </div></div>`,
    img: '/team/team_4.png',
  },
  {
    cite: `
        <cite className="flex flex-col"><span className="elementor-testimonial__name">Shalabi</span><span className="elementor-testimonial__company"> - truto  </span><span className="elementor-testimonial__title">
        </span></cite>
        `,
    content: `
            <div className="swiper-slide-contents "><div className="elementor-testimonial__text p-4">
            As someone who's been working remotely for years, I can confidently say that AppifyX is one of the best collaboration tools out there. It's reliable, versatile, and packed with features that make remote work feel effortless. I'm grateful to have found such a powerful platform!
             </div></div>`,
    img: '/team/team_3.png',
  },
  {
    cite: `
            <cite className="flex flex-col"><span className="elementor-testimonial__name">RolizappStore</span><span className="elementor-testimonial__title">Overall seems pretty good</span></cite>
        `,
    content: `
            <div className="swiper-slide-contents "><div className="elementor-testimonial__text p-4">
            AppifyX has been an invaluable tool for our remote team. From task management to real-time messaging and video conferencing, this platform has everything we need to stay connected and productive. And what's more, it's incredibly easy to use, even for those who aren't tech-savvy. We couldn't be happier with our experience using AppifyX!
            </div></div>`,
    img: '/team/team_2.png',
  },
]

const Testimonials = () => {

   

    return (
      <>
      <div className="relative pb-8 pt-14 lg:pt-20 lg:pb-14 space-y-2" >
      <div>
      <TypingText title="| AppifyX FeedBack" textStyles="text-center" />
        <TitleText
          title={<> AppifyX: The Game-Changing Collaboration  <br className="md:block hidden" /> Tool for Remote Work</>}
          textStyles="text-center"
        />
        </div>  
        <div className="flex flex-row">
          <div className="hidden xl:block w-full flex-col px-16 items-center">
            <SwiperSlider
              slidesPerView={2}
              slides={Slides}
              spaceBetween={40}
              slideDeley={1000}
            />
          </div>

          <div className="block xl:hidden pt-3 px-6 w-full">
            <SwiperSlider
              slidesPerView={1}
              slides={Slides}
              spaceBetween={40}
              slideDeley={5000}
            />
          </div>
        </div>
      </div>
      </>
    )}
export default Testimonials
