import React from 'react'
import './Footer.css'
import Facebook  from'../../images/face-icon.svg';
import Instagram  from'../../images/instagram-icon.svg';
import Twitter  from'../../images/twitter-icon.svg';
import Linkedin  from'../../images/linkedin.svg';



const Footer = () => {
  return (
    <div className='f-intro'>
      <div className="f-top_side">
        <div className="f-text">
            <span>
              LOGO
            </span>
            <span>
              Lorem Ipsum is simply dummy text of the <br/>
              printing and typesetting industry.
            </span>
            <span>
              @Company.com
            </span>
        </div>
        <div className="f-navbar">
        <span>
              About us
            </span>
            <span>
              Company
            </span>
            <span>
              Portfolio
            </span>
            <span>
              Careers
            </span>
            <span>
              Contact us
            </span>
        </div>
        <div className="f-contact">
        <span>
              Contact us
            </span>
            <span>
              Lorem Ipsum is simply dummy text <br/> of the
              printing and typesetting <br/> industry.
            </span>
            <span>
              +9000 0000 0000
            </span>
        </div>
        <div className="f-icon">
          <span>
          <img className='icon1' src={Facebook} alt="" />
          </span>
          <span>
            <img className='icon2' src={Instagram} alt="" />
          </span>
          <span>
          <img className='icon3' src={Twitter} alt="" />
          </span>
          <span>
          <img className='icon4' src={Linkedin} alt="" />
          </span>
        </div>
      </div>
      <div  className="f-bottom_side">
        <span>
          <hr />
        </span>
        <span>
          Copyright &#174; 2021 Company All rights Rcerved
        </span>
      </div>
    </div>
  )
}

export default Footer
