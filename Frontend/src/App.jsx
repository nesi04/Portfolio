import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Form from './components/Form'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn'
import Admin from './components/Admin'
import AdminProjects from './components/AdminProjects'
import AdminMessage from './components/AdminMessage'



const App = () => {
 
  return (
    
    <Routes>
      <Route path='/admin/login' element={<SignIn></SignIn>}></Route>
      <Route path='/admin' element={<Admin></Admin>}></Route>
      <Route path='/admin/messages' element={<AdminMessage></AdminMessage>}></Route>
      <Route path='/admin/projects' element={<AdminProjects></AdminProjects>}></Route>
      <Route path='/' element={
         <div className=''>
         <Navbar></Navbar>
         <Hero></Hero>
         <About></About>
         <Projects></Projects>
         <Form></Form>
         <Footer></Footer>
      </div>
      }></Route>
   
    </Routes>
    
  )
}

export default App