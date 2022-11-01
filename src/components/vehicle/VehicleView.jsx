import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import VehicleDialog from "./VehicleDialog";
import Box from "@mui/material/Box";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import CheckIcon from "@mui/icons-material/Check";

export default function VehicleView() {
  const [vehicles, setVehicles] = useState([]);
  const [update, setUpdate] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [editedVehicle, setEditedVehicle] = useState();

  useEffect(() => {
    console.log("Useeffect [VehicleView]");
    if (vehicles.length < 1 || update) {
      console.log("DB fetch vehicles");
      fetch("http://localhost:8080/admin/vehicles/getAll", {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((args) => {
            var temp = [];
            args.forEach((val) => {
              temp.push(val);
            });
            setVehicles(temp);
            setUpdate(false);
          });
        }
      });
    }
  }, [vehicles, update]);

  const createVehicle = () => {
    setDialog(true);
  };

  const forceUpdate = () => {
    setUpdate(true);
  };

  const editVehicle = (vehicle) => {
    console.log(vehicle["id"]);
  };

  return (
    <Box>
      <Button onClick={createVehicle} variant="outlined">
        Create Vehicle
      </Button>
      <Table sx={{ minWidth: 650 }} aria-label="vehicle table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Current Rate</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        {vehicles.length > 0 && (
          <TableBody>
            {vehicles.map((vehicle) => {
              return (
                <TableRow>
                  <TableCell>{vehicle["id"]}</TableCell>
                  <TableCell>{vehicle["title"]}</TableCell>
                  <TableCell>{vehicle["currentRate"]}</TableCell>
                  <TableCell>{vehicle["rate"]}</TableCell>
                  {vehicle["active"] !== true ? (
                    <TableCell>
                      <DoNotDisturbIcon />
                    </TableCell>
                  ) : (
                    <TableCell>
                      <CheckIcon />
                    </TableCell>
                  )}

                  <TableCell>
                    <Button
                      onClick={() => {
                        console.log(vehicle["title"]);
                        setEditedVehicle(vehicle);
                        setDialog(true);
                      }}
                      size="small"
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
      <VehicleDialog
        vehicle={editedVehicle}
        open={dialog}
        refresh={forceUpdate}
        close={() => {
          setEditedVehicle();
          setDialog(false);
        }}
      />
    </Box>
  );
}
