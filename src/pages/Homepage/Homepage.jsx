import React from 'react'
import Card from '../../components/Card'
import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='home-container'>
      <Card/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Homepage