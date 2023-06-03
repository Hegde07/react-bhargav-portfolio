import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
      
      const data=[
          {
            avatar:AVTR1,
            Name:'Tina Show',
            review:'Lorem ipsum dolor sit amet. '
          },
          {
            avatar:AVTR2,
            Name:'Shatta Nale',
            review:'Lorem ipsum dolor sit amet. '
          },
          {
            avatar:AVTR3,
            Name:'Naveen Naik',
            review:'Lorem ipsum dolor sit amet. '
          },
          {
            avatar:AVTR4,
            Name:'Ravi Shastri',
            review:'Lorem ipsum dolor sit amet. '
          },
          

      ]

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
       {
        data.map(({avatar,Name,review},index)=>{
          return(
          <SwiperSlide key={index} className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar} alt='avatar one'/>
          </div>
          <h5 className='client_name'>{Name}</h5>
           <small className='client_review'>
             {review}
           </small>
         </SwiperSlide> 
         )
        })
       }  
      </Swiper>
    </section>
  )
}

export default Testimonials