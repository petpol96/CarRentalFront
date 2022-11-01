

import MainPage from "./MainScreen/MainPage";
import React from 'react';
import VehicleScreen from "./Vehicle screen/VehicleScreen";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Header from "./GeneralUseComps/Header";
import ReservasionPage from "./ReservationPage/ReservasionPage";
import { Box } from "@mui/system";
import { useState } from "react";
import AdminApp from '../components/AdminApp'
import DateBox from "./MainScreen/DateBox";

function App() {
  const [cars, setCars] = useState(null)
  return (
    <Router>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto",
        }}
      >
        <Box sx={{ gridRow: "1" }}>
          <Header />
        </Box>
        <Box sx={{ gridRow: "2" }}>
          <Routes>
            <Route path="/" element={<MainPage setCars={setCars} />} />
            <Route path="/about" element={<DateBox setCars={setCars}/>} />
            <Route path="/fleet" element={<VehicleScreen cars={cars} setCars={setCars}/>} />
            <Route path="/reservation" element={<ReservasionPage />} />
            <Route path="/admin" element={<AdminApp/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
