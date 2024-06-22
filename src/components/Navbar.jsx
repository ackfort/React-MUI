import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge, Avatar } from '@mui/material'
import React from 'react'
import Pets from '@mui/icons-material/Pets'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ bgcolor: "orangered", width:"30", height:"30"}}>N</Avatar>
        </Icons>
        <UserBox>
        <Avatar sx={{ bgcolor: "orangered", width:"30", height:"30"}}>N</Avatar>
        <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
