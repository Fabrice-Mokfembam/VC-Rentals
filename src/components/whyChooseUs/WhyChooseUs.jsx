import React from 'react'
import './why.scss';
import { Van } from '../../assets/images';

function WhyChooseUs() {
  return (
      <section className='why-choose-us'>
          <h1> <span>W</span>hy <span className="span-color">Choose</span> Us</h1>
          <div className="timeline">
              <div>
                 We are <span className='span-color2'>fast</span>
              </div> 
              <div>
                 We are <span className='span-color2'>Reliable</span>
              </div> 
              <div>
                 We offer <span className='span-color2'>Discounts</span>
              </div> 
              <div>
                 We have the <span className='span-color2'>Number</span> need
              </div> 
          </div>

          <h2>More {' '} <span className='span-color'>Over</span></h2>
          <div className='van-div' >
               <div>
                  <h2>There is a van for <span className='span-color'>easy</span> transportation</h2>
              </div>
              <img src={Van} alt='image of van' />
             
          </div>
    </section>
  )
}

export default WhyChooseUs
