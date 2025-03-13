import React from 'react'
import pix from '../Assets/Hobby.png'
import dp from '../Assets/eastern-woman 1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay  } from "swiper/modules"; // Correct module imports
import "swiper/css";
import "swiper/css/navigation";
import LazyLoad from 'react-lazyload';


const Testimonial = [
    {
      id: 1,
      image: dp,
      name:'Artemisia Udinese',
      title: "Marketing Specialist",
      desc: "Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.",
    },
    {
      id: 2,
      image: dp,
      name:'Artemisia Udinese',
      title: "Marketing Specialist",
      desc: "Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.",
    },
    {
      id: 3,
      image: dp,
      name:'Artemisia Udinese',
      title: "Marketing Specialist",
      desc: "Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.",
    },
    {
      id: 4,
      image: dp,
      name:'Artemisia Udinese',
      title: "Marketing Specialist",
      desc: "Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.",
    },
  ];

const Testimony = () => {
  return (
    <div className='testimony'>
        <div className="test">
            <div className="test-l">
              <LazyLoad>
                  <img src={pix} alt="" />
                </LazyLoad>
                <p>Daypal made my life so much easier! I needed help with cleaning and laundry, and within minutes of posting my task, I got connected to a reliable helper. The process was seamless, and I loved how easy it was to schedule everything. Highly recommend for anyone looking to save time and reduce stress!</p>
            </div>

            <div className="test-r">

                <h4>TESTIMONIALS</h4>
                <h3>Look What Our Customers Say!</h3>

                <Swiper
                    className="custom-swiper"
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    breakpoints={{
                    1024: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                    }}
                >

                            {Testimonial.map((testimonial) => (
                                <SwiperSlide key={testimonial.id} className="test1">
                                    <p>{testimonial.desc}</p>
                                    <div className="dp-t">
                                        <img src={testimonial.image} alt="" />
                                        <div>
                                            <h5>{testimonial.name}</h5>
                                            <p>{testimonial.title}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                                
                    </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Testimony