import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
     <a href='#' className='footer_logo'>Bhargav Hegde</a>

     <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
     </ul>
     <div className='footer_socials'>
      <a href='https://www.facebook.com/bhargav.hegde.9843'> <BsFacebook/></a>
      <a href='https://instagram.com/i__am_bhargav/'><BsInstagram/></a>
      <a href='https://twitter.com'><AiOutlineTwitter/></a>
     </div>

     <div className='footer_copyright'>
      <small>&copy; Bhargav Hegde. All rights reserved</small>
     </div>
    </footer>
  )
}

export default Footer