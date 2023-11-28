import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Tarunakanta Kumbhar</h1>
        <h5 className='text-light'>A Web Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="My image" />
        </div>

        <a href="#testimonials"className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header