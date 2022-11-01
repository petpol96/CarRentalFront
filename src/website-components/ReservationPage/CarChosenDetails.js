import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import icon from "./car.png";

function CarChosenDetails() {
    return(
        <Box
        id="CarSelected"
        sx={{
        width: "300px",
        border: "2px solid #eeeeee",
        borderRadius: "2px",
        display:'grid',
        gridRowGap:'15px',
        position:'sticky',
        top:'27px',


        }}
    >
        <Box sx={{ width: "300px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
            variant="h5"
            sx={{
                textAlign: "center",
                fontWeight: "600px",
                width: "80%",
                height: "30px",
            }}
            >
            {" "}
            500$
            </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", width: "80%", height: "20px" }}
            >
            {" "}
            Rental Cost of * days
            </Typography>
        </Box>
        </Box>
        <Box
        sx={{
            width: "300px",
            height: "160px",
            backgroundColor: "#3380F2",
            borderRadius: "2px",
            display:'grid',
            
        }}
        >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img alt='' src={icon} style={{ width: "150px", height: "90px" }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography>FIAT 500c</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography>Fiat 500C Or Similar</Typography>
        </Box>
        </Box>
        <Box sx={{ height: "210px",display:'grid',gridRowGap:'10px' }}>
        <Box sx={{display:'grid',textAlign:'center',gridAutoRows:'25px 25px' }}>
            <LocationOnIcon sx={{gridRow:1,gridColumn:1}} />
            <Typography sx={{gridRow:1,gridColumn:1}}>23 Aug 2022 10pm</Typography>
            <Typography sx={{gridRow:2,height:'25px'}}>Lefkimmi</Typography>
        </Box>
        <Box sx={{display:'grid',textAlign:'center',gridAutoRows:'25px 25px' }}>
            <LocationOnIcon sx={{gridRow:1,gridColumn:1}} />
            <Typography sx={{gridRow:1,gridColumn:1}}>23 Aug 2022 10pm</Typography>
            <Typography sx={{gridRow:2,height:'25px'}}>Lefkimmi</Typography>
        </Box>
        </Box>
    </Box>
    )
}

export default CarChosenDetails