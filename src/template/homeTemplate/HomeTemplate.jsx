import React from 'react'
import { Outlet } from 'react-router-dom'
import BackToTop from '../../components/global/BackToTop'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'

const HomeTemplate = () => {


  return (
    <div className='relative'>
        <Header/>
        <Outlet/>
        <Footer/>
        <BackToTop />
    </div>
  )
}

export default HomeTemplate