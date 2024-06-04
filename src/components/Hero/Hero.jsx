import React from 'react'
import './Hero.scss'
import { HeroImage } from '../../assets/images'

function Hero() {
  return (
    <section className='hero-container'>
      <div className='hero-wrapper'>
              <div className="text-hero">
                  <h1>
                      Transform Your Event with Our <br/> <span>Premium Rentals </span>
                  </h1>
                  <p>
                      Impress your guests with furniture that exudes sophistication and comfort. Our high-quality chair and table rentals will make your event stand out, allowing you to focus on creating lasting memories.
                  </p>

                  <button>Contact Us</button>
              </div>    
              <div className="image-hero">
                  <img src={HeroImage} alt='hero image' width={500} height={500} />
              </div>
      </div>
    </section>
  )
}

export default Hero
