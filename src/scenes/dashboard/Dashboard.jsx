import React from 'react';
import './Dashboard.css';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { BugReport } from '@mui/icons-material';
import Box from '@mui/material/Box';
import LineCharts from '../../components/LineCharts';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart'
import Radia from '../../components/Radia'; 
import US from "../../assests/cover1.jpg";
import cover2 from "../../assests/cover_2.jpg";
import cover3 from "../../assests/cover_3.jpg";
import cover4 from "../../assests/cover_4.jpg";
import cover5 from "../../assests/cover_5.jpg";
import { ImFacebook } from "react-icons/im";
import {BsGoogle } from "react-icons/bs";
import {GrLinkedinOption } from "react-icons/gr";
import {GrTwitter } from "react-icons/gr";


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
       {/*-------------------------Graph----------------------------------------*/}
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
      {/*-------------------------------News Update--------------------------- */} 
        <div className='chartscont'>
          <Box className='boxChat'
            sx={{
            backgroundColor: 'background.paper', 
            }}
            >
            <div className='chartdetails'>
              <h4 style={{marginBottom:"30px",marginTop:"20px" ,marginLeft:'20px'}}>News Update</h4> 
            </div>
            <div className="newsinfos">
              <div className="newsinfo">
                 <div className="newsdetails">
                  <img src={US} alt="cover" className='newsimage'/>
                 </div> 
                  <div className="newsdetail">
                    <div className='newsdetailinfo'>
                      <a href='/'>Regional Creative Coordinator</a>
                      <span>Product Accounts Supervisor</span>
                  </div> 
                  <div className='about'>
                    <span>about 17 hours ago</span> 
                  </div>
                </div>
              </div>
                  <div className="newsinfo">
                  <div className="newsdetails">
                    <img src={cover2} alt="cover" className='newsimage'/>
                  </div> 
                <div className="newsdetail">
                    <div className='newsdetailinfo'>
                    <a href='/'>Regional Creative Coordinator</a>
                    <span>Product Accounts Supervisor</span>
                    </div> 
                    <div className='about'>
                      <span>about 17 hours ago</span> 
                    </div>
                  </div>
                </div>
                <div className="newsinfo">
                 <div className="newsdetails">
                  <img src={cover3} alt="cover" className='newsimage'/>
                 </div> 
                  <div className="newsdetail">
                    <div className='newsdetailinfo'>
                    <a href='/'>Investor Branding Associate</a>
                    <span>Product Accounts Supervisor</span>
                    </div> 
                  <div className='about'>
                    <span>about 17 hours ago</span> 
                  </div>
                </div>
              </div>
                <div className="newsinfo">
                  <div className="newsdetails">
                    <img src={cover4} alt="cover" className='newsimage'/>
                  </div> 
                  <div className="newsdetail">
                    <div className='newsdetailinfo'>
                       <a href='/'>National Data Officer</a>
                       <span>Product Accounts Supervisor</span>
                    </div> 
                    <div className='about'>
                      <span>about 17 hours ago</span> 
                    </div>
                  </div>
                </div>
                <div className="newsinfo">
                 <div className="newsdetails">
                  <img src={cover5} alt="cover" className='newsimage'/>
                 </div> 
                  <div className="newsdetail">
                    <div className='newsdetailinfo'>
                    <a href='/'>Future Mobility Associate</a>
                    <span>Product Accounts Supervisor</span>
                    </div> 
                  <div className='about'>
                    <span>about 17 hours ago</span> 
                  </div>
                </div>
              </div>
            </div>
          </Box>
          {/*-----------------------timeline------------------------- */}
          <Box className='boxChats'
                sx={{ 
                 backgroundColor: 'background.paper', 
                }}
            >
            <div className='timeline'>
                <h4> Order Timeline </h4>
                <div className='timelineContent'>
                  <div className="content">
                    <div className="dot-line">
                      <div className="dot"  style={{backgroundColor:"purple"}}></div>
                      <div className="line" style={{backgroundColor:"grey"}}></div>
                    </div>
                    <div className="orders-date">
                      <div className='orders'><strong>1983</strong>,orders, <strong>$4220</strong></div>
                      <div className="date"> <span>28 Jun 2022 5:16PM</span> </div>
                    </div>
                </div>
                <div className="content">
                    <div className="dot-line">
                      <div className="dot"  style={{backgroundColor:"green"}}></div>
                      <div className="line" style={{backgroundColor:"grey"}}></div>
                    </div>
                    <div className="orders-date">
                      <div className='orders'><strong>1983</strong>,orders, <strong>$4220</strong></div>
                      <div className="date"> <span>28 Jun 2022 5:16PM</span> </div>
                    </div>
                </div>
                <div className="content">
                    <div className="dot-line">
                      <div className="dot"  style={{backgroundColor:"blue"}}></div>
                      <div className="line" style={{backgroundColor:"grey"}}></div>
                    </div>
                    <div className="orders-date">
                      <div className='orders'><strong>1983</strong>,orders, <strong>$4220</strong></div>
                      <div className="date"> <span>28 Jun 2022 5:16PM</span> </div>
                    </div>
                </div>
                <div className="content">
                <div className="dot-line">
                <div className="dot"  style={{backgroundColor:"yellow"}}></div>
                <div className="line" style={{backgroundColor:"grey"}}></div>
                </div>
                <div className="orders-date">
                <div className='orders'><strong>1983</strong>,orders, <strong>$4220</strong></div>
                <div className="date"> <span>28 Jun 2022 5:16PM</span> </div>
                </div>
                
                </div>
                <div className="content">
                <div className="dot-line">
                <div className="dot" style={{backgroundColor:"red"}}></div>
                <div className="line"></div>
                </div>
                <div className="orders-date">
                <div className='orders'><strong>1983</strong>,orders, <strong>$4220</strong></div>
                <div className="date"> <span>28 Jun 2022 5:16PM</span> </div>
                </div>    
                </div>
                </div>
              </div>
              </Box>
          </div>
          {/*-----------------------------------------Traffic Site ----------------------------------------------- */}
          <div className='chartscont'>
          <Box className='boxtraffic'
            sx={{
            backgroundColor: 'background.paper', 
            }}
            >
            <div className='chartdetails'>
                <h4 style={{marginBottom:"30px",marginTop:"20px" ,marginLeft:'20px'}}>Traffic by Site</h4> 
            </div>
              <div className="trafficicons">
                <div className="trafficicon">
                  <ImFacebook style={{fontSize:'40px', color:'rgb(24, 119, 242)'}}/>
                  <h6>325.32K</h6>
                  <span>Facebook</span>
                </div>
                <div className="trafficicon">
                <BsGoogle style={{fontSize:'40px', color:'rgb(223, 62, 48)'}}/>
                 <h6>300.2K</h6>
                  <span>Google</span>
              </div>
              <div className="trafficicon">
                <GrLinkedinOption style={{fontSize:'40px', color:'rgb(0, 96, 151)'}}/>
                 <h6>312.32K</h6>
                  <span>Linkedin</span>
              </div>  
              <div className="trafficicon">
                <GrTwitter style={{fontSize:'40px', color:'rgb(28, 156, 234)'}}/>
                 <h6>443.23K</h6>
                  <span>Twitter</span>
              </div>
              
            </div>

            </Box>
            {/*-----------------------------------------Task--------------------------------------*/}
            <Box className='boxTask'
              sx={{
              backgroundColor: 'background.paper', 
              }}
              >
              <div className='chartdetails'>
                <h4 style={{marginBottom:"30px",marginTop:"20px" ,marginLeft:'20px'}}>Task</h4> 
              </div>  
              <div className="taskchecks">
                <div className="taskcheck">
                    <label htmlFor="">
                      <input type="checkbox" className='checkbox' />
                      <span>Create FireStone logo</span>
                    </label>
                </div>
                <div className="taskcheck">
                    <label htmlFor="">
                      <input type="checkbox" className='checkbox' />
                      <span>Add SCSS and JS files if required </span>
                    </label>
                </div>
                <div className="taskcheck">
                    <label htmlFor="">
                      <input type="checkbox" className='checkbox' />
                      <span>Stakeholder Meeting</span>
                    </label>
                </div>
                <div className="taskcheck">
                    <label htmlFor="">
                      <input type="checkbox" className='checkbox' />
                      <span>Scoping & Estimations</span>
                    </label>
                </div>
                <div className="taskcheck">
                    <label htmlFor="">
                      <input type="checkbox" className='checkbox' />
                      <span>Sprint Showcase </span>
                    </label> 
                </div>
              </div> 
              </Box> 
            </div> 
              
      </div> 
     </div> 
  )
}

export default Dashboard