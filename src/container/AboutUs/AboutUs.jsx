import React from "react";
import Accordion from "react-bootstrap/Accordion";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.tm} alt="tm letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensansabout" style={{ textTransform: "none" }}>
          Welcome to Tasty Maria, your go-to spot for Latin-inspired seafood
          with a touch of Cuban flair! From savory salmon bowls to zesty
          sandwiches, we're here to satisfy your cravings with fresh ingredients
          and bold flavors. Join us for a taste of the sea with a Latin twist!  <br /> 
          <h4>  Call us: (786) 471-7917  </h4>
     8590 SW 8th St MIAMI, FL 33144
        </p>
      </div>
    
    </div>
  </div>
);

export default AboutUs;
