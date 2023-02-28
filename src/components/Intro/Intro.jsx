import React from 'react'
import './Intro.css'
import Jevi from '../../images/jevi-web-studio-ar-vr 1.png'

 
const Intro = () => {
  return ( 
    <div className="i-intro bg">
        <div className="i-left">
            <div className="i-name">
                <span>digital marketing</span>
                <span>Work that we</span>
                <span>produce for our</span>
                <span>clients</span>
                <span>
                    Lorem Ipsum is simply dummy text of the printing and<br></br>
                    typesetting industry. Lorem Ipsum has been the industry's<br></br>
                    standard.
                </span>
            </div>
            <button className="i-button">
                <a className='btn-2' href="contact.html">Get more details</a>
            </button>
        </div>
        <div className="i-right">
            <img src={Jevi} alt="" />
        </div>
    </div>
  )
}

export default Intro
