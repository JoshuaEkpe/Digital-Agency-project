import React from 'react'
import './Services.css'
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.svg';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.svg';
import icon6 from '../../images/icon6.svg';
import Arrow from '../../images/arrow.png';

const Services = () => {
  return (
    <div className='s-services'>
      <div className="s-left">
        <span>
        Lorem Ipsum is simply dummy text of the printing and 
        </span>
        <span>
        typesetting industry.
        </span>
        <span>
        Lorem Ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </span>

        <span>
        the industry's standard dummy text ever since the 1500s.
        </span>
      </div>
      <div className="s-right">
        <div className="s-icon-top">
            <div className="s-icon-details">
            <span>
                <img className='s-img' src={icon1} alt="" />
            </span>
            <span>
                mobile game development
            </span>
            <span>
                <img src={Arrow} alt="" />
            </span>
            </div>
           

            <div className="s-icon-details__2">
            <span>
            <img className='s-img2' src={icon2} alt="" />
            </span>

            <span>
               PC Game Development
            </span>
            <span>
                <img src={Arrow} alt="" />
            </span>
            </div>


            <div className="s-icon-details__3">
            <span>
            <img className='s-img3' src={icon3} alt="" />
            </span>
            <span>
               PS4 Game Development
            </span>
            <span>
                <img src={Arrow} alt="" />
            </span>
            </div>



            <div className="s-icon-details__4">
            <span>
            <img className='s-img4' src={icon4} alt="" />
            </span>

            <span>
               AR/VR Solutions
            </span>
            <span>
                <img src={Arrow} alt="" />
            </span>
            </div>
        </div>

        <div className="s-icon-bottom">
            <div className="s-bottom-icon">
                <span>
                <img className='s-b-img' src={icon5} alt="" />
                </span>
                
                <span>
               AR/VR design
            </span>
            <span>
                <img src={Arrow} alt="" />
            </span>
            </div>
           
            <div className='s-bottom-icon'>
            <span>
                <img className='s-b-img' src={icon6} alt="" />
                </span>
                
                <span>
               3D Modelings
            </span>
            <span>
                <img src={Arrow} alt="" />
            </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
