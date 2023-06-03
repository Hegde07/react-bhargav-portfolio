import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            {/* <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Frameworks</h5>
              <small>1</small>
            </article> */}
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            Innovative web developer with 1 year experience building and maintaining responsive websites in the
            healthcare industry. Proficient in HTML, CSS, JavaScript and React js; plus modern libraries and
            frameworks.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About