import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Sidebar from './Sidebar';
import {useState} from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import US from "../assests/usa.png"
import profile from "../assests/joy.png"


const style = {
  position: 'absolute',
  top: '0%',
  left: '0%', 
  width: 280,
  height:700,
  bgcolor: 'background.paper',
  border: '2px solid #ffff',
  boxShadow: 2,
};

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = event => {
    setIsShown(current => !current);
  }

  return (
    <div className='navbar'>
      <div className="navcontainer">
          <div className="top">
          <div className="searchItems">
              {isShown && (
                <div className='searchItem'>
                    <div className="searchField">
                      <div className="inputs">
                          <SearchIcon className='inputicon'/>
                          <input type="text" placeholder="Search ...." />
                       </div>
                       <a href="/" className='searchbtn'>Search</a>
                    </div>
                </div>
              )} 
              <div className='searchdetails'>
              <div className="searchdetail">
                  <div className='searchIcondetails'>
                    <SearchIcon className='searchicon' onClick={handleClick}/>
                  </div>
                  <div className="searchdetailinfo"> 
                    <img src={US} alt="us" className='usImage'/>
                    <Badge badgeContent={4} color="secondary" style={{cursor:'pointer', marginRight:'20px'}}>
                    <NotificationsIcon color="action"  />
                    </Badge>
                    <img src={profile} alt="profile" className='profileImage' />
                  </div>
              </div> 
              </div>
           </div>
            <div onClick={handleOpen} className='navbtn'><MenuOpenIcon className='navbarIcon'/></div>
            <Modal
             open={open}
             onClose={handleClose}
            >
            <Box sx={style} onClick={handleClose}>
              <Typography>
                <Sidebar/>
              </Typography>
            </Box>
            </Modal>
      </div>
    </div>
    </div>
  )
}

export default Navbar