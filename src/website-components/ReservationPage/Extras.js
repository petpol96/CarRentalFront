import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Extras(props) {
  const [value, setValue] = React.useState(0);

  let counter = () => {
    return (
      <Box
        sx={{
          width: "80px",
          height: "20px",
          border: "1px solid #eeeeee",
          display: "grid",
          borderRadius: 1,
          gridRow: 4,
        }}
        gridColumn="span 4"
      >
        <Box sx={{ gridRow: 1, display: "flex", justifyContent: "center" }}>
          <RemoveIcon
            sx={{ gridRow: 1 }}
            onClick={() => {
              value > 0 ? setValue(value - 1) : setValue(value);
            }}
          />
        </Box>
        <Typography sx={{ gridRow: 1, textAlign: "center" }}>
          {value}
        </Typography>
        <Box sx={{ gridRow: 1, display: "flex", justifyContent: "center" }}>
          <AddIcon
            onClick={() => {
              setValue(value + 1);
            }}
          />
        </Box>
      </Box>
    );
  };

  let extra = () => {
    return (
      <Box
        sx={{
          height: "150px",
          width: "300px",
          display: "grid",
        }}
      >
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
            gridColumn: 1,
            potition: "absolute",
            top: "25px",
            left: "25px",
          }}
        ></Avatar>
        <Box
          sx={{
            width: "100px",
            height: "150px",
            gridColumn: 2,
            display: "grid",
          }}
        >
          <Box sx={{ gridRow: 1, height: "100%", width: "100%" }}>
            <Typography
              sx={{
               
                top: "10px",
              }}
            >
              Baby seat
            </Typography>
          </Box>
          <Typography sx={{ gridRow: 3, height: "100%", width: "100%" }}>
            5$/day
          </Typography>
          {counter()}
        </Box>
      </Box>
    );
  };
  return (
    <Box id='Extras'sx={{ display: "grid", gridTemplateColumns: "repeat(3 ,300px)" }}>
      {extra()}
      {extra()}
      {extra()}
      {extra()}
    </Box>
  );
}

export default Extras;
