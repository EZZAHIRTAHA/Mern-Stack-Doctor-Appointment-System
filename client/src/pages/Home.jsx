import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { menuItem } from '../assets/menuItem';
import { FaBars } from 'react-icons/fa';
import logo from '/images/logo.png';
import axios from 'axios';
import Navbar from './Navbar';
import MakeAppointment from './MakeAppointment';
import ApplyDoctor from './ApplyDoctor';
import Profile from './Profile';
import { adminMenu } from '../assets/adminMenu';
import Doctors from './Doctors';
import Users from './Users';


const Home = () => {

  const [pathName, setPathName] = useState(window.location.pathname)

  const baseUrl = "http://localhost:5000/api/user/get-user-info-by-id"

  const [user, setUser] = useState('')

  const[isOpen ,setIsOpen] = useState(false);
    
  const toggle = () => setIsOpen (!isOpen);


  const itemsToBeRendered = user.isAdmin ? adminMenu : menuItem;

  const getData = async() => {
    try {
      const res = await axios.post(baseUrl, {},  {
        headers : {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(res.data);
      setUser(res.data.user)
    } catch (error) {
      console.log(error);
    }
  }


  // const reloadPage = () => {
  //   window.location.reload();
  // }

  // const getPagePath = () => {
  //   window.location.pathname
  // }

  // const handlePathChange = (pathName) => {
  //   setPathName(getPathName)
  //   console.log(pathName)
  // }



  useEffect(()=> {
    getData()
  }, []);
  
  return (
    <>
    <Navbar user={user}/>
    {/* {pathName} */}
    <div className="container text-sm sm:h-[120vw] h-[200vw]">
       <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar  transition ">
           <div className="top_section">
            <Link to={'/'}>
               <img  className={`${!isOpen && 'hidden'} icon`} src={logo}/>
            </Link>
               <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <FaBars onClick={toggle}/>
               </div>
           </div>
           {
               itemsToBeRendered.map((item, index)=>(
                   <NavLink to={item.path} key={index} className="link  rounded-none w-full" activeclassname="active">
                       <div className="icon flex items-center">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       <div className="">
                       </div>
                   </NavLink>
               ))
           }
       </div>
        <Routes>
            <Route path='appointements' element={<MakeAppointment />} />
            <Route path='apply-doctor' element={<ApplyDoctor />} />
            <Route path='profile' element={<Profile />} />
            <Route path='doctors' element={<Doctors />} />
            <Route path='users' element={<Users />} />
        </Routes>
      
    </div>
    </>
);
} 

export default Home
