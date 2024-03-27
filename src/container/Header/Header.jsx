import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { images } from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';
// import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <MDBCarousel showControls fade >
      <MDBCarouselItem itemId={1}>
        <img src={images.fish} className='d-block w-100 ' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2} className='img2'>
        <img  src={images.bowl} className='d-block w-100 ' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img   src={images.calamari} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </>
  )
};

export default Header;
