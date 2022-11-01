
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Filter from "./Filter";
import React, {  useEffect } from "react";

function FilterBox(props) {
  const [filtersChecked, setChecked] = React.useState(null);
  const [doors, setDoors] = React.useState([]);
  const [ac, setAc] = React.useState([]);
  const [luggage, setLuggage] = React.useState([]);
  const [passengers, setPassengers] = React.useState([]);
  const [fuel, setFuel] = React.useState([]);
  const [gearbox, setGearbox] = React.useState([]);
  const [change, setChange] = React.useState(false);

 
  useEffect(() => {
    let temp={
      doors:doors,
      ac:ac,
      luggage:luggage,
      passengers:passengers,
      fuel:fuel,
      gearbox:gearbox,
    }
    setChecked(temp);
    props.filters(temp)
  }, [change,props.givenfilters]);
 
  return (
    <List
      sx={{ width: "100%", backgroundColor:'#e5f5f5', }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{backgroundColor:'#e5f5f5', }}>
          Filters
        </ListSubheader>
      }
    >
      
      <Filter
        name="Doors"
        info={props.givenfilters.Doors}
        filterProp={(input) => setDoors(input)}
        change={change}
        changeHandler={(input) => setChange(input)}
      />
      <Filter
        name="Passenger Seats"
        info={props.givenfilters.Passengers}
        filterProp={(input) => setPassengers(input)}
        change={change}
        changeHandler={(input) => setChange(input)}
      />
      <Filter
        name="Luggage"
        info={props.givenfilters.Luggage}
        filterProp={(input) => setLuggage(input)}
        change={change}
        changeHandler={(input) => setChange(input)}
      />
      <Filter
        name="A/C"
        info={props.givenfilters['A/C']}
        filterProp={(input) => setAc(input)}
        change={change}
        changeHandler={(input) => setChange(input)}
      />
      <Filter
        name="Transmission"
        info={props.givenfilters.Transmission}
        filterProp={(input) => setGearbox(input)}
        change={change}
        changeHandler={(input) => setChange(input)}
      />
      <Filter
        name="Fuel"
        info={props.givenfilters.Fuel}
        filterProp={(input) => setFuel(input)}
        change={change}
        changeHandler={(input) => setChange(input)}
      />
    </List>
  );
}

export default FilterBox;
