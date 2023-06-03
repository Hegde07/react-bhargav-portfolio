import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>

   <a href='https://www.linkedin.com/in/bhargav-hegde-472861207/' target='_blank'><BsLinkedin/></a>
   <a href='https://github.com/Hegde07/' target='_blank'><FaGithub/></a>
   <a href='https://instagram.com/i__am_bhargav/' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial