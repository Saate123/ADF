import React from 'react'
import pix from '../Assets/family.jpg'
import dp from '../Assets/image3.jpg'
import dp2 from '../Assets/image4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay  } from "swiper/modules"; // Correct module imports
import "swiper/css";
import "swiper/css/navigation";
import LazyLoad from 'react-lazyload';


const Testimonial = [
  {
    id: 1,
    image: dp2,
    name: "Chinedu O., USA",
    title: "A Seamless Homeownership Journey",
    desc: "African Diaspora Property Limited made my dream of owning a home in Nigeria a reality. Their team guided me through every step, ensuring a smooth and transparent process. I now own a beautiful property without stress!",
  },
  {
    id: 2,
    image: dp,
    name: "Aisha M., UK",
    title: "Trustworthy and Professional Service",
    desc: "I was initially skeptical about investing in real estate from abroad, but African Diaspora Property Limited exceeded my expectations. Their professionalism and expertise reassured me, and I successfully acquired a home for my family in Lagos.",
  },
  {
    id: 3,
    image: dp2,
    name: "Kwame A., Canada",
    title: "Reliable and Hassle-Free Process",
    desc: "As someone in the diaspora, I struggled to find a reliable property service. African Diaspora Property Limited not only provided great options but also handled everything with integrity. I highly recommend them to anyone looking for a stress-free home-buying experience!",
  },
  {
    id: 4,
    image: dp,
    name: "Fatou S., France",
    title: "Investing Made Easy and Secure",
    desc: "I had always wanted to invest in Nigerian real estate but was unsure where to start. African Diaspora Property Limited provided expert guidance, legal assurance, and access to great properties. Now, I own a secure investment with high returns!",
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