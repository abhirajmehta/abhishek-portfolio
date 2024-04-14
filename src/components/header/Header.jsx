import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me5.jpg'
// import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return(
    <header>
        <div className="container header__container">
          
          <h5>Hello, I am</h5>
          <h1>Abhishek Mehta</h1>
          <h5 className="text-light">& I am a Human!</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#footer" className='scroll__down'>Scroll To End</a>

        </div>
    </header>
  )
}


export default Header