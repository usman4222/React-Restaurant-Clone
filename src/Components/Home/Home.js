import React, { Fragment } from 'react'
import img from '../../assests/img.png'
import './Home.css'
import Cards from '../Cards/Cards';
import News from '../News/News';

const Home = () => {

    return (
        <Fragment>
            <div className='container-fluid main1'>
                <div className='container sub-main1'>
                    <div className='row home main1-r1'>
                        <div className='col-lg-6 col-md-12 main1-r1-b1'>
                            <div className='b1-content'>
                                <div className='b1-heading'>
                                    <h1>The Best Restaurant Management System</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 main1-r1-b2'>
                            <div className='b2-content'>
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cards />
            <News />
        </Fragment>
    )
}

export default Home
