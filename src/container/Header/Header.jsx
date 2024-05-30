import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { images } from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';
// import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
  <img src={images.collage} className='img-fluid shadow-4' alt='...' />

    {/* <MDBCarousel showControls fade fluid>
      <MDBCarouselItem itemId={1}>
        <img src={images.sandMinuta} className='d-block w-100 ' alt='...' />
      </MDBCarouselItem> */}
      {/* <MDBCarouselItem itemId={2} className='img2'>
        <img  src={images.bowl} className='d-block w-100 bowl ' alt='...' />
      </MDBCarouselItem> */}
      {/* <MDBCarouselItem itemId={3}>
        <img   src={images.front} className='d-block w-100' alt='...' />
      </MDBCarouselItem> */}
      {/* <MDBCarouselItem itemId={4}>
        <img   src={images.salmon} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img   src={images.foodFront} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel> */}
    </>
  )
};

export default Header;
