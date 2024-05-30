import React from 'react';
import Button from 'react-bootstrap/Button';

import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  return (
 <>
 
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Show Whole Menu
      </Button>

      <SpecialMenu
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    <Gallery />
    {/* <Intro /> */}
    <FindUs />
    <Footer />
  </div>
  </>
  )
}

export default App;
