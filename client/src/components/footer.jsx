import { Box, Grid,IconButton,InputAdornment,Stack, TextField, Typography } from "@mui/material"
import logo4 from '../assets/logo3.jpg'
import SendIcon from '@mui/icons-material/Send';
import {useTheme, useMediaQuery} from '@mui/material'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedIn from "@mui/icons-material/LinkedIn";
import '../styles/footer.css'

 const Footer=()=>{
    const theme=useTheme()
    const isExtraSmall=useMediaQuery(theme.breakpoints.down('xs'))
    const isSmallSize=useMediaQuery(theme.breakpoints.down('sm'))
    const betweenSmallMedium=useMediaQuery(theme.breakpoints.between('sm','md'))
    const isMediumSize=useMediaQuery(theme.breakpoints.down('md'))
  const betweenMediumLarge=useMediaQuery(theme.breakpoints.between('md','lg'))
  const isLarge=useMediaQuery(theme.breakpoints.down('lg'))
  const upperLarge=useMediaQuery(theme.breakpoints.up('lg'))

    return(
     <Stack> 

        <Stack direction='row' paddingY={5} justifyContent='space-between' alignItems='center' sx={{ backgroundColor:'#CCB691',paddingX: isMediumSize && 2 ||  7 }}>
            <Stack direction={{ sm:'row' }} spacing={{ xs:4, sm:2, md:4,lg:6}}>
             <span style={{  fontSize: isMediumSize && 17 || 25,fontWeight:'bold', fontFamily:'sans-serif' }}>Home</span>
             <span  style={{ fontSize: isMediumSize && 17 || 25,fontWeight:'bold', fontFamily:'sans-serif' }}>Order</span>
             <span  style={{ fontSize: isMediumSize && 17 || 25,fontWeight:'bold', fontFamily:'sans-serif' }}>About Us</span>
           </Stack>
        
        
            <Stack alignItems='center'>
                <Stack direction='row' alignItems='center'> <img src={logo4} style={{ width:100,height:90 }}/> <span style={{ fontFamily:'sans-serif', color:'#AF5901' ,fontSize:25,fontWeight:'bolder' }}>Pizza</span></Stack>
                <TextField 
                   sx={{fontWeight:'bold', borderRadius:3 ,backgroundColor:'white', width: isMediumSize && 220  || 400, border:'none', outline:'none'}}
                   placeholder="Your feedback..."
                   InputProps={{ 
                     endAdornment:(
                        <InputAdornment position="end">
                            <IconButton>  <SendIcon sx={{ color:'#FF8100',fontSize:'larger' }} />  </IconButton> 
                        </InputAdornment>
                     )
                    }}
                />
            </Stack>
        
        
        </Stack>
        <Stack direction={{md:'row'  }} sx={{ paddingY : isSmallSize ? 5 :1 }} height={100} backgroundColor="black" alignItems='center' justifyContent='space-between' paddingX='4%'>
            
            <Stack direction={{ sm:'row' }} color='white' spacing={5} alignItems='center' >
                <Typography>@2024 Pizza All Rights Reserved</Typography>
                <Typography>Term & Condition</Typography>
            </Stack>

            <Stack direction='row' spacing={2}>
                    <Box  className='footerIconn'  display='flex' bgcolor='#141414' justifyContent='center' alignItems='center' width={50} height={50} borderRadius='100%' >
                            <FacebookOutlinedIcon  sx={{ color:'white' }}/>                            
                    </Box>
                    <Box  className='footerIconn'  display='flex' bgcolor='#141414' justifyContent='center' alignItems='center' width={50} height={50} borderRadius='100%' >
                            <LinkedIn  sx={{ color:'white' }}/>                            
                    </Box><Box  className='footerIconn'  display='flex' bgcolor='#141414' justifyContent='center' alignItems='center' width={50} height={50} borderRadius='100%' >
                            <TwitterIcon  sx={{ color:'white' }}/>                            
                    </Box><Box  className='footerIconn'  display='flex' bgcolor='#141414' justifyContent='center' alignItems='center' width={50} height={50} borderRadius='100%' >
                            <YouTubeIcon  sx={{ color:'white' }}/>                            
                    </Box>
            </Stack>
        </Stack>

    </Stack>  
)
}

export default Footer