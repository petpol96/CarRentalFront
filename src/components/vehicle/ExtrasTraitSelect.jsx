import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function ExtrasTraitSelect(props) {
  const [extraName, setextraName] = React.useState([]);
  const [traitData, setTraitData] = useState([]);

  useEffect(() => {
    if (traitData.length < 1) {
      console.log("Extrras:");
      console.log(props.traits);
      setTraitData(props.traits);
    }
  }, []);

  const test = (t) => {
    console.log(t);
    var ids = [];
    t.forEach((element) => {
      console.log(element["text"]);
      ids.push(element["id"]);
    });
    console.log(ids);
    props.addTraitId("Extras", ids);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setextraName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    var ids = [];
    value.forEach((element) => {
      ids.push(element["id"]);
    });
    props.addTraitId("Extras", ids);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="multiple-chip-label">Extras</InputLabel>
      <Select
        labelId="multiple-chip-label"
        id="multiple-chip"
        multiple
        value={extraName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Extras" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value["id"]} label={value["text"]} />
            ))}
          </Box>
        )}
      >
        {props.traits.map((trait) => (
          <MenuItem value={trait}>{trait["text"]}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
