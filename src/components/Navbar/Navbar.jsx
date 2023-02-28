import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className="n-left">
        {/* logo */}
        <div className="n-name">
          Logo
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <div className="n-icon"></div>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About us</a> 
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="news.html">News</a>
            </li>
          </ul>
        </div>
        <button className="n-button ">
          <a className='btn ' href="contact.html">Contact us</a>
        </button>
        <div className="harmburger">
          <div className="h-items"></div>
          <div className="h-items"></div>
          <div className="h-items"></div>
        </div>
          
      </div>
    </div>
  )
}

export default Navbar
