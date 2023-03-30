import React from 'react'
import './Home.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../../scenes/dashboard/Dashboard';
import User from '../../scenes/user/User';
import Index from '../../scenes/products/Index';
import Blog from '../../scenes/blog/Blog';

const Home = () => {
  return (
    <div className='home'>
        <div className="homecontainer">
           <Sidebar/>
        </div>
        <div className="infocontainer">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/product' element={<Index/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Home