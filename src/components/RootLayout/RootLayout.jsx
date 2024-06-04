import React from 'react'
import './RootLayout.scss'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default RootLayout
