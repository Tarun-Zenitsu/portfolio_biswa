import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const headerSocial = () => {
  return (
    <div className='header_sodials'>
        <a href="https://www.linkedin.com/in/tarunakanta-kumbhar-5775a4201/" target= "_blank"><BsLinkedin/></a>
        <a href="https://github.com/Tarun-Zenitsu?tab=repositories" target= "_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/tarunakantakumbhar/" target= "_blank"><GrInstagram/></a>
    </div>
    
  )
}

export default headerSocial