import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { Toaster } from 'react-hot-toast'
import { Spinner } from './assets/icons'
import { useSelector } from 'react-redux'

const App = () => {

  const loading = useSelector(state => state.alerts.loading)

  return (
    <>
    { <div className="h-[100%] w-[100%] fixed top-0 left-0 z-[9999] flex justify-center items-center bg-[#000] opacity-25">
      <Spinner
        className='text-4xl  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
      />
    </div>}
      <Toaster
        position="top-center"
        reverseOrder={false}
        duration={4000}
      />
      <Routes>
        
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        
      </Routes>
    </>
  )
}

export default App
