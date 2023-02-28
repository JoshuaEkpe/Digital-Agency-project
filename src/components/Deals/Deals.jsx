import React from 'react'
import './Deals.css'
import Deals_img from '../../images/Deals_img.svg';

const Deals = () => {
  return (
    <div className='d-intro'>
      <div className="d-left">
        <span>
            <img src={Deals_img} alt="" />
        </span>
      </div>
      <div className="d-right">
        <span>
            Lorem Ipsum is simply dummy<br/>
            text dummy text
        </span>
        <span>
            Lorem Ipsum is simply dummy text of the printing and<br/>
            typesetting industry. Lorem Ipsum has been the industry's<br/>
            standard dummy text ever since the 1500s, when an unknown<br/>
            printer took a gallery of type and scrambled it to make a type<br/>
            specimen book. it has survived not only five centuries.
        </span>
        <span>
        Lorem Ipsum is simply dummy text of the printing and<br/>
            typesetting industry.
        </span>

        <button className="d-button">
            Read more
        </button>
      </div>
    </div>
  )
}

export default Deals
