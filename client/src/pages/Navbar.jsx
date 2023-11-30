import { useState } from 'react'
import akdital from '/images/akdital.png'
import toast from 'react-hot-toast'
import { Close, MenuBar } from '../assets/icons'



const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
      setNavbarOpen(!navbarOpen)
    }


    const handleLogout = () => {
        localStorage.removeItem('token')
        toast.success('Logout successful')
        window.location.href = '/login'
    }

  return (
    

<nav className="bg-[#041c29] border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={akdital} className="w-[9rem]  h-full" alt="Flowbite Logo" />
    </a>
    <button onClick={handleToggle}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 outline-none   dark:text-gray-400 dark:hover:bg-gray-700 ">
        <span className="sr-only">Open main menu</span>
        {!navbarOpen ? <MenuBar className='text-2xl'/> : <Close className='text-2xl'/>}
    </button>
              {navbarOpen && (
            <div className="w-full md:hidden" id="navbar-mobile">
              <ul className="font-medium flex flex-col p-4 mt-4 bg-gray-800">
                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                    aria-current="page"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <button onClick={handleLogout} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
