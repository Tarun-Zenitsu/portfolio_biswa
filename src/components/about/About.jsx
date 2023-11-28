import React from 'react'
import './about.css'
import Me from '../../assets/aboutme.jpeg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineProject} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Major Project</small>
            </article>

            <article className='about_card'>
              <AiOutlineProject className='about_icon'/>
              <h5>Projects</h5>
              <small>30+ Overall Project</small>
            </article>
          </div>
          <p>In the beginning of my journey as Web developer, I have learnt latest technology to build amazing Apps and websites. Learnt various knowledge regarding web development from experienced professionals. As an Engineer I am always confident and curious to solve real world problems.</p>
          <a href="https://www.linkedin.com/in/tarunakanta-kumbhar-5775a4201/" target="_blank" className='btn btn-primary '>Let's Talk </a>
        </div>
      </div>
    
    </section>
  )
}

export default About