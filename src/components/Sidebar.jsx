import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box
      bgcolor={"skyblue"}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>
      Side
    </Box>
  )
}

export default Sidebar
