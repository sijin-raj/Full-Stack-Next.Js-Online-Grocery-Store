import { Footer, Navbar } from '../components'
import {
  About,
  Explore,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  Experience,
  Work,
  Contact,
} from '../sections'
import { Cursor } from 'react-creative-cursor'
import 'react-creative-cursor/dist/styles.css'
import Marquee from 'react-fast-marquee'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Pricing from '../sections/pricing'
import Testimonials from '../sections/Testimonial/Testimonial'


export const MarqueeData = [
  'Development',
  'Studio',
  'Branding',
  'Agency',
  'Strategy',
  'typhography',
  'Design',
  'Interaction',
  'Element',
  'DIgital SOlution',
]

const Home = () => (
  <div data-cursor-exclusion className="layout-background overflow-hidden">
    {/* <div className="hidden lg:block">
      <Cursor isGelly={true} cursorSize={30} />
    </div> */}

    <Navbar />
    <Hero />
    <div className="relative">
      <Contact />
      <Work />
      <WhatsNew />
      {/* <GetStarted /> */}
      <div className="z-0" />

      <Explore />
      <Pricing />
      <Testimonials />

      {/* <Experience /> */}
    </div>

    <div className="relative">
      {/* <Insights /> */}
      <div className="z-0" />
    </div>
    <Footer />

    <FloatingWhatsApp
      phoneNumber="+919080031135"
      accountName="Support Team"
      allowEsc
      allowClickAway
      avatar="/avator.png"
      notification
      notificationSound
    />

  </div>
)

export default Home
