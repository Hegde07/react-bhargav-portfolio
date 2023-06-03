import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
    <div className=' container header_container'>
      <h5>Hello  I'm</h5>
      <h1>Bhargav Hegde</h1>
      <h5 className='text-light'>Software Developer</h5>
      <CTA/>
      <HeaderSocial/>
      <div className='me'>
      <img src={ME} className='img' height='400px' alt=''></img>
      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header