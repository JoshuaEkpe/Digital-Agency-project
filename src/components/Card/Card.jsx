import React from 'react'
import './Card.css'
import Back from '../../images/back.svg';
import Forward from '../../images/forward.svg';
import Arrow from '../../images/More Aarrow.svg';

const Card = () => {
  return (
    
    <div className='c-intro'>
      <div className="c-top">
        <div className="c-top_left">
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
            industry.</span>
        </div>
        <div className="c-top_right">
            <span>
                <img className='c-arrow' src={Back} alt="" />
            </span>
            <span>
                <img className='c-arrow' src={Forward} alt="" />
            </span>
        </div>
      </div>


      <div className="c-bottom">
        <div className="c-card c-1">
            <span>
                Lorem Ipsum
            </span>
            <span>
                Lorem Ipsum
            </span>
            <span>
                Lorem Ipsum is simply dummmy text of the<br/>
                printing and typesetting industry. Lorem<br/>
                Ipsum has been the industry's standard <br/>
                 dummy text ever since the 1500s,  
            </span>
            <span>
                Read more
                <img src={Arrow} alt="" />
            </span>
        </div>
        <div className="c-card">
        <span>
                Lorem Ipsum
            </span>
            <span>
                Lorem Ipsum
            </span>
            <span>
                Lorem Ipsum is simply dummmy text of the<br/>
                printing and typesetting industry. Lorem<br/>
                Ipsum has been the industry's standard <br/>
                 dummy text ever since the 1500s,  
            </span>
            <span>
                Read more
                <img src={Arrow} alt="" />
            </span>
        </div>
        <div className="c-card">
        <span>
                Lorem Ipsum
            </span>
            <span>
                Lorem Ipsum
            </span>
            <span>
                Lorem Ipsum is simply dummmy text of the<br/>
                printing and typesetting industry. Lorem<br/>
                Ipsum has been the industry's standard <br/>
                 dummy text ever since the 1500s,  
            </span>
            <span>
                Read more
                <img src={Arrow} alt="" />
            </span>
        </div>
        <div className="c-card c-4">
        <span>
                Lorem Ipsum
            </span>
            <span>
                Lorem Ipsum
            </span>
            <span>
                Lorem Ipsum is simply dummmy text of the<br/>
                printing and typesetting industry. Lorem<br/>
                Ipsum has been the industry's standard <br/>
                 dummy text ever since the 1500s,  
            </span>
            <span>
                Read more
                <img src={Arrow} alt="" />
            </span>
        </div>
      </div>
    </div>
  )
}

export default Card
