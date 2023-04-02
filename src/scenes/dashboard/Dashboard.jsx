import React from 'react'
import './Dashboard.css'
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { BugReport } from '@mui/icons-material';
import Box from '@mui/material/Box';
import LineCharts from '../../components/LineCharts';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart'
import Radia from '../../components/Radia';


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
       {/*--------------------Graph-----------------------*/}
       <div className="chartBox">
       <div className='chartscont'>
       <Box className='boxChart'
         sx={{
         backgroundColor: 'background.paper', 
        }}
        >
        <div className='chartdetails'>
            <h4>Website Visits</h4>
            <span>(+43%) than last year</span>
        </div>
        <LineCharts/>
         </Box>
         <Box className='boxCharts'
         sx={{ 
         backgroundColor: 'background.paper', 
        }}
        >
        <div className='chartdetails'>
            <h4 style={{marginBottom:"60px",marginTop:"20px" ,marginLeft:'20px'}}>Current Visits
            </h4> 
        </div>
        <div className="piechart">
            <PieChart/>
        </div>
         </Box>
       </div>
      <div className='chartscont'>
       <Box className='boxChart'
         sx={{
         backgroundColor: 'background.paper', 
        }}
        >
        <div className='chartdetails'>
            <h4>Conversion Rates</h4>
            <span>(+43%) than last year</span>
        </div>
        <BarChart/>
         </Box>
         <Box className='boxCharts'
         sx={{ 
         backgroundColor: 'background.paper', 
        }}
        >
        <div className='chartdetails'>
            <h4 style={{marginBottom:"60px",marginTop:"20px"}}>Current Subject</h4> 
        </div>
            <div className="piechart">
            <Radia/>
            </div>
         </Box>
      </div> 
      </div> 
     </div> 
  )
}

export default Dashboard