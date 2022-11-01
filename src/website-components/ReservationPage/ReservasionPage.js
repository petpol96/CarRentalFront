
import { Box } from "@mui/system";
import "react-phone-input-2/lib/material.css";
import React from "react";
import CarChosenDetails from "./CarChosenDetails";
import HorizontalLinearStepper from "./HorizontalLinearStepper";

function ReservasionPage(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "1200px",
          height: "100%",
          position: "absolute",
          top: "87px",
          display: "grid",
          gridTemplateColumns: "300px 100%",
          gridColumnGap: "40px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "25px",
            left: "20px",
            gridColumn: 1,
            width: "300px",
            height:'100%',
          }}
        >
          <CarChosenDetails />
        </Box>
        <Box
          sx={{
            gridColumn: 2,
            width: "900px",
            position: "absolute",
            top: "25px",
            display: "grid",
            gridRowGap: "15px",
          }}
        >
          <HorizontalLinearStepper />
        </Box>
      </Box>
    </Box>
  );
}

export default ReservasionPage;
