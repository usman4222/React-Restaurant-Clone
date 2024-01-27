import React, { Fragment } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import img from '../../assests/img11.png'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import './Contact.css'
import Map from '../Map/Map'

const Contact = () => {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row contact-row'>
                        <div className='col-lg-6 col-md-12 contact-box'>
                            <div className='contact-content'>
                                <h2>Contact us</h2>
                                <p>Egestas sed tempus urna et pharetra pharetra massa.
                                    Fermentum posuere urna nec tincidunt praesent semper.</p>
                                <div className='row contact-cards'>
                                    <div className='col-lg-4 col-md-6 col-sm-12 locate'>
                                        <div className='location'>
                                            <div className='icon'>
                                                <FaLocationDot size={37} />
                                            </div>
                                            <h6>1717 Harrison St, San Francisco, CA 94103</h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 loca'>
                                        <div className='email' >
                                            <div className='icon'>
                                                <IoIosMail size={37} />
                                            </div>
                                            <h6>quick.info@mail.net Lorem ipsum dolor sit.</h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 locat'>
                                        <div className='phone'>
                                            <div className='icon'>
                                                <FaPhoneAlt size={37} />
                                            </div>
                                            <h6>+1 425 326 16 27 </h6>
                                            <h6>+1 425 326 16 27</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 contact-box1'>
                            <div className='contact-img'>
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Map/>
        </Fragment>
    )
}

export default Contact
