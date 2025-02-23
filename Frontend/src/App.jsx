import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Form from './components/Form'
import Footer from './components/Footer'



const App = () => {
 
  return (
    <div className=''>
       <Navbar></Navbar>
       <Hero></Hero>
       <About></About>
       <Projects></Projects>
       <Form></Form>
       <Footer></Footer>
    </div>
  )
}

export default App