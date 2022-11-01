
import { Box } from "@mui/system";
import React from "react";
import backImg from "./corfu.jpg";
import CarSlides from "./Carousel/CarSlides";
import DateBox from "./DateBox";

import Header from "../GeneralUseComps/Header";
import Footer from "../GeneralUseComps/Footer";

function MainPage(props) {
  let appHeight = "87px";

  return (
    <Box
      sx={{
        height:'100%',
        width: "100%",
      }}
    >
      <Header/>
      <Box                                    //All screen container
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: '#dee6eb',
          position: "absolute",
          left: 0,
          justifyContent: "center",
          overflowY:'auto',
          position:'flex',
          gridAutoRows:'100px',
          marginTop:'20px'

        }}
      > 
        <Box                                      //Container για εικονα  backround
          sx={{
            height: "650px",
            width: "100%",
            backgroundColor: "#83a437",
            marginTop: appHeight,
            display:'flex',
            justifyContent:'center',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "0% 50%",
            backgroundImage: `url(${backImg})`,
            gridRow: "1",
          }}
        > 
          
          <Box                                     //Box  για το ημερολογιο
            sx={{
              width: "35%",
              borderRadius:2,
              marginTop: "15vh",
              
            }}
          >
            <DateBox setCars={props.setCars}></DateBox>
            <p id="Malakas"></p>
          </Box>
        </Box>
        <Box
        sx={{
            width:'35%',
            height:'400px',
            margin:'auto',
            borderRadius:2,
            marginTop:'20px'
            
            
        }}
        >
          <CarSlides></CarSlides>
        </Box> 
        <Box                                           //footer
        sx={{
          marginTop:'40px',
          width:'100%',
          backgroundColor:' #002442',
        }}
      >
        <Footer/>
      </Box>
      </Box>
      </Box>
                                           
      
    
  );
}

export default MainPage;
