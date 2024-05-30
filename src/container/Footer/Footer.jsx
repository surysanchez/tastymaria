import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import {IoMdCall} from "react-icons/io";
import {
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import { FooterOverlay} from '../../components';
import { images } from '../../constants';
import './Footer.css';
import  {useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 


const Footer = () => {

  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  
 
  return (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"></p>
        <h4 className='p__cormorant ' >(786) 471-7917 </h4>
        <p className="p__opensans" style={{textTransform:'lowercase'}}>tastymaria1@gmail.com</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logotasty} style={{borderRadius:'15%'}} alt="footer_logo" />
        {/* <p className="p__opensans">&quot;&quot;</p> */}
        <p></p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon'/>
  

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans"> Tasty Maria &copy; 2023 All Rights reserved.</p>
    </div>
    <MDBBtn
        onClick={backToTop}
        id='btn-back-to-top'
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "none",
        }}
        className='btn-floating'
        color='danger'
        size='sm'>
        <MDBIcon fas icon="arrow-up" />
      </MDBBtn>
  </div>
)};

export default Footer;
