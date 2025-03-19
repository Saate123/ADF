import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/ADPL 1 1.png'
import { RiPhoneFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import LazyLoad from 'react-lazyload';

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="foot-c">
          <div className="f1">
            <LazyLoad>
              <img src={logo} alt="" />
            </LazyLoad>
            <p>
              Helping Africans in the Diaspora Find Their Dream Homes From
              property listings to mortgage support, we make home ownership
              easier.
            </p>
          </div>

          <div className="f2">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Listings</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
            </ul>
          </div>

          <div className="f2">
            <h4>Discovery</h4>

            <ul>
              <li>
                <Link to="">Benin city</Link>
              </li>
              <li>
                <Link to="">Abeokuta</Link>
              </li>
              <li>
                <Link to="">Akure</Link>
              </li>
              <li>
                <Link to="">Enugu</Link>
              </li>
            </ul>
          </div>

          <div className="f3">
            <h4>Follow Us on</h4>
            <div className="f-icons">
              <a href="">
                <FaFacebook className="f-i" />
              </a>
              <a href="">
                <IoLogoPinterest className="f-i" />
              </a>
              <a href="">
                <FaInstagramSquare className="f-i" />
              </a>
            </div>

            <div className="f-contacts">
              <a href="">
                <RiPhoneFill className="f-i" />
                <span>+2348158665957,</span>
                <span> +2348162836838</span>
              </a>
            </div>

            <div className="f-contacts">
              <a href="">
                <MdOutlineMailOutline className="f-i" />
                <span>support@rezilla.com</span>
              </a>
            </div>

            <div className="f-contacts">
              <a href="">
                <FaGlobe className="f-i" />
                <span>ADP junction, Airport road , Benin city Nigeria. </span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* <div className="links">
            <Link to="">Contact</Link>
            <Link to="">Terms and conditions</Link>
            <Link to="">Privacy policy</Link>
            <Link to="">Cookies policy</Link>
            <Link to="">Disclaimer</Link>
        </div> */}
    </div>
  );
}

export default Footer