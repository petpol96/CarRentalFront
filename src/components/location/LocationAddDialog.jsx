import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import AlertOperation from "../commons/AlertOperation";

export default function LocationAddDialog(props) {

  const [alert, setAlert] = useState(false);
  const [alertOperation, setAlertOperation] = useState();


  var json = {
    id: props.location !== undefined ? props.location["id"] : null,
    grText: props.location !== undefined ? props.location["grText"] : null,
    multiLangText:
      props.location !== undefined ? props.location["multiLangText"] : null,
    longitude:
      props.location !== undefined ? props.location["longitude"] : null,
    latitude: props.location !== undefined ? props.location["latitude"] : null,
  };

  const handleTextField = (key, value) => {
    json[key] = value;
  };

  const handleYes = () => {
    
    fetch("http://localhost:8080/admin/location/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });
    props.returnAction();
    props.onSave();
    props.close();
    setAlert(true)
    setAlertOperation("Saved")
  };

  const deleteLocation = () => {
    fetch(
      "http://localhost:8080/admin/location/delete?id=" + props.location["id"],
      {
        method: "DELETE",
      }
    );
    props.returnAction();
    props.onSave();
    props.close();
    setAlert(true)
    setAlertOperation("Deleted")
  };

  return (
    <Box>
      <AlertOperation
        onReturn={() => setAlert(false)}
        alert={alert}
        operation={alertOperation}
        operationName="Location"
      />
      <Dialog open={props.open} onClose={props.close}>
        <DialogTitle id="alert-dialog-title">Create a new Location</DialogTitle>
        <DialogContent>
          <Stack
            sx={{ width: "100%", height: "100%" }}
            component="paper"
            spacing={2}
          >
            <TextField
              onChange={(event) => {
                handleTextField("grText", event.target.value);
              }}
              label="Gr Text"
              variant="outlined"
              defaultValue={
                props.location === undefined ? "" : props.location["grText"]
              }
            />

            <TextField
              onChange={(event) => {
                handleTextField("multiLangText", event.target.value);
              }}
              label="International Text"
              variant="outlined"
              defaultValue={
                props.location === undefined
                  ? ""
                  : props.location["multiLangText"]
              }
            />

            <TextField
              onChange={(event) => {
                handleTextField("longitude", event.target.value);
              }}
              label="Longitude"
              variant="outlined"
              defaultValue={
                props.location === undefined ? "" : props.location["longitude"]
              }
            />

            <TextField
              onChange={(event) => {
                handleTextField("latitude", event.target.value);
              }}
              label="Latitude"
              variant="outlined"
              defaultValue={
                props.location === undefined ? "" : props.location["latitude"]
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYes}>Save</Button>
          <Button onClick={props.close} autoFocus>
            Cancel
          </Button>
          {props.location && <Button onClick={deleteLocation}>Delete</Button>}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
