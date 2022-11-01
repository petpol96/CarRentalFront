import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Footer(props) {
    return (
    <Box                                           //footer
        sx={{
          gridTemplateColumns:"repeat(3,1fr)",
          width:'100%',
          height: "50px",
          backgroundColor:' #002442',
          display:'grid'
        }}
      >
          <Box sx={{gridColumn:'1',textAlign:'center'}}>
            <Typography sx={{color:'#FFFFFF'}}>Contact us:</Typography>
          </Box>
          <Box sx={{gridColumn:'2',textAlign:'center'}}>
            <Typography sx={{color:'#FFFFFF'}}>E-mail: gardenosCarRental@gmail.com </Typography>
          </Box>
          <Box sx={{gridColumn:'3',textAlign:'center'}}>
            <Typography sx={{color:'#FFFFFF'}}>Phone Number:+30 6982815657</Typography>
          </Box>
      </Box>)
}

export default Footer;