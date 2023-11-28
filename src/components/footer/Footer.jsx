import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer >
      <a href="#" className='footer_logo'>Thanks</a>
      {/* <ul className='permalinks'></ul>
      <li><a href="#"></a>Home</li>
      <li><a href="#"></a>About</li>
      <li><a href="#"></a>Porfolio</li>
      <li><a href="#"></a>Experience</li>
      <li><a href="#"></a>Testimonials</li>
      <li><a href="#"></a>contact</li> */}


      <div className="footer_section">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram"><BsInstagram/></a>
        <a href="https://instagram"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Thanks. All right reservice</small>
      </div>
    </footer>
  )
}

export default Footer