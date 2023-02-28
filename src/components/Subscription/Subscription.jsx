import React from 'react'
import './Subscription.css'

const Subscription = () => {
  return (
    <div className='s-intro'>
      <div className="s-details">
        <span>
            Lorem Ipsum
        </span>
        <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
            industry.
        </span>
      </div>
      <div className="s-card">
            <span>
                Stay in the loop
            </span>
            <div className="s-texts">
                <span>
                    Subscribe to receive the latest news and updates about TDA.<br/>
                </span>
                <span>  
                We promise not to spam you!
                </span>
                <span className='s-email'>
                <input type="text" placeholder='Enter email address' />
                    <input type="button" value="Continue" />
                </span>
              
            </div>
      </div>
    </div>
  )
}

export default Subscription
