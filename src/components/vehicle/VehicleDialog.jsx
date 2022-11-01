import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import TransferList from "../commons/TransferList";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExtrasTraitSelect from "./ExtrasTraitSelect";

const TraitSelect = (props) => {
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [value, setValue] = useState("");

  var traitIds = [];

  useEffect(() => {
    if (props.vehicle !== undefined) {
      console.log("useeffect trsitselect");
      console.log(props.vehicle["traitMap"][props.typeName]);
      setValue(props.vehicle["traitMap"][props.typeName]);
      props.addTraitId(
        props.typeName,
        props.vehicle["traitMap"][props.typeName]
      );
    }
    if (selectedTraits.length < 1) {
      setSelectedTraits(props.traits);
    }
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.addTraitId(props.typeName, event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="trait-select-label">{props.typeName}</InputLabel>
        <Select
          labelId="trait-select-label"
          id="trait-select"
          value={value}
          label={props.typeName}
          onChange={handleChange}
        >
          {selectedTraits.length > 0 &&
            selectedTraits.map((trait) => {
              return <MenuItem value={trait["id"]}>{trait["text"]}</MenuItem>;
            })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default function VehicleDialog(props) {
  const [activeCheck, setActiveCheck] = useState(true);
  const [traitTypes, setTraitTypes] = useState([]);

  var selectIdMap = {};
  var traitIds = [];

  useEffect(() => {
    if (traitTypes.length < 1) {
      console.log("Fetching trait types");
      fetch("http://localhost:8080/admin/vehicles/traitTypesInfo", {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((args) => {
            setTraitTypes(args["traitTypes"]);
            console.log(args["traitTypes"]);
          });
        }
      });
    }
  }, []);

  var json = {
    id: props.vehicle !== undefined ? props.vehicle["id"] : null,
    title: props.vehicle !== undefined ? props.vehicle["title"] : "",
    rate: props.vehicle !== undefined ? props.vehicle["rate"] : 0,
    currentRate: props.vehicle !== undefined ? props.vehicle["currentRate"] : 0,
    image: props.vehicle !== undefined ? props.vehicle["image"] : "",
    active: activeCheck,
    traitIds: [],
  };

  const initializeJson = () => {};

  const handleChange = (event) => {
    setActiveCheck(event.target.checked);
    json["active"] = activeCheck;
  };

  const handleTextField = (key, value) => {
    json[key] = value;
  };

  const addTraitId = (key, value) => {
    selectIdMap[key] = value;
    console.log("Current map is");
    console.log(selectIdMap);
  };

  const addExtraTraitId = (value) => {
    console.log("!!!!!!!")
  };

  const handleYes = () => {
    for (var key in selectIdMap) {
      if (key !== "Extras") {
        traitIds.push(selectIdMap[key]);
      } else {
        selectIdMap[key].forEach((id) => {
          traitIds.push(id);
        });
      }
    }

    json["traitIds"] = traitIds;
    fetch("http://localhost:8080/admin/vehicles/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });

    props.refresh();
    props.close();
  };
  return (
    <Dialog fullWidth={true} open={props.open} onClose={props.close}>
      <DialogTitle id="alert-dialog-title">Create a new Vehicle</DialogTitle>
      <DialogContent>
        <Stack spacing={0.8}>
          <Typography variant="h7">Basic Information</Typography>
          <TextField
            onChange={(event) => {
              handleTextField("title", event.target.value);
            }}
            label="Title"
            defaultValue={
              props.vehicle === undefined ? "" : props.vehicle["title"]
            }
            required
          />
          <TextField
            onChange={(event) => {
              handleTextField("rate", event.target.value);
            }}
            label="Rate"
            defaultValue={
              props.vehicle === undefined ? "" : props.vehicle["rate"]
            }
            required
          />
          <TextField
            onChange={(event) => {
              handleTextField("currentRate", event.target.value);
            }}
            label="Current Rate"
            defaultValue={
              props.vehicle === undefined ? "" : props.vehicle["currentRate"]
            }
            required
          />
          <TextField
            onChange={(event) => {
              handleTextField("image", event.target.value);
            }}
            label="Image path"
            required
          />
          <Divider />
          <Typography variant="h7">Traits</Typography>
          {props.vehicle !== undefined
            ? traitTypes.length > 0 &&
              traitTypes.map((traitType) => {
                if (traitType["text"] !== "Extras") {
                  return (
                    <TraitSelect
                      vehicle={props.vehicle}
                      typeName={traitType["text"]}
                      traits={traitType["traits"]}
                      addTraitId={addTraitId}
                    />
                  );
                } else {
                  return <ExtrasTraitSelect 
                  addTraitId={addTraitId}
                  traits={traitType["traits"]} />;
                }
              })
            : traitTypes.map((traitType) => {
                if (traitType["text"] !== "Extras") {
                  return (
                    <TraitSelect
                      vehicle={props.vehicle}
                      typeName={traitType["text"]}
                      traits={traitType["traits"]}
                      addTraitId={addTraitId}
                    />
                  );
                } else {
                  return (
                    <ExtrasTraitSelect
                      addTraitId={addTraitId}
                      traits={traitType["traits"]}
                    />
                  );
                }
              })}

          <FormControlLabel
            label="Active"
            control={<Switch checked={activeCheck} onChange={handleChange} />}
          ></FormControlLabel>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleYes}>Save</Button>
        <Button onClick={props.close} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
