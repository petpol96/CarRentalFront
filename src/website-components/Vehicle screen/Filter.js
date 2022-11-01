import { Checkbox, ListItem, Paper } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import GroupIcon from "@mui/icons-material/Group";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Suitcase from "@mui/icons-material/WorkOutline";

function Filter(props) {
  const handleClick = () => {
    setOpen(!open)
  };
  const [checked, setChecked] = React.useState([]);
  const [open, setOpen] = React.useState(true)

  const checkHandler = (input) => {
    let temp = checked;
    temp.includes(input)
      ? temp.splice(
          temp.findIndex((x) => {
            return x === input;
          }),
          1
        )
      : temp.push(input);
    setChecked(checked);
    props.filterProp(temp);
    props.changeHandler(!props.change);
  };

  const iconPicker = () => {
    if (props.name === "Doors")
      return (
        <Icon
          icon="mdi:car-door"
          sx={{ color: "#000000" }}
          width="35"
          height="35"
        />
      );
    else if (props.name === "Passenger Seats")
      return <GroupIcon sx={{ color: "#000000" }} fontSize={"large"} />;
    else if (props.name === "Fuel")
      return (
        <LocalGasStationIcon sx={{ color: "#000000" }} fontSize={"large"} />
      );
    else if (props.name === "Transmission")
      return (
        <Icon
          sx={{ color: "#000000" }}
          icon="tabler:manual-gearbox"
          width="35"
          height="35"
        />
      );
    else if (props.name === "Luggage")
      return <Suitcase fontSize={"large"} sx={{ color: "#000000" }} />;
    else if (props.name === "A/C")
      return (
        <AcUnitIcon fontSize={"large"} sx={{ color: "#000000" }}></AcUnitIcon>
      );
  };
  const filterMap = () => {
    if (props.info !== undefined)
     return(
    <List component="div" disablePadding>
      {props.info.map((x, index) =>
      { return(
        <ListItemButton sx={{ pl: 4 }} key={index}>
          <ListItemIcon>
            <Checkbox edge="start" onClick={() => checkHandler(x)} />
          </ListItemIcon>
          <ListItemText primary={x} />
        </ListItemButton>)
      }
      )}
    </List>)
  };
  return (
    <>
      <ListItemButton onClick={handleClick} >
        <ListItemIcon>{iconPicker()}</ListItemIcon>
        <ListItemText primary={props.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {filterMap()}
      </Collapse>
      <Divider />
    </>
  );
}

export default Filter;
