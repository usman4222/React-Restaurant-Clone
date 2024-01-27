import React, { Fragment } from 'react'
import img from '../../assests/img7.png'
import './About.css'
import Team from '../Team/Team'
import Quick from '../Quick/Quick'

const About = () => {
    return (
        <Fragment>
            <Quick/>
            <div className='container-fluid about-main'>
                <div className='container'>
                    <div className='row about-r1'>
                        <div className='col-lg-6 about-b1'>
                            <div className='about-b1-content'>
                                <img src={img} />
                            </div>
                        </div>
                        <div className='col-lg-6 about-b1'>
                            <div className='about1-content'>
                                <h2>Our mission is to save you time</h2>
                                <p>Viverra vitae congue eu consequat ac felis.
                                    Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
                                    Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.</p>
                                <p>Eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt augue interdum velit euismod in pellentesque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Team />
        </Fragment>
    )
}

export default About
