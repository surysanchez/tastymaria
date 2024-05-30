import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.friedfish,images.bowl, images.minuta, images.friedcalamari, images.tender, images.sandwich];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 350;
    } else {
      current.scrollLeft += 350;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Some of our clients favorites!!!</p>
        <button type="button" className="custom__button">
          <a  href="https://www.instagram.com/tasty_maria/?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank"
                  rel="noopener noreferrer"
                  alt="ig" >View More</a>
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" /> <a  href="https://www.instagram.com/tasty_maria/?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank"
                  rel="noopener noreferrer"
                  alt="ig" >
              <BsInstagram className="gallery__image-icon" /> </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;