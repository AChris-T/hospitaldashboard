import React from 'react'
import './Dashboard.css'
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { BugReport } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <div className="dashboard">
       <div className="headerCon">
        <h4>Hi, Welcome back</h4>
       </div>
       <div className="dashcontainer">
          <div className='dashcont'>
            <div className="dashIcons">
              <AdbOutlinedIcon className='dashIcon'/>
            </div>
            <h3>714K</h3>
            <h6>Weekly Sales</h6>
          </div>
          <div className='dashcont'>
          <div className="dashIcons2">
              <AppleIcon className='dashIcon'/>
            </div>
            <h3>1.35M</h3>
            <h6>New Users</h6>
          </div>
          <div className='dashcont'>
            <div className="dashIcons3">
              <WindowRoundedIcon className='dashIcon'/>
            </div>
            <h3>1.72M</h3>
            <span>Items order</span>
          </div>
          <div className='dashcont'>
           <div className="dashIcons4">
              <BugReport className='dashIcon'/>
            </div>
            <h3>234</h3>
            <span>Bug Report </span>
          </div>
       </div>
    </div>
  )
}

export default Dashboard