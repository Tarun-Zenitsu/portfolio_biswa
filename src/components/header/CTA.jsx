import React from 'react'
import CV from '../../assets/Tarun_ResumeToR.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="https://www.linkedin.com/in/tarunakanta-kumbhar-5775a4201/" target="_blank" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA