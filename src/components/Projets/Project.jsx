import React from 'react'
import './Project.css'
import Gallery from '../../images/Gallery.jpg';
import Gallery2 from '../../images/Gallery2.jpg';
import Gallery3 from '../../images/Gallery3.jpg';
import Gallery4 from '../../images/Gallery4.jpg';
import Gallery5 from '../../images/Gallery5.jpg';
import Gallery6 from '../../images/Gallery6.jpg';


const Project = () => {
  return (
    <div className='p-intro'>
      <div className="p-top">
        <span>
            Our Recent Projects
        </span>
        <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
            
        </span>
        <span>
        industry.
        </span>
      </div>
      <div className="p-end">
        <div className="p-gallary_1">
          <span>
            <img src={Gallery} alt="" />
          </span>
          <span>
          <img src={Gallery2} alt="" />
          </span>
          <span>
          <img src={Gallery3} alt="" />
          </span>
        </div>
        <div className="p-gallary_2">
            <span>
            <img src={Gallery4} alt="" />
            </span>
            <span>
            <img src={Gallery5} alt="" />
            </span>
            <span>
            <img src={Gallery6} alt="" />
            </span>
        </div>
      </div>
    </div>
  )
}

export default Project
