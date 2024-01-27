import React, { Fragment, useEffect, useRef } from 'react';
import './Cards.css';
import img2 from '../../assests/img2.png';
import img3 from '../../assests/img3.png';
import img4 from '../../assests/img4.png';

const Cards = () => {
  const cardRefs = [useRef(), useRef(), useRef()];

  const handleScroll = () => {
    cardRefs.forEach((cardRef) => {
      const rect = cardRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        cardRef.current.classList.add('animated');
      }
    });
  };

  useEffect(() => {
    handleScroll(); 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row main2-r1'>
            <div className='main2-content'>
              <h2>How It Works</h2>
              <p>Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in<br />
                metus vulputate eu scelerisque felis.</p>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 main2-r1-b1 card-animation' ref={cardRefs[0]}>
              <div className='box-content'>
                <div>
                  <img src={img3} alt='Image 2' />
                </div>
                <div>
                  <div className='both'>
                    <span>01</span>
                    <h4>Select Package</h4>
                  </div>
                  <p>Non enim praesent elementum facilisis leo vel fringilla
                    . Lectus proin nibh nisl condimentum id.
                    Quis varius quam quisque id diam vel.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 main2-r1-b1 card-animation' ref={cardRefs[1]}>
              <div className='box-content'>
                <div>
                  <img src={img2} alt='Image 3' />
                </div>
                <div>
                  <div className='both'>
                    <span>02</span>
                    <h4>Choose Domain</h4>
                  </div>
                  <p>Non enim praesent elementum facilisis leo vel fringilla
                    . Lectus proin nibh nisl condimentum id.
                    Quis varius quam quisque id diam vel.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 main2-r1-b1 card-animation' ref={cardRefs[2]}>
              <div className='box-content'>
                <div>
                  <img src={img4} alt='Image 4' />
                </div>
                <div>
                  <div className='both'>
                    <span>03</span>
                    <h4>Start Growing</h4>
                  </div>
                  <p>Non enim praesent elementum facilisis leo vel fringilla
                    . Lectus proin nibh nisl condimentum id.
                    Quis varius quam quisque id diam vel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
