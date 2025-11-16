import React from 'react'
import Slider from '../components/slider/Slider'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/gallery/Gallery'
import OurService from '../components/ourService/OurService'
import SuccessStory from '../components/successStory/SuccessStory'
import HeroSupportSection from '../components/heroSupportSection/HeroSupportSection'

const page = () => {
  return (
    <div>
 <main>
   <Slider />
  <AboutUs />
  <Gallery />
  <OurService />
<SuccessStory />
<HeroSupportSection />
 </main>
    </div>
  )
}

export default page