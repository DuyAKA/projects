import React from 'react'
import personImage from '../assets/personimage.png';

const Introduction = () => {
  return (
    <>
    <div className='intro'>
    <div className='intro-left'>
        <h1>Hi, I'm Nguyen Truong Duy!</h1>
        <h2 className='frontend-dev-text'>Web Frontend Developer</h2>
        <h5 className='intro-left-title'>I'm a 4<sup>th</sup> year student of Computer Science major at Vietnamese-German University (VGU). Currently, I'm finding an internship or a fresher job at the position Front-end Web Developer. With the passionate about designing user interfaces (UI), my target is to create friendly and responsive webs to enhance user experiences (UX).</h5>
        <button type="button" className="intro-left-button btn btn-orange">Contact Me!</button>
    </div>

    <div className='intro-right'>
    <img src={personImage} alt="personal-image" />
    </div>

    </div>
    </>
  )
}

export default Introduction