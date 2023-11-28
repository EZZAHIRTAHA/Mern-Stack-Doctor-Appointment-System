import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
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
