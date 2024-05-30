
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <img src={images.logotasty} style={{borderRadius:'15%'}} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__cormorant"><a href="#home">Home</a></li>
        <li className="p__cormorant"><a href="#about">About</a></li>
        <li className="p__cormorant"><a href="#menu">Menu</a></li>
        <li className="p__cormorant"><a href="#contact">Contact</a></li>
      </ul>
     
      <MDBFooter className='text-center text-white app__footer-links_icons' >
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href="https://www.instagram.com/tasty_maria/?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank"
            rel="noopener noreferrer"
            alt="ig"
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
        <a href="#contact" className="p__cormorant">Catering</a>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;