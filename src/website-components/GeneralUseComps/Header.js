import { AppBar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../MainScreen/small.png'
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <AppBar // header
        sx={{
          height: '87px',
          position: "absolute",
          backgroundColor:'#dee6eb',
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridAutoColumns: "1fr",
            gap: 1,
          }}
        >
          <Link to='/'>
          <img
            src={logo}
            alt=''
            sx={{

              gridRow: "1",
            }}
          /></Link>
          <Link to='/fleet'>
          <Typography                      //vehicles
            sx={{
              gridRow: "1",
              gridColumn: "2/4",
              fontSize: 19,
              fontWeight: "700",
              color:'#269d79',
              padding: '32px 0',
              '&:hover': {
                color:"#002442",
             },
            }}
          >
            
            Vehicles
          </Typography>
          </Link>
          <Typography                           //About
            sx={{
              gridRow: "1",
              gridColumn: "3/4",
              fontSize: 19,
              fontWeight: "700",
              color:'#269d79',
              padding: '32px 0',
              '&:hover': {
                color:"#002442",
             },
            }}
          >
            About
          </Typography>
          <Typography                        //Language
            sx={{
              gridRow: "1",
              gridColumn: "4/4",
              fontSize: 19,
              fontWeight: "700",
              color:'#269d79',
              padding: '32px 0',
              '&:hover': {
                color: '#002442',
                
             },
            }}
          >
            Language
          </Typography>
        </Box>
      </AppBar>
    );
}

export default Header;