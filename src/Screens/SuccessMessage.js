import React from 'react'
import Footer from '../Components/Footer'
import pix from '../Assets/Frame 1272637916.png'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import logo from '../Assets/ADPL 1 1.png'
import LazyLoad from 'react-lazyload';

const SuccessMessage = () => {
  return (
    <div>
        <header>
            <div className="h-first">
                <div>
                    <Link to='/'>LOGIN</Link>
                    <Link to='/'><FaFacebook className='h-i'/></Link>
                    <Link to='/'><IoLogoPinterest className='h-i'/></Link>
                    <Link to='/'><FaInstagramSquare className='h-i'/></Link>
                </div>
            </div>

            <div className="h-second">
                <nav>
                    <Link to='/'><LazyLoad><img src={logo} alt="" /></LazyLoad></Link>

                    
                </nav>
            </div>
        </header>

        <div className="success">
            <div className="success-c">
                <img src={pix}alt="" />
                <h3>Your Information Have been Sent Successfully</h3>
                <p>Please check your email</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default SuccessMessage