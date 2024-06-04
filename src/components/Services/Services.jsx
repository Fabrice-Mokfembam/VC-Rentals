import React from 'react'
import './Services.scss'
import { Tables, stackedchairs } from '../../assets/images'

function Services() {
  return (
    <div className='service-main-container' id='services'>
      <h1> <span>O</span>ur <span>Services</span></h1>
      <div>
        <img src={stackedchairs} alt="chairs" width={450} height={395} />
        <div className='info-chairs'>
          <h1> We Rent <span>Chairs</span></h1>
          <p>Elevate the ambiance of your event with our extensive collection of durable and beautifully designed chairs.
            Our chairs are easy to decorate and built to withstand the demands of any occasion, ensuring your guests enjoy unparalleled comfort and style.</p>
          <br />
          <p>There <strong>500+ chairs</strong>, Rent all in one place.</p>
          <button>Get in touch</button>
        </div>
      </div>

      <div>
        <div className='info-chairs tables'>
          <h1> We Rent <span>Tables</span></h1>
          <p>Complete the perfect setting for your event with our diverse selection of high-quality tables. From elegant banquet tables to modern cocktail tables, our extensive inventory offers the versatility to accommodate any event size or theme. Pair our tables with our chair rentals for a coordinated and visually stunning setup.</p>
          <br />
          <p>Choose from <strong>200+ table options</strong>, all available for rent.</p>
          <button>Get in touch</button>
        </div>
         <img src={Tables} alt="chairs" width={700} height={395} />
      </div>
    </div>
  )
}

export default Services