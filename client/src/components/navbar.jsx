import Stack from '@mui/material/Stack';
import logo from '../assets/logo.jpeg'
import logo2 from '../assets/logo2.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Box, Button, ButtonBase, IconButton } from '@mui/material';
import { useTheme,useMediaQuery,  } from '@mui/material';
import {Hidden} from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import  '../styles/navbar.css'

const Navbar=()=>{
    const theme=useTheme()
    const isMediumSize=useMediaQuery( theme.breakpoints.down('md'))
    const [navv, setNavv]=useState()
    return(
        <Stack direction='column'  width='100%' bgcolor='#FFFBF8' className='navu' > 
        <Stack direction='row'  alignItems='center' justifyContent='space-between' sx={{  paddingX:2 }} >
            <Link to='/' style={{ textDecoration:'none' }}>
              <Stack direction='row' alignItems='center' spacing={2}>
                 <Box > <img src={logo2} style={{ height:isMediumSize?53 :78,   }}/> </Box>
                 <Typography  sx={{ color:'brown' , fontWeight:'bolder', fontSize: isMediumSize?25: 30}}>Pizza</Typography>
              </Stack>
            </Link>
            <Stack direction='row'   spacing={{xs:2, sm:3, md:5,lg:10 }} alignItems='center'>
             <Link to='/' style={{ textDecoration:'none', color:'black', }}> <Typography  sx={{fontSize:25, '&:hover':{color:'#FF890E'},[theme.breakpoints.down('sm')]:{fontSize:19} }}>Home</Typography></Link> 
             <Link to='/' style={{ textDecoration:'none' ,color:'black'}}>   <Typography   sx={{fontSize:25, '&:hover':{color:'#FF890E'},[theme.breakpoints.down('sm')]:{fontSize:19} }}>Orders</Typography></Link> 
               {!isMediumSize &&   <Link to='/' style={{ textDecoration:'none',color:'black' }}>   <Typography  sx={{'&:hover':{color:'#FF890E'},  fontSize:25}}>Who We are</Typography></Link> }
            </Stack>
            {isMediumSize && <IconButton onClick={()=>setNavv((e)=>!e)}>
                <MenuIcon fontSize='large' />
            </IconButton>}
           <Hidden mdDown>
             <ButtonBase   component={Link} 
              to="/"  sx={{'&:hover':{backgroundColor:'brown'}, backgroundColor:'#FF890E', paddingX:6, height:50,color:'white', fontSize:22, fontWeight:'bold', borderRadius:1 }}>
                Register
            </ButtonBase>
            </Hidden> 
        </Stack>
       { navv && <Hidden mdUp sx={{ }}  >
        <Stack spacing={2} sx={{  backgroundColor:'' }}> 
        <Link to='/' style={{ textDecoration:'none', color:'black' }}>  <Typography  sx={{'&:hover':{color:'#FF890E'},borderBottom: '1px dashed gray',borderTop: '1px dashed gray', fontSize:20}}>Who We are</Typography></Link> 
              <Box pb={1} sx={{ borderBottom: '1px dashed gray',}}>  <ButtonBase 
              component={Link} 
              to="/target-path" 
               sx={{'&:hover':{backgroundColor:'brown'}, backgroundColor:'#FF890E', paddingX:6, height:50,width:150, color:'white', fontSize:20,borderRadius:1 }}>
                Register
            </ButtonBase>
            </Box>
        </Stack>
        </Hidden>}
        </Stack>
    )
}


export default Navbar