import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";

function CollisionDamageWaiver() {
  return (
      <Box
        sx={{
          width: "300px",
          height: "100px",
          borderRadius:'2px',
          border: "2px solid #eeeeee",                      

        }}
      > <Box sx={{display: "grid",gridTemplateColumns:'20px 280px',gridColumnGap: "15px",position:'relative',left:'10px',top:'10px'}}>
            <Checkbox sx={{ gridColumn: 1,height:'18px',width:'20px' }} />
            <Box sx={{ gridColumn: 2, display:'grid', gridRowGap:'15px' }}>
                <Box sx={{display:'grid', gridRowGap:'3px' }}>
                    <Typography >COLLISION DAMAGE WAIVER</Typography>
                    <Typography>1.000,00 € EXCESS</Typography>
                </Box>

            <Typography>12$/day</Typography>
            </Box>
        </Box>
      </Box>
  );
}

export default CollisionDamageWaiver;
