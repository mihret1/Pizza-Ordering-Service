
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/navbar'
import img1 from '../assets/img1.jpg'
import SearchIcon from '@mui/icons-material/Search';


function Home() {
  return (
    <Stack direction='row'
      alignItems='center'
      paddingLeft={7}
       sx={{
      height:790,
      background: 'linear-gradient(to bottom, #FFFBF8, #FFCC97)', // Gradient colors
    }}>
      <Stack pr='5%' >
        <Typography variant='h4' fontWeight='bolder' 
         sx={{background:'linear-gradient(to right, #FF890E,#FFCC97)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
         fontSize:140 , fontFamily:'sans-serif'}}>Order us</Typography>
        <p style={{ fontSize:27 ,fontFamily:'sans-serif'}}>In publishing and graphic design, Lorem ipsum is a placeholder 
          text commonly used to demonstrate the visual form of a document or a typeface without</p>
        <Stack direction='row'  justifyContent='space-between' sx={{ backgroundColor:'white', paddingY:1, paddingX:1, paddingLeft:4, borderRadius:20 }}>
          <input placeholder='Search' style={{ outline:'none',border:'none', fontSize:30 }} />
          <Box p={1} sx={{ backgroundColor:'#FF890E', borderRadius:'100%' }}>
            <IconButton>
              <SearchIcon  sx={{fontSize:65 ,color:'white' }} />
            </IconButton>
          </Box>
        </Stack>
      </Stack>
      <Box>
        <img src={img1} style={{height:720}}/>
      </Box>
    </Stack>
  )
}

export default Home