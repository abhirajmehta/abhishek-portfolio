import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Newton\'s Height (Android Application)',
    github: 'https://github.com/abhirajmehta/Newtons-Height-Android-',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Babel (Android Application)',
    github: 'https://github.com/abhirajmehta/Babel-Android-App',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Compressor (Algorithm)',
    github: 'https://github.com/abhirajmehta/Huffman-Coding-and-Decoding/tree/master/Huffman',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Data Structures (Implementation)',
    github: 'https://github.com/abhirajmehta/Data-Structures',
    demo: 'https://github.com'
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Crypto Currency Dashboard and financial visualization',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Crypto Currency Dashboard and financial visualization',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Personal Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio