import React from 'react'
import './Home.scss'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import HomeGallery from '../../components/HomeGallery/HomeGallery'
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs'
import Testimonial from '../../components/Testimonial/Testimonial'

function Home() {
  return (
    <>
      <Hero />
      <div className="main-sections">
        <Services />
        <HomeGallery />
        <WhyChooseUs />
        <Testimonial/>
      </div>
    </>
  )
}

export default Home
