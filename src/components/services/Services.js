import React from 'react'
import './Services.css'
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services' >
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services_container'>
      <article className='services'>
        <div className='services_head'>
          <h3>Google Analytics</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Tracking website data. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Audience analysis. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Conversion tracking. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>E-commerce tracking. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Real-time monitoring. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Integration with other Google products. </p>
          </li>
        </ul>
      </article>


      <article className='services'>
        <div className='services_head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Front-end Development. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Back-end Development. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Search Engine Optimization (SEO). </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Web Maintenance and Support. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Integration and Third-Party Services. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Custom Web Application Development. </p>
          </li>
        </ul>
      </article>



      <article className='services'>
        <div className='services_head'>
          <h3>Content Creation & Digital Marketing</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Visual Content Creation. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Search Engine Marketing (SEM). </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Social Media Marketing. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Email Marketing. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Online Advertising. </p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>Analytics and Reporting. </p>
          </li>
        </ul>
      </article>
    </div>
    </section >
  )
}

export default Services