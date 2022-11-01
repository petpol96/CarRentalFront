import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import DateBox from "../MainScreen/DateBox";
import FilterBox from "./FilterBox";
import VehicleBox from "./VehicleBox";

function VehicleScreen(props) {
  const [checked, setChecked] = React.useState([]);
  const [cars, setCars] = React.useState(null);
  const [givenFilters, setGivenFilters] = React.useState({
    "A/C": [],
    Doors: [],
    Fuel: [],
    Luggage: [],
    Passengers: [],
    Transmission: [],
  });
  useEffect(() => {
    let isMounted = true;
    var temp=givenFilters
    console.log(props.cars)
    if (props.cars !== null && isMounted) {
      setCars(props.cars)
      props.cars.cars.map((car,index) => {
        if (!temp["A/C"].includes(car.traits["A/C"]))
          temp={
            ...temp,
            "A/C": [...temp["A/C"], car.traits["A/C"]],
          }
        if (!temp.Doors.includes(car.traits.Doors))
          temp={
            ...temp,
            Doors: [...temp.Doors, car.traits.Doors],
          };
        if (!temp.Fuel.includes(car.traits.Fuel))
          temp={
            ...temp,
            Fuel: [...temp.Fuel, car.traits.Fuel],
          };
        if (!temp.Luggage.includes(car.traits.Luggage))
        temp={
            ...temp,
            Luggage: [...temp.Luggage, car.traits.Luggage],
          };
        if (!temp.Passengers.includes(car.traits.Passengers))
        temp={
            ...temp,
            Passengers: [...temp.Passengers, car.traits.Passengers],
          };
        if (!temp.Transmission.includes(car.traits.Transmission))
        temp={
            ...temp,
            Transmission: [
              ...temp.Transmission,
              car.traits.Transmission,
            ],
          }
      });
      setGivenFilters(temp)
      props.setCars(null);
    }
    return () => {
      isMounted = false;
    };
  }, [props.cars]);
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(5 ,1fr)",
        gridAutoRows: "100%",
        backgroundColor: "#FFFFFF",
        marginTop: "87px",
      }}
    > 
      <Box //filtra
        sx={{
          width: "100%",
          height: "100vh",
          gridRow: "1",
          backgroundColor:'#e5f5f5'
        }}
      >
        <FilterBox filters={(index) => setChecked(index)} givenfilters={givenFilters} />
      </Box>

      <Box
        sx={{
          //amaksia
          gridRow: "1",
          gridColumn: "span 4",
          // backgroundColor: "#f0f7f7",
          backgroundColor: "#b5d5d5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "65%",
              height: "45%",
              marginTop:'10px'
            }}
          >
            <DateBox setCars={props.setCars} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#b5d5d5",
          }}
        >
          {cars?cars.cars.map((x, index) => {
            try {
              if (
                (checked.doors.includes(x.traits.doors) ||
                  checked.doors.length === 0) &&
                (checked.ac.includes(x.traits["A/C"]) || checked.ac.length === 0) &&
                (checked.fuel.includes(x.traits.Fuel) || checked.fuel.length === 0) &&
                (checked.passengers.includes(x.traits.Passengers) ||
                  checked.passengers.length === 0) &&
                (checked.gearbox.includes(x.traits.Transmission) ||
                  checked.gearbox.length === 0) &&
                (checked.luggage.includes(x.traits.Luggage) ||
                  checked.luggage.length === 0)
              ) {
                return <VehicleBox info={x} key={index} days={cars.daysBooked}/>;
              }
            } catch (error) {
               return <VehicleBox info={x} key={index} />;
            }
          }): (<div></div>)}
        </Box>
      </Box>
    </Box>
  );
}

export default VehicleScreen;
