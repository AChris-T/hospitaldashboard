import React from 'react'
import { Typography, Box } from '@mui/material'

const Header = ({title}) => {
  return (
    <Box>
        <Typography>
            {{title}}
        </Typography>
    </Box>
  )
}

export default Header