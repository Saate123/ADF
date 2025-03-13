import React from 'react'
import { RiPhoneFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="c-l">
                <div className="c-l-c">
                    <h4>CONTACT</h4>

                    <div className="c-flex">
                        <div className="icon-c">
                            <RiPhoneFill className="c-i"/>
                        </div>

                        <div className="cont">
                            <h5>Phone Number</h5>
                            <p>087190 0616</p>
                        </div>
                    </div>

                    <div className="c-flex">
                        <div className="icon-c">
                            <MdOutlineMailOutline className="c-i"/>
                        </div>

                        <div className="cont">
                            <h5>Email Address</h5>
                            <p>info@africadisporasproperties.com</p>
                        </div>
                    </div>

                    <div className="c-flex">
                        <div className="icon-c">
                            <FaGlobe className="c-i"/>
                        </div>

                       

                        <div className="cont">
                            <h5>Office Address</h5>
                            <p> 3 Larkspur close, Newport PO30 2GG United Kingdom</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="c-r">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d169387.5646591193!2d6.490346463187439!3d5.3529305616158505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1737523136960!5m2!1sen!2sng" width="100%" height="100%" allowfullscreen="" style={{border:'none'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


        </div>
    </div>
  )
}

export default Contact