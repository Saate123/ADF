import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Correct module imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LuLocateFixed } from "react-icons/lu";
import { Link } from "react-router-dom";
import pix from "../Assets/Frame 2072.png";
import LazyLoad from 'react-lazyload';

const propertiesList = [
  {
    id: 1,
    image: pix,
    title: "Tranquil Haven in the Woods",
    location: "South England",
  },
  {
    id: 2,
    image: pix,
    title: "Modern Apartment in the City",
    location: "Central London",
  },
  {
    id: 3,
    image: pix,
    title: "Cozy Cottage Near the Lake",
    location: "Lake District",
  },
  {
    id: 4,
    image: pix,
    title: "Spacious Villa with a Pool",
    location: "Cornwall",
  },
];

const Properties = () => {
  return (
    <div className="properties">
      <div className="props">
        <div>
          <h4>CHECKOUT OUR NEW LISTED PROPERTIES</h4>
          <p>
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh.
          </p>
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
