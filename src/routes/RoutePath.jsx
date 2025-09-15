import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../component/hero/Home'
import About from '../component/about/About'
import Login from '../component/login/Login'
import Register from '../component/register/Register'
import AddEmp from '../component/addEmp/addEmp'
import UpdateEmp from '../component/updateEmp/UpdateEmp'


export default function RoutePath() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about-us' element={<About/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/register' element={<Register/>} /> 
            <Route path='/addEmp' element={<AddEmp/>} />
            <Route path='/updateEmp/:id' element={<UpdateEmp/>} /> 
        </Routes>
    </div>
  )
}
