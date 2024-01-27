import React, { Fragment } from 'react'
import './Map.css'

const Map = () => {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row map-row'>
                        <div className='map-box'>
                            <div className='row '>
                                <div className='col-lg-6'>
                                    <div className='map-content'>
                                        <h2>Get in touch with us</h2>
                                        <p>Magna sit amet purus gravida quis blandit turpis cursus.
                                            Venenatis tellus in metus vulputate eu scelerisque felis.</p>
                                        <div className='inputs'>
                                            <input type='text' placeholder='Enter Your Name' />
                                            <input type='text' placeholder='Enter Your Email' />
                                            <textarea type='text' placeholder='Enter Your Message' />
                                        </div>
                                        <div className='map-btn'>
                                            <button>Submit Application</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 map-b2'>
                                    <div className='fullmap'>
                                        <iframe
                                            title="Your Restaurant Location"
                                            width="100%"
                                            height="555"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR_MAP_PIN_COORDINATES!2sYOUR_RESTAURANT_NAME!5e0!3m2!1sen!2sus!4vYOUR_MAP_VERSION"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Map
