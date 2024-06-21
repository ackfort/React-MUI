import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor={"orange"}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", lg: "block" } }}>
      Right
    </Box>
  )
}

export default Rightbar
