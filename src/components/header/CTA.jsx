import React from 'react'
import CV from '../../assets/Abhishek_Mehta.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume</a>
        <a href='#contact' className='btn btn-primary'>Connect</a>
    </div>
  )
}

export default CTA