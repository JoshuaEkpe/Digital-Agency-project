import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='h-wrapper'>
        <div className="h-left">
        
        </div>
        <div className="h-right">
            <div className="h-address">
                 {/* To add an image icon */}
                
                <p className="h-text">
                  Company Address type here
                </p>
            </div>
            <div className="h-contact">
               {/* To add image icon */}
              <p className="h-contact">
                +94 000 00000
              </p>
            </div>
        </div>
    </div>
  )
}

export default Header
