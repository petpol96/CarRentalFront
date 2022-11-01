import React from "react";
import { Button, Divider, Paper, Typography } from "@mui/material";
import { Box, minHeight, textAlign } from "@mui/system";
import carImg from "../MainScreen/Carousel/carImg.jpg";
// import carImg from "../MainScreen/Carousel/carImg.jpg";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import GroupIcon from "@mui/icons-material/Group";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Suitcase from "@mui/icons-material/WorkOutline";
import { Icon } from "@iconify/react";
import ReservationDetails from "./ResevationDetails";

function ReservasionCar(props) {
  let image = () => {
    return (
      <Box //box grid gia eikona
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0% 60%",
          backgroundImage: `url(${carImg})`,
          minWidth: "27px",
          minHeight: "32px",
          height: "100%",
          width: "100%",
        }}
      ></Box>
    );
  };
  let traits = () => {
    return (
      <Box //Box Grammwn traits
        sx={{
          height: "100%",
          width: "100%",
          display: "grid ",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          columnGap: 1,
          rowGap: 1,
        }}
      >
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
              <Typography>Diesel </Typography>
            </Box>
          </Box>
        </Paper>

        <Paper
          sx={{
            alignContent: "center",
            gridRow: "1",
            gridColumn: "2",
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
              <Typography>4 passengers</Typography>
            </Box>
          </Box>
        </Paper>
        <Paper // door box
          sx={{
            justifyContent: "center",
            gridRow: "2",
            gridColumn: "1",
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
              <Typography>3 doors</Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          sx={{
            alignContent: "center",
            gridRow: "2",
            gridColumn: "2",
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
              <Icon icon="tabler:manual-gearbox" width="35" height="35" />
            </Box>
            <Box //gear r2
              sx={{
                justifyContent: "center",
                gridRow: "2",
                display: "flex",
              }}
            >
              <Typography>Automatic</Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          sx={{
            gridRow: "3",
            gridColumn: "1",
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
              <Typography>A/C</Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          sx={{
            gridRow: "3",
            gridColumn: "2",
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
              <Typography>3 baguages</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        columnGap: 1.5,
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        backgroundColor: "#b5d5d5",
        rowGap: 1,
      }}
    >
      <Paper
        sx={{
          gridRow: 1,
          // gridTemplateColumns: "repeat(2, 1fr)",
          // gridTemplateRows: "repeat(2, 1fr)",
          backgroundColor: "#b5d5d5",
          rowGap:1,
          columnGap:1,
          display: "grid",
        }}
      >
        <Box
          sx={{
            gridRow: "1",
            // gridColumn: "1",
          }}
        >
          {image()}
        </Box>
        {/* <Paper
          sx={{
            gridRow: "1",
            gridColumn: "2",
            textAlign: "center",
            display: "grid",
          }}
        >
          <Typography sx={{ gridRow: "2/3" }}>Price/Day: 30$</Typography>
        </Paper>
        <Paper
          sx={{
            gridRow: "2",
            gridColumn: "span 2",
            textAlign: "center",
            display: "grid",
          }}
        >
          <Typography variant='h5' sx={{ gridRow: "2/3" }}>Total Price: 150$ </Typography>
        </Paper> */}
      </Paper>
      <Box sx={{ gridRow: 2 }}>{traits()}</Box>
      <Box
        sx={{
          gridRow: "span 2",
          width: "100%",
          height: "100%",
          gridColumn: "2",
        }}
      >
        <ReservationDetails />
      </Box>
    </Box>
  );
}

export default ReservasionCar;
