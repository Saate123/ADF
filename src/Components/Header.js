import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import logo from '../Assets/ADPL 1.png'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import LazyLoad from 'react-lazyload';

const Header = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    // document.body.classList.toggle('no-scroll', !click);
    // document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

    

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };


  const [activeNav, setActiveNav] = useState('/')



  return (
    <header>
        <div className="h-first">
            <div>
                <Link to='/'><FaFacebook className='h-i'/></Link>
                <Link to='/'><IoLogoPinterest className='h-i'/></Link>
                <Link to='/'><FaInstagramSquare className='h-i'/></Link>
            </div>
        </div>

        <div className="h-second">
            <nav>
                <Link to='/'><LazyLoad><img src={logo} alt="" /></LazyLoad></Link>

                <div className='bars' onClick={handleClick}>
                  {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                </div>

                <ul className={click ? 'active' : 'menu'}>
                    <li onClick={closeMenuBar}><Link to='/about'>About Us</Link></li>
                    <li onClick={closeMenuBar}><a href='#faq'>FAQs</a></li>
                    <li onClick={closeMenuBar}><Link to='/form'>Follow-up Form</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header