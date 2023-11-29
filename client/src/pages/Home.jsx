import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menuItem } from '../assets/menuItem';
import { FaBars } from 'react-icons/fa';
import logo from '/images/logo.png';
import axios from 'axios';
import Navbar from './Navbar';


const Home = () => {


  const baseUrl = "http://localhost:5000/api/user/get-user-info-by-id"


  const[isOpen ,setIsOpen] = useState(false);
    
  const toggle = () => setIsOpen (!isOpen);


  const getData = async() => {
    try {
      const res = await axios.post(baseUrl, {},  {
        headers : {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getData()
  }, []);
  
  return (
    <>
    <Navbar/>
    <div className="container text-sm ">
       <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar ">
           <div className="top_section">
            <Link to={'/'}>
               <img  className={`${!isOpen && 'hidden'} icon`} src={logo}/>
            </Link>
               <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <FaBars onClick={toggle}/>
               </div>
           </div>
           {
               menuItem.map((item, index)=>(
                   <NavLink to={item.path} key={index} className="link  rounded-none w-full" activeclassname="active">
                       <div className="icon flex items-center">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       <div className="">
                       </div>
                   </NavLink>
               ))
           }
       </div>
       
    </div>
    </>
);
} 

export default Home
