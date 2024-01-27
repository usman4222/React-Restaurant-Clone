import React from 'react';
import './Footer.css';
import logo from '../../assests/logo.png';
import { FaArrowRight } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="container-fluid footer-main">
      <div className="container">
        <div className="row footer-row">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <div className="leftFooter">
                <img src={logo} alt="Logo" />
                <h2>The Best Restaurants in Your Home</h2>
                <p>
                  Vitae congue mauris rhoncus aenean. Enim nulla aliquet
                  porttitor lacus luctus accumsan tortor posuere. Tempus
                  egestas sed sed risus pretium quam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <div className="midFooter">
                <h4>MENU</h4>
                <a href="/" className="d-block mb-2">
                  Home
                  <FaArrowRight />
                </a>
                <a href="/" className="d-block mb-2">
                  About Us
                  <FaArrowRight />
                </a>
                <a href="/" className="d-block mb-2">
                  Contact Us
                  <FaArrowRight />
                </a>
                <a href="/" className="d-block">
                  Become an Owner
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rightFooter">
                <h4>Contact Us</h4>
                <p>
                  <FaLocationDot />
                  1717 Harrison St, San Francisco, CA 94103
                </p>
                <p>
                  <IoIosMail />
                  dummy@gmail.com
                </p>
                <p>
                  <FaPhoneAlt />
                  +1 234532 3423
                </p>
                <div className="icons">
                  <PiFacebookLogoBold size={30} />
                  <FaInstagram size={24} />
                  <FaXTwitter size={24} />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
