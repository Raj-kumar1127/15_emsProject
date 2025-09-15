import React from 'react'
import RoutePath from '../../routes/RoutePath'
import Navbar from '../navbar/Navbar'
import ShowEmp from '../showEmp/ShowEmp'
import Footer from '../footer/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <ShowEmp/>
        <Footer/>
    </div>
  )
}
