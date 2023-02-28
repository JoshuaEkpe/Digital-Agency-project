import React from 'react'
import './Hero.css'
import Rectangle from '../../images/Rectangle 4.jpg'; 
import Group from '../../images/Group.svg';

const Hero = () => {
  return (
    <div className='h-hero'> 
      <div className="h-top">
        <span>
        Lorem Ipsum is simply dummy text of the printing and 
        
        </span>
        <span>
        typesetting industry.
        </span>
      </div>
      <div className="h-bottom">
        <span>
        Lorem Ipsum
        </span>
        <span>
        Lorem Ipsum  is simply dummy text of the printing and typesetting <br/> 
        industry. Lorem Ipsum has been the industry's standard dummy text <br />
        ever since the 1500s.
        </span>

        <div className="h-bottom-image">
          
            <img  src={Rectangle} alt="" />
            <img src={Group} alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
