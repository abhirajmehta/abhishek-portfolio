import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
<meta charset="UTF-8"></meta>

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Abhishek Mehta</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/abhishekmehtag/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>❤️ Be Kind | Be Happy ❤️</small>
      </div>
    </footer>
  )
}

export default Footer