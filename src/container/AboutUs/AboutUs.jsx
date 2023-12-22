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
        <p className="p__opensans" style={{ textTransform: "none" }}>
          Welcome to Tasty Maria where your taste buds take a delicious
          journey through the flavors of the sea! Our food truck business
          specializes in serving up an array of mouthwatering seafood dishes
          that are sure to satisfy your cravings. From crispy and golden fried
          seafood to succulent fried meats, flavorful sandwiches, and hearty
          bowls, our diverse menu offers something for every palate. Whether
          you're in the mood for a classic fish and chips, a hearty seafood
          sandwich, or a customized seafood bowl, Seaside Bites has got you
          covered. Join us on a culinary adventure that brings the essence of
          the coast right to your doorstep, and experience the taste of the
          ocean in every delectable bite!
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
