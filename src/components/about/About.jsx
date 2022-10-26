import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import ME from '../../assets/me3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Know More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>B.Tech ECE</h5>
              <small>Savitribai Phule Pune University</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>System Engineer 1 Year</h5>
              <small>Infosys (Currently Serving)</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>SDE Intern 6M</h5>
              <small>Taikisha Engineering India Pvt Ltd</small>
            </article>
          </div>

          <p>Developer! For a few years now, I have chased this title. But depending upon who you are, it's you, who get's to decide who I am. If you think having a CS degree is all you need, then probably I am not your "Guy". But if you need somebody who has a purpose, who can bend a problem and mold it into a solution, you are at the right place! Here I have listed down a few things about myself. Where do I work, what do I do and what I have done till now. That said, if you think I have anything to offer, just let me know.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About