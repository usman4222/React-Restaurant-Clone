import React, { Fragment } from 'react'
import img from '../../assests/img12.jpg'
import './Quick.css'

const Quick = () => {
  return (
    <Fragment>
        <div className='container-fluid quick-main'>
            <div className='container'>
                <div className='row quick-row'>
                    <div className='col-lg-6 col-sm-12 quick-b1'>
                        <div className='quick-content'>
                            <h2>Nothing to worry about with Quickeat</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <div className='quick-b2'>
                            <div className='line'>
                                <div className='quick-img'>
                                    <img src={img}/>
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

export default Quick
