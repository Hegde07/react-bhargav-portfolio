import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dlpu4nl', 'template_kjdj0pz', form.current, 'dTW4UmX-o-OsL0p-8')
     e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMailOutline className='contact_option-icon' />
            <h4>Email</h4>
            <h5>hegdebhargav92@gmail.com</h5>
            <a href='mailto:hegdebhargav92@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger className='contact_option-icon' />
            <h4>Messanger</h4>
            <h5>Bhargav Hegde</h5>
            <a href='https://facebook.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon' />
            <h4>Whats app</h4>
            <h5>+91-9480615851</h5>
            <a href='https://api.whatsapp.com/send?phone+919480615851' target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}> 
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact