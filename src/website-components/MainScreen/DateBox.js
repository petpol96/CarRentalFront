import * as React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import frLocale from "date-fns/locale/en-GB";
import { Box } from "@mui/system";
import Dropdown from "../GeneralUseComps/Dropdown";
import { Button, Paper } from "@mui/material";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function DateBox(props) {
  const [pickupDate, setPickupDate] = React.useState(null);
  const [dropoffDate, setDropoffDate] = React.useState(null);
  const pickRef = useRef();
  const dropRef = useRef();

  pickRef.current = pickupDate;
  dropRef.current = dropoffDate;

  const dateFormater = (date) => {
    console.log(date)
    if (date != null) {
      return (
        date.toISOString().split("T")[0] +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    }
  };
  const daysBooked=(date1,date2)=>{
    let dif=(date1-date2)/ (-1000 * 3600 * 24)
    return(dif+1)
  }

  const sendRequest = async () => {
    await fetch(
      "http://142.93.96.161:8080/vehicles/availableByDate?pickUpDate=" +
        dateFormater(pickRef.current) +
        "&dropOffDate=" +
        dateFormater(dropRef.current)
        ,{method:'GET'}
    )
      .catch((error) => {
        console.log(error)
      })
      .then((res) => res.json())
      .then((json) => {
        let data={
          daysBooked:daysBooked(pickRef.current,dropRef.current),
          cars:json
        }
        console.log(data)
        props.setCars(data);
      });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
      <Box
        sx={{
          display: "grid",
          width:'100%',
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      > 
        <Paper
          sx={{
            backgroundColor: "#dee6eb",
            width: "100%",
            display: "grid",
            borderRadius: 2,
            elevation: 10,
          }}
        >
          <DatePicker
            label="Pick up Date"
            minDate={new Date()}
            sx={{ width: "100%" }}
            value={pickupDate}
            onChange={(newValue) => {
              setPickupDate(newValue);
            }}
            npm
            install
            swiper
            renderInput={(params) => <TextField {...params} />}
          />
        </Paper>
        <Paper
          sx={{
            backgroundColor: "#dee6eb",
            width: "100%",
            display: "grid",
            borderRadius: 2,
            elevation: 10,
          }}
        >
          <DatePicker
            minDate={pickupDate===null?new Date():pickupDate}
            disableHighlightToday={false}
            label="Drop off date"
            value={dropoffDate}
            onChange={(newValue) => {
              setDropoffDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Paper>
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#dee6eb",
              width: "100%",
              display: "grid",
              borderRadius: 2,
              elevation: 10,
            }}
          >
            <Dropdown label={"Pick up Location"}></Dropdown>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "#dee6eb",
              width: "100%",
              display: "grid",
              borderRadius: 2,
              elevation: 10,
            }}
          >
            <Dropdown label={"Pick up Time"}></Dropdown>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#dee6eb",
              width: "100%",
              display: "grid",
              borderRadius: 2,
              elevation: 10,
            }}
          >
            <Dropdown label={"Drop off Location"}></Dropdown>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "#dee6eb",
              width: "100%",
              display: "grid",
              borderRadius: 2,
              elevation: 10,
            }}
          >
            <Dropdown label={"Drop off Time"}></Dropdown>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gridColumn: "span 2",
          }}
        ><Link to='/fleet'>
          <Button
            sx={{
              backgroundColor: "#47acff",
              color: "#FFFFFF",
              "&:hover": {
                color: "#47acff",
                backgroundColor: "#FFFFFF",
              },
            }}
            onClick={() => {
              sendRequest();
            }}
          >
            Search
          </Button>
          </Link>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
export default DateBox;
