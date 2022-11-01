import {
  Paper,
  Typography,
} from "@mui/material";
import { Box,} from "@mui/system";
import "react-phone-input-2/lib/material.css";
import React from "react";

function ReservationDetails(props) {


  return (
    <Paper sx={{ display: "grid", width: "100%", height: "100%", position:'sticky' }} elevation={6}>
      <Box sx={{ gridColumn: "1", display: "grid" ,gridTemplateRows:'repeat(3,1fr)'}}>
        <Typography variant={'h6'} sx={{gridRow:'1',color:"#47acff",marginLeft:'3px'}}>Date,Location {'&'}Time of Resevation</Typography>
        <Typography sx={{gridRow:'2',marginLeft:'10px'}}>Drop off: 11-3-2022</Typography>
        <Typography sx={{gridRow:'3',marginLeft:'10px'}}>Airport - 11:00 AM</Typography>
        
      </Box>
      <Box sx={{ gridColumn: "2", display: "grid" ,gridTemplateRows:'repeat(3,1fr)'}}>
        <Typography sx={{gridRow:'1'}}>  </Typography>
        <Typography sx={{gridRow:'2',marginLeft:'10px'}}>Drop off: 11-3-2022</Typography>
        <Typography sx={{gridRow:'3',marginLeft:'10px'}}>Airport - 11:00 AM</Typography>
        
      </Box>
      <Box sx={{ gridColumn: "3", display: "grid" ,gridTemplateRows:'repeat(2,1fr)'}}>
        <Typography variant={"h6"} sx={{gridRow:'1', color:"#47acff",marginLeft:'3px'}}>Billing Details</Typography>
        <Typography variant={"h7"} sx={{ gridRow: "2", gridColumn:'1',marginLeft:'10px' }}>Price/Day:30$</Typography>
        <Typography variant={"h5"} sx={{ gridRow: "3", gridColumn:'1' ,marginLeft:'10px'}}>
          Total Price: 150$
        </Typography>
      </Box>
      
    </Paper>
  );
}

export default ReservationDetails;
