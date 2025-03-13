import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import Services from '../Components/Services'
import About from '../Components/About'
import Properties from '../Components/Properties'
import Testimony from '../Components/Testimony'
import Contact from '../Components/Contact'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div>

        <div className="hero-s">
            <Header/>

            <div className="hero-content">
                <div className='h-text'>
                    <div className='help'>
                        <h2>Helping Africans in the Diaspora Find Their Dream Homes</h2>
                        <p>From property listings to mortgage support, we make home ownership easier.</p>

                    </div>

                    <div className='btns'>
                        <Link to='/form'><button>Make Enquiries</button></Link>
                        <Link to='/about'><button className='btn'>Learn more</button></Link>
                    </div>
                </div>
            </div>
        </div>

        <Services/>
        <About/>
        <Properties/>
        <Testimony/>
        <Contact/>
        <Faq/>
        <Footer/>
        
    </div>
  )
}

export default Homepage