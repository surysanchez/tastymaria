import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './SpecialMenu.css';
import Accordion from 'react-bootstrap/Accordion';

const SpecialMenu = () => {
  return (
  <div className='app__specialMenu flex__center section__padding' id='menu' >
    <div className='app__specialMenu-title'>
      <SubHeading title="Explore our unique and diverse dishes"  />
     <h1 className='headtext__cormorant'>Menu</h1>
    </div>

                                      {/*MENU */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Most Popular Fried or Grilled </p>
        <div className="app__specialMenu_menu_items">
        {data.friedfishes.map((friedfish, index) => (
            <MenuItem key={friedfish.title + index} title={friedfish.title} price={friedfish.price}  />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Sandwiches</p>
        <div className="app__specialMenu_menu_items">
          {data.sandwiches.map((sandwich, index) => (
            <MenuItem key={sandwich.title + index} title={sandwich.title} price={sandwich.price} tags={sandwich.tags} />
          ))}
        </div>
      </div>
    </div>

    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Show Menu</Accordion.Header>
        <Accordion.Body className='container-menu-img'>
          <img className='menu-img' src={images.tastymenu} alt= 'tastymenu' />
        </Accordion.Body>
        </Accordion.Item>
       </Accordion>

   
   
   
  
  </div>
  )
};

export default SpecialMenu;
