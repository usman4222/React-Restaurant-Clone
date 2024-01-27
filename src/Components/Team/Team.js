import React, { Fragment, useEffect, useRef, useState } from 'react';
import './Team.css';
import img8 from '../../assests/img8.png';
import img9 from '../../assests/img9.png';
import img10 from '../../assests/img10.png';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import Scrollspy from 'react-scrollspy';

const Team = () => {
  const teamRef = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const teamElement = teamRef.current;

      if (teamElement) {
        const teamRect = teamElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (teamRect.top < windowHeight / 2 && !animate) {
          const aboutBoxes = teamElement.querySelectorAll('.about-box');
          aboutBoxes.forEach((box) => {
            box.classList.add('animate');
          });

          setAnimate(true);
        } else if (teamRect.top >= windowHeight / 2 && animate) {
          setAnimate(false);
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animate]);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="container" ref={teamRef}>
          <div className="row about-row">
            <div className="about-heading">
              <h2>Our Team</h2>
              <p>
                Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo
                ullamcorper a lacus vestibulum sed arcu non. Magna ac placerat
                vestibulum lectus mauris.
              </p>
            </div>
            <Scrollspy items={['member1', 'member2', 'member3']} currentClassName="is-current">
              <div className="all-members row">
                <div className="col-lg-4 col-md-6 col-sm-12 about-box" id="member1">
                  <div className="about-content animate">
                    <div className="our-team">
                      <img src={img8} alt="Team Member 1" />
                    </div>
                    <h4>Kevin Adamson</h4>
                    <p>Pellentesque adipiscing commodo elit at imperdiet dui.</p>
                    <div className="icon">
                      <PiFacebookLogoBold size={37} />
                      <FaInstagram size={33} />
                      <FaXTwitter size={33} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 about-box" id="member2">
                  <div className="about-content animate">
                    <div className="our-team">
                      <img src={img9} alt="Team Member 2" />
                    </div>
                    <h4>Roxie Gilbert</h4>
                    <p>Pellentesque adipiscing commodo elit at imperdiet dui.</p>
                    <div className="icon">
                      <PiFacebookLogoBold size={37} />
                      <FaInstagram size={33} />
                      <FaXTwitter size={33} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 about-box" id="member3">
                  <div className="about-content animate">
                    <div className="our-team">
                      <img src={img10} alt="Team Member 3" />
                    </div>
                    <h4>Roxie Gilbert</h4>
                    <p>At erat pellentesque adipiscing commodo elit..</p>
                    <div className="icon">
                      <PiFacebookLogoBold size={37} />
                      <FaInstagram size={33} />
                      <FaXTwitter size={33} />
                    </div>
                  </div>
                </div>
              </div>
            </Scrollspy>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
