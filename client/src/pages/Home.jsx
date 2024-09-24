import { Box, Button, ButtonBase, Grid, Grid2, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/navbar'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img6 from '../assets/img6.jpg'
import SearchIcon from '@mui/icons-material/Search';
import {useTheme, useMediaQuery} from '@mui/material'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence} from "framer-motion"
import CircleIcon from '@mui/icons-material/Circle';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { SvgIcon } from '@mui/material';

import girl from '../assets/girl.jpg'
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

  const [count,setCount]=useState(1)

    useEffect(()=>{
      const interval=setInterval(()=>{
        setCount(count+1)
        if(count ===3) setCount(1)
      },1200)
      return ()=>clearInterval(interval)
    },[count])

 const StackM=motion(Stack)

  const CardOne=(props)=>{
    return(
      <AnimatePresence >
      <StackM 
        initial={{ x:-40, }}
        animate={{ x:0 , transition:{ ease:'easeInOut'}}}
        // exit={{ x:40 }}

        // initial={{ opacity: 0, x: 100 }}
        // animate={{ opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 0.5 } }}
        // exit={{ opacity: 0, x: -100 }}
          
        direction={{ sm:'row' }}
        height={{ sm: 380 }}
        bgcolor={props.bgColor} 
        // alignItems='center' 
        sx={{ alignItems: isSmallSize && 'flex-start' ||'center' }}
        borderRadius={6}>
         <Stack direction='column' spacing={4} justifyContent='space-around' 
          sx={{ 
          paddingLeft:isSmallSize && 2 || betweenSmallMedium && 4 ||  betweenMediumLarge && 5 || upperLarge && 7,
          paddingRight:isSmallSize && 2,
          }} >
           <Typography sx={{ 
                  fontSize: isMediumSize && 20 || betweenMediumLarge && 25 || 36 ,
                  fontWeight:'bold',
                  color:'white',
                  paddingRight: upperLarge && 40,
                  }}>
                  {props.heading} <span style={{ color:'#FF890E' }}> 50% Off</span>
           </Typography>
           <Typography sx={{ 
            fontSize:isMediumSize && 15 || 18,
            color:'#eeeae2',
            paddingRight: upperLarge && 18,

            }}>
             {props.desc}
           </Typography>
           <Button sx={{ backgroundColor:'#FF890E', width:220,height:55}}>
           <Link to='/homee' 
           
            style={{ textDecoration:'none',color:'white', }}>
            Order Now
          </Link>
          </Button>
         </Stack>
          <img src={props.imagee} style={{ 
            padding : isSmallSize && 10,
            maxHeight:'100%', 
            maxWidth:'100%' ,
            width:betweenSmallMedium && 290,
            height: betweenExtraSmall && 250  ||  '100%', 
            borderTopLeftRadius:'50%', 
            borderBottomLeftRadius:'50%'}}/>
      </StackM>
      </AnimatePresence>
    )
  }

  const  CardTwo=(props)=>{
    return(
      <Stack direction='row' p={2.5}  spacing={1} sx={{ width: isSmallSize ? 300: 470, height:isSmallSize? 120: 100,borderRadius:4 ,backgroundColor:'white'}}>
        <Stack direction='column'>
          <Stack direction='row' alignItems= "center" spacing={1} >
            <img src={props.imagee} style={{width:isSmallSize ? 33: 45,height: isSmallSize? 33: 45,borderRadius:'100%'}}/>
            <Typography fontWeight='bolder'>{props.title}</Typography>
          </Stack>
          <Typography sx={{ fontSize:isSmallSize ?12: 14 ,color:'gray', }}>{props.desc}</Typography>
        </Stack>
        <Stack direction='row' spacing={1}  pl={1.3} alignItems= "center" sx={{ backgroundColor:'#F2F9F2',borderRadius:3,width:530 }}>
           <Stack  alignItems= "center" justifyContent='center' sx={{backgroundColor:'#F5E1C2', height:isSmallSize ? 47: 63, width:isSmallSize ? 47: 63,  borderRadius:'100%', }}>
              <BatteryChargingFullIcon sx={{  fontSize: isSmallSize ?25: 40 , color:'#FF8100' }} />
           </Stack>
           <Box>
            <Typography color='#868F86' sx={{ fontSize :isSmallSize && 15 }}>Number of order</Typography>
            <Typography  sx={{ fontSize:isSmallSize ? 25: 36, fontWeight:'bold',color:'#FF8100' }}>{props.order}</Typography>
           </Box>
        </Stack>
      </Stack>
    )
  }

