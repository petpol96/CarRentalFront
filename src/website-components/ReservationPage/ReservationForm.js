import {
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import "react-phone-input-2/lib/material.css";
import PhoneInput from "react-phone-input-2";
import React, { useEffect, useState } from "react";

function ReservationForm(props) {
  const [checked, setChecked] = React.useState(false);
  const [phone, setPhone] = useState('')
  

  var boxesWidth='500px'


  const flightNumberHandler = () => {
    return checked ? (

        <TextField
          required
          id="outlined-required"
          label="Flight Number"
          onChange={(e)=>props.setflightNumber(e.target.value)}
          sx={{width:boxesWidth}}
        />
    ) : (
        <TextField
          disabled
          id="outlined-required"
          label="Flight Number"
          sx={{width:boxesWidth}}
        />
    );
  };
  
  return (
    <Box
     
      sx={{
        display: "grid",     
        width: "100%",
        height: "100%",
        rowGap: 1.5,
      }}
    >

        <TextField
          required
          id="outlined-required"
          label="First Name"
          onChange={(e)=>props.setName(e.target.value)}
          sx={{
            height:'100%',
            width:boxesWidth,
           }}

        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          onChange={(e)=>props.setLastName(e.target.value)}
          sx={{
            height:'100%',
            width:boxesWidth,
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          onChange={(e)=>props.setEmail(e.target.value)}
          sx={{ gridRow: "3",width:boxesWidth }}
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          onChange={(e)=>props.setAddress(e.target.value)}
          sx={{ gridRow: "4",width:boxesWidth }}
        />
        <TextField
          required
          id="outlined-required"
          label="Country"
          onChange={(e)=>props.setCountry(e.target.value)}
          sx={{ gridRow: "5",width:boxesWidth }}
        />
      <Box
        sx={{
          height: "100%",

        }}
      >
        <PhoneInput
          placeholder="Enter phone number"
          onChange={props.setPhone}
          country="gr"
          className="PhoneInputInput"
          styles={{width:boxesWidth}}
        />
      </Box>
      
      <Box sx={{height:'100%'}}>
        <FormControlLabel
          value="Arrival by Plane"
          control={
            <Checkbox
              onClick={() => {
                setChecked(!checked);
              }}
            />
          }
          label="Arrival at Airport"
          labelPlacement="end"
        />
      </Box>
      {flightNumberHandler()}
     
    </Box>
  );
}

export default ReservationForm;
