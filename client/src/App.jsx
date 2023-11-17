import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, Register } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' /> 
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default App