const CardThree=(props)=>{
  return(
      <Stack width={ 300} paddingX={4} height={580} borderRadius={5} boxShadow={5} alignItems='center' justifyContent='center'>
            <Stack sx={{ justifyContent:'center',alignItems:'center', backgroundColor:'brown',width:290, height:290,borderRadius:'100%' }}>
              <img src={props.imagee} style={{ width:250, height:250, borderRadius:'100%' }}/>
            </Stack>
            <Stack>
              <Typography fontWeight='bolder' fontFamily='sans-serif' fontSize={24}>{props.title}</Typography>
              <Typography color='#404241' fontSize={16}  fontFamily='sans-serif'>{props.desc}</Typography>
              <Stack direction='row' borderBottom={0.1} justifyContent='space-between' alignItems='center' pb={1.5} >
                <Stack direction='row' fontFamily='sans-serif'><span style={{color:'green', fontSize:40,fontWeight:'bold' }}>{props.money}</span><span>Birr</span></Stack>
                <Stack width={170} height={60} borderRadius={3} justifyContent='center' fontFamily='sans-serif' fontWeight='bold' alignItems='center' fontSize={30}  sx={{ backgroundColor:'#FF8100' }}>
                  <Link to='/' style={{ color:'white' ,textDecoration:'none'}}> Order  </Link>
                </Stack>
              </Stack>
              <Stack direction='row' pt={2} justifyContent='space-between' alignItems='center'>
                <img src={props.imageP} style={{ width:57,height:57,borderRadius:'100%'}}/>
                <Typography fontSize={20} fontFamily='sans-serif' fontWeight='bold' sx={{  color:'#4b4e4d' }}>{props.titleTwo}</Typography>
              </Stack>

            </Stack>
      </Stack>)
}



  return (
    <Stack >
      {/* part one */}
      <Stack direction='row'
      alignItems='center'
      paddingLeft={{xs:2, sm:3,md:4,lg:7 }}
        sx={{
      height:790,
      // background: 'linear-gradient(to bottom, #FFFBF8 , #FFCC97)', 
      background: 'linear-gradient(to bottom, #FFFBF8 0%, #FFCC97 50%, #FFFBF8 95%)', // 3 color stops: start, middle, and end

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
             width:isExtraSmall && 140 || betweenExtraSmall && 160||  isSmallSize && 220 || betweenSmallMedium && 270 || betweenMediumLarge && 350 || upperLarge && 585, 
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

      {/* part two */}
      <Stack sx={{ background: 'linear-gradient(to bottom, #FFFBF8, #FFFBF8)',  }}>
        <Stack paddingX={{xs:2, sm:3,md:4,lg:7 }} >
          <Typography sx={{ fontStyle:'sans-serif', fontSize: upperLarge && 47,color:'gray' }}>Feature pizza</Typography>
           
         { count===1 && <CardOne 
          bgColor='black'
          heading='Make Your First Order and Get'
          desc='In publishing and graphic design, Lorem ipsum is a placeholder 
          text commonly used to demonstrate the visual form of a document or a typeface without'
          imagee={img2}  

          />}
            { count===2 && <CardOne 
          bgColor='orange'
          heading='Make Your First Order and Get'
          desc='In publishing and graphic design, Lorem ipsum is a placeholder 
          text commonly used to demonstrate the visual form of a document or a typeface without'
          imagee={img3}  

          />}  { count===3 && <CardOne 
            bgColor='green'
            heading='Make Your First Order and Get'
            desc='In publishing and graphic design, Lorem ipsum is a placeholder 
            text commonly used to demonstrate the visual form of a document or a typeface without'
            imagee={img4}  
  
            />}
             <Stack direction='row' spacing={2} justifyContent='center' pt={3}>
                 <CircleIcon sx={{ color:count===1 ? '#FF890E':'gray' }} />
                 <CircleIcon sx={{ color:count===2 ? '#FF890E':'gray' }} />
                 <CircleIcon sx={{ color:count===3 ? '#FF890E':'gray' }} />

             </Stack>
        </Stack>
      </Stack>

      {/* part three */}
      <Stack  pt={20} pb={20} sx={{ background: 'linear-gradient(to bottom, #FFFBF8, #FEE9D3, #FFFBF8)', paddingLeft: isMediumSize && 2 || 7}}>
        <Typography sx={{ color:'gray' , 
          fontSize: isMediumSize ? 24: 37
           }}>Top Restaurant</Typography>
        <Stack direction='row' spacing={2.7} 
                sx={{ 
               overflow: "auto",
                scrollbarWidth: "none", // Hide the scrollbar for firefox
               '&::-webkit-scrollbar': {
               display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
                                 },
                  '&-ms-overflow-style:': {
                 display: 'none', // Hide the scrollbar for IE
               }, }}>
            <CardTwo  
            order='2K'
            desc='In publishing and graphic design, Lorem ipsum is a placeholder 
             text commonly used to...'
            title='Azmera Pizza'
            imagee={girl} 
            />
             <CardTwo  
            order='2K'
            desc='In publishing and graphic design, Lorem ipsum is a placeholder 
             text commonly used to...'
            title='Azmera Pizza'
            imagee={girl} 
            /> <CardTwo  
            order='2K'
            desc='In publishing and graphic design, Lorem ipsum is a placeholder 
             text commonly used to...'
            title='Azmera Pizza'
            imagee={girl} 
            /> <CardTwo  
            order='2K'
            desc='In publishing and graphic design, Lorem ipsum is a placeholder 
             text commonly used to...'
            title='Azmera Pizza'
            imagee={girl} 
            /> <CardTwo  
            order='2K'
            desc='In publishing and graphic design, Lorem ipsum is a placeholder 
             text commonly used to...'
            title='Azmera Pizza'
            imagee={girl} 
            /> <CardTwo  
            order='2K'
            desc='In publishing and graphic design, Lorem ipsum is a placeholder 
             text commonly used to...'
            title='Azmera Pizza'
            imagee={girl} 
            /> <CardTwo  
            order='2K'
            desc='In publishing and graphic design, Lorem ipsum is a placeholder 
             text commonly used to...'
            title='Azmera Pizza'
            imagee={girl} 
            />
        </Stack>
      </Stack>

     {/* part four */}
     <Stack sx={{  paddingX: isMediumSize && 0.3 || 4,paddingTop:10 }}>
       <Typography pl={2.5} sx={{ color:'gray' , 
          fontSize: isMediumSize ? 24: 40
           }}>Popular Pizzas</Typography>
       <Grid container justifyContent='space-around' alignItems='center' columnSpacing={2} rowSpacing={3}> 
        
         <Grid item >
            <CardThree 
              imageP={girl}
              imagee={img6}
              money='300'
              title='Margarita'
              desc='Tomato , Marizella,Bell peper, Onions, Oilive oil'
              titleTwo='Azmera Pizza'
                />
         </Grid>
         <Grid item >
            <CardThree 
              imageP={girl}
              imagee={img6}
              money='300'
              title='Margarita'
              desc='Tomato , Marizella,Bell peper, Onions, Oilive oil'
              titleTwo='Azmera Pizza'
                />
         </Grid>
         <Grid item >
            <CardThree 
              imageP={girl}
              imagee={img6}
              money='300'
              title='Margarita'
              desc='Tomato , Marizella,Bell peper, Onions, Oilive oil'
              titleTwo='Azmera Pizza'
                />
         </Grid>
         <Grid item >
            <CardThree 
              imageP={girl}
              imagee={img6}
              money='300'
              title='Margarita'
              desc='Tomato , Marizella,Bell peper, Onions, Oilive oil'
              titleTwo='Azmera Pizza'
                />
         </Grid>
         <Grid item >
            <CardThree 
              imageP={girl}
              imagee={img6}
              money='300'
              title='Margarita'
              desc='Tomato , Marizella,Bell peper, Onions, Oilive oil'
              titleTwo='Azmera Pizza'
                />
         </Grid>
         <Grid item >
            <CardThree 
              imageP={girl}
              imagee={img6}
              money='300'
              title='Margarita'
              desc='Tomato , Marizella,Bell peper, Onions, Oilive oil'
              titleTwo='Azmera Pizza'
                />
         </Grid>

            
       </Grid>
      </Stack>
    </Stack>
  )
}

export default Home