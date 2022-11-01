import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TraitTable from "./TraitTable";
import TraitAddDialog from "./TraitAddDialog";

export default function TraitsView() {
  const [traitTypes, setTraitTypes] = useState();
  const [value, setValue] = useState();
  const [dialog, setDialog] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    console.log("useEffect[TraitsView]");
    if (traitTypes === undefined) {
      console.log("Fetching trait types");
      fetch("http://localhost:8080/admin/traittypes", {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((args) => {
            var typesDictionary = {};
            args["traitTypes"].forEach((val) => {
              typesDictionary[val["text"]] = val["id"];
            });
            setTraitTypes(typesDictionary);
            console.log(typesDictionary);
          });
        }
      });
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      {traitTypes !== undefined && (
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: 200,
            height: 300,
          }}
          centered
          variant="fullWidth"
        >
          <Tab label="Fuel" value="Fuel" in />
          <Tab label="Passengers" value="Passengers" />          
          <Tab label="Doors" value="Doors" />
          <Tab label="Transmission" value="Transmission" />
          <Tab label="A/C" value="A/C" />
          <Tab label="Luggage" value="Luggage" />
        </Tabs>
      )}
      {traitTypes !== undefined && (
        <Box sx={{ marginLeft: 5, padding: 1, height: 650, width: "100%" }}>
          <TraitTable typeId={traitTypes[value]} />
        </Box>
      )}
    </Box>
  );
}
