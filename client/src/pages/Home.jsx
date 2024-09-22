
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/navbar'
import img1 from '../assets/img1.jpg'
import SearchIcon from '@mui/icons-material/Search';
import {useTheme, useMediaQuery} from '@mui/material'

function Home() {
  const theme=useTheme()
  const isExtraSmall=useMediaQuery(theme.breakpoints.down('xs'))
  const betweenExtraSmall=useMediaQuery(theme.breakpoints.between('xs','sm'))
  const isSmallSize=useMediaQuery(theme.breakpoints.down('sm'))
  const betweenSmallMedium=useMediaQuery(theme.breakpoints.between('sm','md'))
  const isMediumSize=useMediaQuery(theme.breakpoints.down('md'))
  const betweenMediumLarge=useMediaQuery(theme.breakpoints.between('md','lg'))
  const isLarge=useMediaQuery(theme.breakpoints.down('lg'))
  const upperLarge=useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Stack >
      <Stack direction='row'
      // justifyContent='center'
      alignItems='center'
      paddingLeft={{xs:2, sm:3,md:4,lg:7 }}
        sx={{
      height:790,
      background: 'linear-gradient(to bottom, #FFFBF8, #FFCC97)', 
    }}>
      <Stack pr='5%' >
        <Typography variant='h4' fontWeight='bolder' 
         sx={{background:'linear-gradient(to right, #FF890E,#FFCC97)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
           fontSize : isSmallSize  && 25 || betweenSmallMedium &&  35  || betweenMediumLarge && 70  || upperLarge && 140, 
       
           fontFamily:'sans-serif'}}>Order us</Typography>
        <p style={{ 
          fontSize: isMediumSize && 17 || betweenMediumLarge && 20 || upperLarge && 24 ,
          fontFamily:'sans-serif'}}>In publishing and graphic design, Lorem ipsum is a placeholder 
          text commonly used to demonstrate the visual form of a document or a typeface without</p>
        <Stack direction='row'  justifyContent='space-between' 
          sx={{ backgroundColor:'white',
             width:isExtraSmall && 150 || betweenExtraSmall && 170||  isSmallSize && 220 || betweenSmallMedium && 270 || betweenMediumLarge && 350 || upperLarge && 585, 
           paddingY:1, paddingX:1, 
           paddingLeft: 4,
            borderRadius:20 }}>
          <input placeholder='Search' 

           style={{ outline:'none',border:'none',width:isExtraSmall && 50 || betweenExtraSmall && 60,

           fontSize:upperLarge && 25 }} />
          <Box p={{ sm:1 }} sx={{ backgroundColor:'#FF890E', borderRadius:'100%' }}>
            <IconButton>
              <SearchIcon  sx={{fontSize:upperLarge && 56 ,color:'white' }} />
            </IconButton>
          </Box>
        </Stack>
      </Stack>
      <Box >
        <img src={img1} style={{
          height: isSmallSize && 140 || betweenSmallMedium && 300 || betweenMediumLarge && 450 || upperLarge && 720
          }}/>
      </Box>
      </Stack>
    </Stack>
  )
}

export default Home