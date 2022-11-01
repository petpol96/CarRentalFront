import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LocationAddDialog from "./LocationAddDialog";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";

export default function LocationsView() {
  const [locations, setLocations] = useState([]);
  const [addDialog, setAddDialog] = useState(false);
  const [update, setUpdate] = useState(false);
  const [editedLocation, setEditedLocation] = useState();
  const [alert, setAlert] = useState(false);
  const [alertOperation, setAlertOperation] = useState();

  useEffect(() => {
    if (locations.length < 1 || update === true) {
      console.log("fetching");
      fetch("http://142.93.96.161:8080/admin/location/findAll", {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          console.log("Got answer from back");
          response.json().then((args) => {
            setLocations(args);
          });
          console.log(locations);
        }
        setUpdate(false);
      });
    }
    console.log("!!!");
  }, [locations, update]);

  const forceUpdate = () => {
    setUpdate(true);
  };

  return (
    <Box>
      <LocationAddDialog
        open={addDialog}
        close={() => {
          setEditedLocation();
          setAddDialog(false);
        }}
        onSave={forceUpdate}
        location={editedLocation}
        returnAction={() => {
          setAlertOperation("saved");
          setAlert(true);
        }}
      />

      <Button
        onClick={() => {
          setAddDialog(true);
        }}
        variant="contained"
      >
        Add Location
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="trait table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Gr</TableCell>
              <TableCell>International</TableCell>
              <TableCell>Latidue</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map((location) => {
              return (
                <TableRow>
                  <TableCell>{location["id"]}</TableCell>
                  <TableCell>{location["grText"]}</TableCell>
                  <TableCell>{location["multiLangText"]}</TableCell>
                  <TableCell>{location["latitude"]}</TableCell>
                  <TableCell>{location["longitude"]}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon
                        onClick={() => {
                          setEditedLocation(location);
                          setAddDialog(true);
                        }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
