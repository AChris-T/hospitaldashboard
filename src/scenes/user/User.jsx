import React from 'react'
import {Box} from '@mui/material'
import Table from './Table'
import './user.css'


const User = () => {
  return (
    <div className='user-tabs'>
      <div className="usertab">
        <Box>
          <Table/>
        </Box>
      </div>
    </div>
  )
}

export default User
