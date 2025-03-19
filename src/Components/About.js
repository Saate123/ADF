import React from "react";
import pix from "../Assets/image 1.png";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const About = () => {
  return (
    <div>
      <div>
        <div className="serves about">
          <div className="s-txt">
            <h4>WHO WE ARE</h4>
            <h3>Making Home ownership Accessible and Affordable</h3>
            <p>
              Global diaspora Property limited registered in Nigeria with
              registrations in the UK and USA as African diaspora property
              limited. Team of professional in building with wide and good
              experience in the industry. Headed and controlled by management
              team based in the UK and in partnership with international
              development team to provide you the best.
            </p>

            <div className="ab-cards">
              <div className="s-card">
                <div className="ss">
                  <div>
                    <h5>Our Mission</h5>
                    <p>
                      To empower Africans in the diaspora by providing
                      accessible, reliable, and tailored real estate and
                      mortgage services that make homeownership a seamless
                      reality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="s-card">
                <div className="ss">
                  <div>
                    <h5>Our Vision</h5>
                    <p>
                      To become the leading real estate platform connecting
                      Africans in the diaspora to their dream homes, fostering a
                      sense of belonging and creating lasting value for
                      communities worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="s-img">
            <LazyLoad>
              <img src={pix} alt="" />
            </LazyLoad>
          </div>

          <div className="more">
            <Link to="/about">
              <h3>
                <IoArrowForwardOutline className="r-i" />
                Read More
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
