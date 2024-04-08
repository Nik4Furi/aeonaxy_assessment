import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Toaster from 'react-hot-toast'

//Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import VerifyUser from './pages/VerifyUser'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <>
      <BrowserRouter >

        <Routes >
          {/* Home/Secret Page  */}
          <Route path='/' element={<Layout> <Home /> </Layout> } ></Route>

          {/* Verify/User Page  */}
          <Route path='/verifyUser' element={<Layout> <VerifyUser /></Layout>} ></Route>

          {/* Register Page  */}
          <Route path='/register' element={<Register />} ></Route>

          {/* Login Page  */}
          <Route path='/login' element={<Login />} ></Route>

        </Routes>

        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
