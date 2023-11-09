import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Vision from '../pages/Vision'
import Teams from '../pages/Teams'
import Events from '../pages/Events'
import Upcoming from '../pages/Upcoming'
import { UpcomingData } from '../Data/Upcoming'
import Navbar from '../components/Navbar';
import Footer from '../pages/Footer'
const Layout = () => {
  return (
    <div className='layout'>
        <Navbar />
        <Home />
        <About />
        <Vision />
        <Events />
        {UpcomingData.length > 0 ? <Upcoming /> : " "}
        <Teams />
        <Footer />
    </div>
  )
}

export default Layout