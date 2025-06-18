import React from 'react';
import './proj.css';
import Mockimg from '../../assets/projects/mock.png'


const Proj = () => {
  return (
    <div className='proj-container'>
      <div className="proj-img-container">
        <img src={Mockimg} alt="" srcset="" />
      </div>
      <div className="proj-details-container">
        <h2 className='proj-title'> PROJECT 1</h2>
        <p className='proj-type'>Category</p>
      </div>
    </div>
  )
}

export default Proj