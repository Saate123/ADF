import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Correct module imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LuLocateFixed } from "react-icons/lu";
import { Link } from "react-router-dom";
import pix from "../Assets/proprty1.jpg";
import pix1 from "../Assets/proprty2.jpg";
import pix2 from "../Assets/proprty3.jpg";
import pix3 from "../Assets/proprty4.jpg";
import pix4 from "../Assets/proprty5.jpg";
import pix5 from "../Assets/proprty6.jpg";
import LazyLoad from 'react-lazyload';

const propertiesList = [
  {
    id: 1,
    image: pix,
    title: "4-Bedroom Duplex",
    location: "Benin City",
  },
  {
    id: 2,
    image: pix1,
    title: "5-Bedroom Terrance Apartment",
    location: "Benin City",
  },
  {
    id: 3,
    image: pix2,
    title: "Cozy Cottage Near the Lake",
    location: "Benin City",
  },
  {
    id: 4,
    image: pix3,
    title: "Cozy Cottage Near the Lake",
    location: "Benin City",
  },
  {
    id: 5,
    image: pix4,
    title: "Cozy Cottage Near the Lake",
    location: "Benin City",
  },
  {
    id: 6,
    image: pix5,
    title: "Cozy Cottage Near the Lake",
    location: "Benin City",
  },
];

const Properties = () => {
  return (
    <div className="properties">
      <div className="props">
        <div>
          <h4>CHECKOUT OUR NEW LISTED PROPERTIES</h4>
        </div>
        <label htmlFor="">
          <LuLocateFixed className="l-i" />
          <input type="search" placeholder="Search properties near me" />
        </label>
      </div>

      <div className="props-carousel">
      <Swiper
      className="custom-swiper"
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
            1024: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
        }}
        >
        {propertiesList.map((property) => (
            <SwiperSlide key={property.id} className="prop1">
              <LazyLoad>
                <img src={property.image} alt={property.title} />
              </LazyLoad>
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <div className="p-btns">
                  <Link to="">
                  <button>View Details</button>
                  </Link>
                  <Link to="/form">
                  <button className="p-btn">Enquire</button>
                  </Link>
              </div>
            </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        </Swiper>

      </div>
    </div>
  );
};

export default Properties;
