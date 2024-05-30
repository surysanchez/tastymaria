import {useState, React} from 'react';
import { SubHeading} from '../../components';
import { images } from '../../constants';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './SpecialMenu.css';

const SpecialMenu = () => {
  const [lgShow, setLgShow] = useState(false);
  
  return (
    <>
  <div className='app__specialMenu flex__center section__padding' id='menu' >
    <div className='app__specialMenu-title'>
      <SubHeading title="Explore our unique and diverse dishes"  />
     <h1 className='headtext__cormorant'>Menu</h1>
    </div>

                                      {/*MENU */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Our Popular Seafood Dishes </p>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.seashrimp} alt="menu img" />
      </div>

      <Button onClick={() => setLgShow(true)}>Show Whole Menu</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="" alt="" />
        </Modal.Body>
      </Modal>
      
    </div>
  </div>
  </>
  )
};



export default SpecialMenu;