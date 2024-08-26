import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header'>
    <h3 className='portfolio-text'>Personal Portfolio.</h3>
    <div className="social-media-icons">
        <a href="https://www.facebook.com/cena.duy/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/eagleladaibang/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/DuyAKA" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:duymonstar@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      </div>
  )
}

export default Header