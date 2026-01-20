import React from 'react'
import Slider from '../components/slider/Slider'
import AboutUs from '../components/AboutUs'
import HeroSupportSection from '../components/heroSupportSection/HeroSupportSection'
import FundRaising from '../components/fundRaising/FundRaising'
import Cause from '../components/causes/Cause'
import TestimonialSection from '../components/testimonialSection/TestimonialSection'
import TrustedTestimonials from '../components/testimonialSection/TrustedTestimonials'
import LatestUpdates from '../components/latestUpdates/LatestUpdates'
import LatestPosts from '../components/latestPosts/LatestPosts'
import PopupAnnouncement from '../components/PopupAnnouncement'


const latestPost = {
  title: "🌟 New Post Published!",
  message: "Check out our latest article on how to support elderly women in need.",
  imageUrl: "/about/about-1.png", 
};


const page = () => {
  return (
    <div>
 <PopupAnnouncement
        title={latestPost.title}
        message={latestPost.message}
        imageUrl={latestPost.imageUrl}
      />      <main>
        <Slider />
        <AboutUs />
        <FundRaising />
        <Cause />
        <TrustedTestimonials />
        <LatestUpdates />
        <LatestPosts />
        <HeroSupportSection />
      </main>
    </div>
  )
}

export default page
