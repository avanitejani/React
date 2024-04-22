import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export const Home = () => {
  return (
      <>
      
          <Header/>
          <Outlet/>
          <Footer/>

      </>
  )
}
