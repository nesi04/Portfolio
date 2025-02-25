import React from 'react'
import {Link} from 'react-router-dom'

const Admin = () => {
  return (
    <div className='flex flex-col py-20 justify-center items-center gap-14'> 
        <h1 className='text-4xl text-primary font-bold'>Welcome Admin ! What would you like to do ? </h1>
        <div className='flex gap-10 items-center justify-center text-2xl'>
        <Link to='/admin/projects'><button className='border-2 p-4 border-accent hover:border-primary-content hover:bg-accent transition-all duration-300 hover:text-secondary hover:font-bold'> Update Projects</button></Link>
        <Link to='/admin/messages'><button className='border-2 p-4 border-secondary hover:border-primary hover:bg-secondary transition-all duration-300  hover:font-bold'>See Messages</button></Link>
        </div>
    </div>
  )
}

export default Admin