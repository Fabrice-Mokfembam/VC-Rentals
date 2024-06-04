import React from 'react'
import './HomeGallery.scss'
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6 } from '../../assets/images'
import { FaArrowRight } from 'react-icons/fa';


function HomeGallery() {
  return (
    <section className='home-gallery-container'>
      <h1>
        Get the right <span className='span-color'>solution{' '}</span>for your events <br />
        <span className='span-color'>all</span> in <strong>one</strong> place
      </h1>

      <div className="gallery">
        <img src={Gallery1} alt="Gallery 1" className="image1" />
        <img src={Gallery2} alt="Gallery 2" className="image2" />
        <img src={Gallery3} alt="Gallery 3" className="image3" />
        <img src={Gallery4} alt="Gallery 4" className="image4" />
        <img src={Gallery5} alt="Gallery 5" className="image5" />
        <img src={Gallery6} alt="Gallery 6" className="image6" />
      </div>

      <button>Browse Our Gallery  <FaArrowRight className="arrow-icon" /></button>
    </section>
  )
}

export default HomeGallery;