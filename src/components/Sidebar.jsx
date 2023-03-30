import React from 'react'
import logo from "../assests/logo.png"
import avatar from '../assests/avatar.png'
import './sidebar.css'
import profile from '../assests/joy.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { NavLink } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ArticleIcon from '@mui/icons-material/Article';
import ErrorIcon from '@mui/icons-material/Error';

const Sidebar = () => {
  const navLinkStyle =({ isActive}) => {
    return{
      backgroundColor: isActive ? 'rgba(218, 216, 216, 0.588)' : false,
      color: isActive ? 'black' :false,
    }
  }

  return (
    <div className='sidebar'>
      <div className="barmenu">
      {/*----------------------Profile Details----------------------*/}
        <div className="barimg">
          <img src={logo} alt="logo" className='images'/>
        </div>
        <div className="barprofiles">
            <div className="barprofile">
              <img src={profile} alt="profile" style={{width:'50px'}}/>
              <span>Jaydon Frankie</span>
            </div>
        </div>
        {/*-----------------------------List------------------------*/}
        <div className="list">
          <NavLink to='/dashboard' className="menulist" style={navLinkStyle}>
            <DashboardIcon className='icons' style={{fontSize:'18px', color:"rgb(58, 58, 58)", marginRight:'10px'}}/>
            <h3>Dashboard</h3>
          </NavLink>
          <NavLink to='/user' className="menulist" style={navLinkStyle}>
            <AccountBoxIcon className='icons'style={{fontSize:'18px', color:"rgb(58, 58, 58)", marginRight:'10px'}}/>
            <h3>User</h3>
          </NavLink>
          <NavLink to='/product' className="menulist" style={navLinkStyle}>
            <AddShoppingCartRoundedIcon className='icons' style={{fontSize:'18px', color:"rgb(58, 58, 58)", marginRight:'10px'}}/>
            <h3>Product</h3>
          </NavLink>
          <NavLink to='/blog' className="menulist" style={navLinkStyle}>
            <ArticleIcon className='icons' style={{fontSize:'18px', color:"rgb(58, 58, 58)", marginRight:'10px'}}/>
            <h3>Blog</h3>
          </NavLink>
          <NavLink to='/login' className="menulist" style={navLinkStyle}>
            <LogoutRoundedIcon className='icons' style={{fontSize:'18px', color:"rgb(58, 58, 58)", marginRight:'10px'}}/>
            <h3>Logout</h3>
          </NavLink>
          <NavLink to='/error' className="menulist" style={navLinkStyle}>
            <ErrorIcon className='icons' style={{fontSize:'18px', color:"rgb(58, 58, 58)", marginRight:'10px'}}/>
            <h3>Page Not Found</h3>
          </NavLink>
          </div>
          {/*-----------------------foot------------------------------------------------*/}
          <div className="menufoots">
            <div className="menuifoot">
              <img src={avatar} alt="avatar" className='menuimage'/>
              <div className="upgrade">
              <span className='get'>Get more?</span>
              <span className='price'>From only $69</span>
              </div>
              <a href="/" className='btn'> Upgrade To Pro </a>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Sidebar