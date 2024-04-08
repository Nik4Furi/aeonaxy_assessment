import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
      {/* Navbar Component  */}
      <Navbar />

        {children}

    </>
  )
}

export default Layout
