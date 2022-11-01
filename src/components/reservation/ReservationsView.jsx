import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Id", flex: 2 },
  { field: "pickupDate", headerName: "Pick up Date", flex: 2, align: "left" },
  { field: "pickupLocation", headerName: "Pick up Location", flex: 2 },
  { field: "dropoffDate", headerName: "Drop off Date", flex: 2 },
  { field: "dropoffLocation", headerName: "Drop off Location", flex: 2 },
  { field: "payment", headerName: "Payment Type", flex: 2 },
  { field: "amount", headerName: "Amount", flex: 2 },
  { field: "status", headerName: "Status", flex: 2 },
];

function createReservations(map) {
  const rows = [];

  if (map !== undefined) {
    for (var key in map) {
      rows.push({
        id: map[key]["id"],
        pickupDate: map[key]["pickupDate"],
        pickupLocation: map[key]["pickupLocation"],
        dropoffDate: map[key]["dropoffDate"],
        dropoffLocation: map[key]["dropoffLocation"],
        payment: map[key]["paymentType"],
        amount: map[key]["amount"],
        status: map[key]["status"],
      });
    }
  }

  return rows;
}

export default function DataTable() {
  const [idx, setIdx] = useState();
  const [dataMap, setDataMap] = useState();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [dialog, setDialog] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [refreshReservations, setRefreshReservations] = useState(false);

  useEffect(() => {
    if (dataMap === undefined || refreshReservations === true) {
      console.log("call to db");
      setShowCustomer(false)
      fetch("http://localhost:8080/admin/reservations/page/1", {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((args) => {
            var obj = {};
            args["result"].forEach((val) => {
              setTotalPages(args["totalPages"] * 10);
              obj[val["id"]] = val;
            });
            setDataMap(obj);
            
          });
        }
        console.log(dataMap)
      });

      setRefreshReservations(false);
      setIdx(0)
    } else {
    }
  }, [refreshReservations, totalPages, page]);

  return (
    <Box sx={{ height: 650, width: "100%" }}>
      <Grid item sx={{ width: "100%", height: "100%" }}>
        <DataGrid
          sx={{ height: 650, width: "100%" }}
          // page={0}
          rows={createReservations(dataMap)}
          columns={columns}
          onPageChange={(newPageSize) => {
            setPage(newPageSize);
            console.log("new Page"+newPageSize);
            setRefreshReservations(true);
          }}
          pagination
          pageSize={10}
          paginationMode="server"
          rowCount={totalPages}
          onSelectionModelChange={(row) => {
            console.log("Changing to true")
            setShowCustomer(true);           
            setIdx(row[0]);
          }}
        />
      </Grid>
      {idx !== undefined &&  (
        <Grid item sx={{ width: "100%", height: "100%" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Addres</TableCell>
                  <TableCell>ZipCode</TableCell>
                </TableRow>
              </TableHead>
              {showCustomer && (
                <TableBody>
                  <TableCell>{dataMap[idx]["firstName"]}</TableCell>
                  <TableCell>{dataMap[idx]["lastName"]}</TableCell>
                  <TableCell>{dataMap[idx]["email"]}</TableCell>
                  <TableCell>{dataMap[idx]["phone"]}</TableCell>
                  <TableCell>{dataMap[idx]["country"]}</TableCell>
                  <TableCell>{dataMap[idx]["address"]}</TableCell>
                  <TableCell>{dataMap[idx]["zipCode"]}</TableCell>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Grid>
      )}
    </Box>
  );
}
