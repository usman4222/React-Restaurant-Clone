import React, { Fragment } from 'react'
import img from '../../assests/img6.png'
import './News.css'

const News = () => {
  return (
    <Fragment>
      <div className='container-fluid news'>
        <div className='container'>
          <div className='row news-r1'>
            <div className='col-lg-6'>
              <div className='news-b1'>
                <img src={img}/>
              </div>
            </div>
            <div className='col-lg-6 news-b1'>
              <div className='news-content'>
                <h2>We Have Received An Award For The Quality Of Our Work</h2>
                <p>Donec adipiscing tristique risus nec feugiat in fermentum. 
                  Sapien eget mi proin sed libero. Et magnis dis parturient montes nascetur. 
                  Praesent semper feugiat nibh sed pulvinar proin gravida.</p>
                  <a className='button button-2'>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default News
