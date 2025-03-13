import React from 'react'
import pix from '../Assets/Rectangle 1.png'
import frame from '../Assets/Frame 2086.png'
import LazyLoad from 'react-lazyload';

const Services = () => {
  return (
    <div>
        <div className="serves serves1">
            <div className="s-img">
                <LazyLoad>
                    <img src={pix} alt="" />
                </LazyLoad>
            </div>
            
            <div className="s-txt">
                <h4>OUR SERVICES</h4>
                <h3>Assisting individuals in locating the appropriate homes.</h3>
                <p>IT NOT JUST THE HOME IT IS THE ENVIRONMENT.</p>

                <div className='s-card'>
                    <div className="ss">

                        <img src={frame} alt="" />
                        <div>
                            <h5>Property Listings</h5>
                            <p>Browse homes tailored to your needs.</p>
                        </div>
                    </div>

                </div>

                <div className='s-card'>
                    <div className="ss">
                        <img src={frame} alt="" />
                        
                        <div>
                            <h5>Mortgage Assistance</h5>
                            <p>Flexible mortgage options to simplify ownership</p>
                        </div>
                    </div>
                </div>


                <div className='s-card'>
                    <div className="ss">
                        <img src={frame} alt="" />
                        <div>
                            <h5>Personalized Support</h5>
                            <p>Expert guidance every step of the way.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Services