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
              <h5>Senior System Engineer 2.5 Year</h5>
              <small>Infosys (Currently Serving)</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>SDE Intern 6M</h5>
              <small>Taikisha Engineering India Pvt Ltd</small>
            </article>
          </div>

          <p>Hello there! How are you? Here, I have listed down a few things about myself. Where do I work, what do I do, and what I have done till now. Apart from this, there are many more sides to me. I like Art. When I was little, I used to draw, then I shifted to music, and started producing music. As I grew up, my interest also grew towards the world, because of which, I read a lot about philosophy, psychology, self-help, and a little bit of history.  Now a days, I also write. Not a typical journal guy but I do often write. You can consider me an explorer,  well, sort of, and I like to see things as if they are stories. And, as Einstein said, "The most important question any man must decide for himself is whether or not he lives in a friendly or a hostile universe",  I believe, we Humans are the ultimate adaptation machines, and we can do wonders. That said, if you think I have anything to offer, just let me know.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About