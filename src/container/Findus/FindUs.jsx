
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { React, useState } from 'react';
import { Container } from 'react-bootstrap';
import {BiWindowClose} from "react-icons/bi";
import {IoMdCall} from "react-icons/io";

const FindUs = () => {
  const [showForm, setShowForm] = useState(false);
  return (
   
  <div className="app__bg app__wrapper section__padding " id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Getting in touch" />
    
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <h2 className='p__cormorant ' style={{ marginBottom: '1rem' }} > < IoMdCall /> (786) 471-7917  </h2>
      <div className="app__wrapper-content">
        <p className="p__opensans">8590 SW 8th St MIAMI, FL 33144</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Monday through Sunday: 10:00 am - 10:00 pm</p>
      
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={() => setShowForm(!showForm)}> 
      {showForm ?   < BiWindowClose  fontSize={30} /> : "Contact Us"}
      </button>
      {showForm && <form
            className="flex ml-4 flex-col max-w-[600px] h-full w-full mb-4 "
            action="https://getform.io/f/dfebe42a-5c9d-4a8a-bcd2-487a68af6c5f"
            method="POST"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <div className="pb-0 mt-0 ">
             
              <p className="py-4 p__cormorant">Drop us a line! </p>
            </div>
            <input
              className=" my-4 py-1 p-2 border-2 rounded-md border-[#605022]"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
        
            <input
              className="my-6 p-2 rounded-md border-2 border-[#605022] "
              type="email"
              name="email"
              placeholder="Email"
              required
            />
           
            <input
              className="my-4 p-8  border-2 border-[#605022] rounded-md"
              type="text"
              rows="10"
              name="message"
              required
              placeholder="Message"
            />
          
            {/* <div pt-8 text-center> */}
            <button type="submit" className="custom__button" style={{ marginTop: '2rem' }}
            > Send message
              
            </button>
            {/* </div> */}
          </form> }

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
)
  }

export default FindUs;