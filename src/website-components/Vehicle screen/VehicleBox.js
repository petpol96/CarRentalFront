import { Button ,Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import carImg from "../MainScreen/Carousel/carImg.jpg";
// import carImg from "../MainScreen/Carousel/carImg.jpg";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import GroupIcon from "@mui/icons-material/Group";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Suitcase from "@mui/icons-material/WorkOutline";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";
import { PriceChange } from "@mui/icons-material";
function VehicleBox(props) {
 const rateHandler=()=>{
  if(props.info.rate<props.info.currentRate){
    return(
      <>
      <Typography sx={{textDecoration: 'line-through'}}> {props.info.rate}€</Typography>
      <Typography > {props.info.currentRate}€</Typography></>
    )
  }
  else{
    return <Typography > {props.info.currentRate}€</Typography>
  }
 }
 let traits= ()=>{
    return(
      <Box  key={props.index} //Box Grammwn traits 
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        columnGap: 1,
        rowGap: 1,
        height:'250px',
      }}
    >
      {console.log(props)}
      <Paper //box gia benzinh
        sx={{
          justifyContent: "center",
          gridRow: "1",
          display: "flex",
          elevation: 10,
          variant: "outlined",
          backgroundColor: "#dee6eb",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
            
          }}
        >
          <Box // fuel r1
            sx={{
              justifyContent: "center",
              gridRow: "1",
              display: "flex",
            }}
          >
            <LocalGasStationIcon fontSize={"large"} />
          </Box>
          <Box //fuel r2
            sx={{
              justifyContent: "center",
              gridRow: "2",
              display: "flex",
            }}
          >
            <Typography>{props.info.traits.Fuel} </Typography>
          </Box>
        </Box>
      </Paper>

      <Paper
        sx={{
          alignContent: "center",
          gridRow: "1",
          gridColumn:'2',
          backgroundColor: "#dee6eb",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridAutoRows: "repeat(2, 1fr)",
            
          }}
        >
          <Box // persons r1
            sx={{
              justifyContent: "center",
              gridRow: "1",
              display: "flex",
            }}
          >
            <GroupIcon fontSize={"large"} />
          </Box>
          <Box //persons r2
            sx={{
              justifyContent: "center",
              gridRow: "2",
              display: "flex",
            }}
          >
            <Typography>{props.info.traits.Passengers}</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper // door box
        sx={{
          justifyContent: "center",
          gridRow: "2",
          gridColumn:'1',
          elevation: 10,
          variant: "outlined",
          backgroundColor: "#dee6eb",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridAutoRows: "repeat(2, 1fr)",
            
          }}
        >
          <Box // door r1
            sx={{
              justifyContent: "center",
              gridRow: "1",
              display: "flex",
            }}
          >
            <Icon icon="mdi:car-door" width="35" height="35" />
          </Box>
          <Box //door r2
            sx={{
              justifyContent: "center",
              gridRow: "2",
              display: "flex",
            }}
          >
            <Typography>{props.info.traits.Doors}</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          alignContent: "center",
          gridRow: "2",
          gridColumn:'2',
          backgroundColor: "#dee6eb",
        }}
      >
        <Box //gearbox box
          sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridAutoRows: "repeat(2, 1fr)",
          }}
        >
          <Box // gear r1
            sx={{
              justifyContent: "center",
              gridRow: "1",
              display: "flex",
            }}
          >
            <Icon
              icon="tabler:manual-gearbox"
              width="35"
              height="35"
            />
          </Box>
          <Box //gear r2
            sx={{
              justifyContent: "center",
              gridRow: "2",
              display: "flex",
            }}
          >
            <Typography>{props.info.traits.Transmission}</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          gridRow: "3",
          gridColumn:'1',
          backgroundColor: "#dee6eb",
        }}
      >
        <Box //gearbox box
          sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridAutoRows: "repeat(2, 1fr)",
           
          }}
        >
          <Box // gear r1
            sx={{
              justifyContent: "center",
              gridRow: "1",
              display: "flex",
            }}
          >
            <AcUnitIcon fontSize={"large"}></AcUnitIcon>
          </Box>
          <Box //gear r2
            sx={{
              justifyContent: "center",
              gridRow: "2",
              display: "flex",
            }}
          >
            <Typography>{props.info.traits["A/C"]}</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          gridRow: "3",
          gridColumn:'2',
          backgroundColor: "#dee6eb",
        }}
      >
        <Box //baguage box
          sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridAutoRows: "repeat(2, 1fr)",
          }}
        >
          <Box // gear r1
            sx={{
              justifyContent: "center",
              gridRow: "1",
              display: "flex",
            }}
          >
            <Suitcase fontSize={"large"} />
          </Box>
          <Box //gear r2
            sx={{
              justifyContent: "center",
              gridRow: "2",
              display: "flex",
            }}
          >
            <Typography>{props.info.traits.Luggage}</Typography>
          </Box>
        </Box>
      </Paper>
      
    </Box>
    )
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        borderRadius: "3px",
        backgroundColor:'#b5d5d5',
        display:'flex',
        justifyContent:'center',
        marginTop:'20px'
        
      }}
    >
      <Box //box grid gia olokliro
        sx={{
          height: "100%",
          width: "80%",
          display: "grid",
          gridAutoColumns: "5 ,1fr",
          gridAutoRows: "100%",
          backgroundColor:'#b5d5d5',
          marginTop: "87px",
          columnGap: 1,
        }}
      >
        <Box 
          sx={{
            gridRow: "1",
            gridColumn: "span 4",
            backgroundColor:'#b5d5d5',
          }}
        >
          <Box //box grid gia oloklires tis plhrofores//eikona
            sx={{
              height: "100%",
              width: "100%",
              display: "grid",
              gridAutoColumns: "3,1fr",
              gridAutoRows: "100%",
              columnGap: 1,
            }}
          >
            <Box //box grid gia eikona
              sx={{
                gridRow: "1",
                gridColumn: "span 2",
                backgroundColor: "#eb4034",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "0% 40%",
                backgroundImage: `url(http://142.93.96.161${props.info.imgUrl1})`,
                minWidth: "250px",
                minHeight: "250px",
              }}
            ></Box>
            <Box // box grid gia plhrofories
              sx={{
                gridRow: "1",
                gridColumn: "span 2",
                backgroundColor: '#b5d5d5',
              }}
            >
              {traits()}
            </Box>
          </Box>
        </Box>
        <Paper //bo grid gia  pricing
          sx={{
            width: "70%",
            height: "100%",
            gridRow: "1",
            backgroundColor: "#eeeeee",
            position: "flex",
            justifyContent: "center",
            elevation: 10,
          }}
        >
          {/* <Typography marginTop='90px' textAlign={'center'} sx={{color:'#004d40'}} variant='h2'>15$</Typography> */}
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "repeat(5, 1fr)",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                gridRow: "1",
                textAlign:'center'
              }}
            >
              <Typography sx={{}}>Price/Day: </Typography>
              {rateHandler()}
            </Box>

            <Typography sx={{ bottom: 0, left: 0 ,color:"#47acff", textAlign:'center'}}  variant="h6">
              Total price:
            </Typography>

            <Box
              sx={{
                gridRow: "span 2",
              }}
            >
              <Typography textAlign={"center"} variant="h4" sx={{}}>
                {props.info.rate*props.days} €
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", gridRow: "5/5", justifyContent: "center" }}
            >
              {" "}
              <Link to="/reservation">
                <Button
                  sx={{
                    backgroundColor: "#47acff",
                    color: "#FFFFFF",
                    "&:hover": {
                      color: "#47acff",
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                >
                  Reserve
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default VehicleBox;
