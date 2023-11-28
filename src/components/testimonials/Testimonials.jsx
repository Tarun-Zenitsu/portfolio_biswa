import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avater: Avt1,
    name: 'Biswambar Sambal',
    reviw: 'This is a wonderful opportunity for me to get connected at such a renowned company. Your organization will surely prove to be an excellent platform for me to establish my skills and knowledge in the corporate world. Even though I am a fresher, I assure you that I will give my best and work to my full potential so that I can contribute as much as I can towards the growth and welfare of this great company'
  },
  {
    avater: Avt2,
    name: 'Suvakant Routh',
    reviw: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, doloribus dignissimos quos omnis ab nemo modi quis aperiam ullam molestias.'
  },
  {
    avater: Avt3,
    name: 'Nithaniel Pradhan',
    reviw: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, doloribus dignissimos quos omnis ab nemo modi quis aperiam ullam molestias.'
  },
  {
    avater: Avt4,
    name: 'Trupti Bhoi',
    reviw: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, doloribus dignissimos quos omnis ab nemo modi quis aperiam ullam molestias.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' >
      <div className='spcefor'></div>
      <h5>It is just a Carousel</h5>
      <h2>Slides me</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
          data.map(({avater, name, reviw}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avater} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{reviw}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials