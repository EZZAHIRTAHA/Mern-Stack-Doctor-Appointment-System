import { useEffect, useState } from 'react'
import akdital from '/images/akdital.png'
import toast from 'react-hot-toast'
import { Close, Logout, MenuBar, Notification, Off, User } from '../assets/icons'
import axios from 'axios'
import { logoutButton } from '../assets/classes'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = ({user}) => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const navigate = useNavigate()


    const handleToggle = () => {
      setNavbarOpen(!navbarOpen)
    }


    const handleLogout = () => {
        localStorage.removeItem('token')
        toast.success('Logout successful')
        // window.location.href = '/login'
        navigate('/login')
    }

    const clearLocalStorage = () => {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

  return (
    

<nav className="bg-[#041c29] border-gray-200  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 transition">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={akdital} className="w-[9rem]  h-full" alt="Flowbite Logo" />
    </a>
    <button onClick={handleToggle}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 outline-none   dark:text-gray-400 dark:hover:bg-gray-700 ">
        <span className="sr-only">Open main menu</span>
        {!navbarOpen ? <MenuBar className='text-2xl'/> : <Close className='text-2xl'/>}
    </button>
    {/* Responsive navbar */}
              {navbarOpen && (
            <div className="w-full md:hidden    " >
              <ul className="font-medium flex  justify-start items-center gap-4 flex-col p-4 mt-4 bg-gray-800">
                <li className=''>
                  <button
                    onClick={handleLogout}
                    className=" py-2 px-3 text-white rounded bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring flex justify-center items-center gap-2 focus:border-blue-300 transition duration-300"
                    aria-current="page"
                  >
                    Logout <Logout className='text-2xl '/>
                  </button>
                </li>
                <li className='text-white uppercase underline font-light text-md tracking-widest'>
                    {user.username}
                </li>
                <li className='text-white flex justify-center items-center p-3 bg-logo rounded-full cursor-pointer'>
                    <Notification className='text-2xl text-white hover:scale-125 duration-0 transition  '/>
                </li>
              </ul>
            </div>
            )}
    <div className="hidden w-full md:block md:w-auto" >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className='text-white flex justify-center items-center p-3 bg-logo rounded-full cursor-pointer'>
          <Notification className='text-2xl text-white hover:scale-125 duration-0 transition  '/>
        </li>
        <li className='text-white flex justify-center items-center gap-3 '>
          <Link to={'/profile'} className='text-white uppercase underline hover:no-underline font-light'>
            {user.username}
          </Link>
          {/* <User className='text-xl'/>   */}
        </li>
        <li>
          <button onClick={handleLogout} className={`${logoutButton} `}>
            Logout
            <Logout className='text-xl'/>
          </button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
