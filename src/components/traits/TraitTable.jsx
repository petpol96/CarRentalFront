import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TraitTableRow from "./TraitTableRow";
import DeleteDialog from "../commons/DeleteDialog";
import TraitAddDialog from "./TraitAddDialog";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Slide from "@mui/material/Slide";

export default function TraitTable(props) {
  const [traitData, setTraitData] = useState();
  const [languages, setLanguages] = useState([]);
  const [typeId, setTypeId] = useState();
  const [update, setUpdate] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [addDialog, setAddDialog] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertOperation, setAlertOperation] = useState();
  const [selectedEntity, setSelectedEntity] = useState();

  useEffect(() => {
    console.log("[TraitTable] useeffect");
    setTypeId(undefined);

    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }

    if (
      languages.length < 1 ||
      traitData === undefined ||
      update === true ||
      typeId === undefined
    ) {
      setTypeId(props.typeId);
      console.log("Db call languages and trait Data[TraitTable]");
      console.log(
        "Hitting " +
          "http://localhost:8080/admin/trait-information?traitTypeId=" +
          props.typeId
      );
      fetch(
        "http://localhost:8080/admin/trait-information?traitTypeId=" +
          props.typeId,
        {
          method: "GET",
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((args) => {
            if (args["languages"].length !== languages.length) {
              args["languages"].forEach((val) => {
                languages.push(val);
              });
            }

            setTraitData(args["traits"]);
            setUpdate(false);
          });
        }
      });
    }
  }, [traitData, update, deleteDialog, props.typeId]);

  const forceUpdate = () => {
    console.log("Force update[TraitTable]");
    setTraitData();
    setUpdate(true);
  };

  return (
    <Box>
      {alert && (
        <Slide direction="down" in={alert}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Trait {alertOperation} successfully
          </Alert>
        </Slide>
      )}

      <TraitAddDialog
        close={() => {
          setAddDialog(false);
        }}
        open={addDialog}
        refresh={forceUpdate}
        returnAction={() => {
          setAlertOperation("saved");
          setAlert(true);
        }}
        name={"value"}
        typeId={props.typeId}
      />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item sx={{ width: "100%", height: "100%" }}>
          <Button
            onClick={() => {
              setAddDialog(true);
            }}
            variant="contained"
          >
            Add Trait
          </Button>
        </Grid>

        <Grid item sx={{ width: "100%", height: "100%" }}>
          <TableContainer component={Paper}>
            {traitData !== undefined && languages.length > 0 && (
              <Table sx={{ minWidth: 650 }} aria-label="trait table">
                <TableHead>
                  <TableRow>
                    <TableCell>Edit</TableCell>
                    <TableCell>Id</TableCell>
                    {languages.map((lang) => {
                      return <TableCell>{lang}</TableCell>;
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {traitData.map((trait) => {
                    return (
                      <TraitTableRow
                        onDataRenew={() => {
                          forceUpdate();
                        }}
                        data={trait}
                        onDelete={(val) => {
                          setSelectedEntity(val);
                          setDeleteDialog(true);
                        }}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            )}
            <DeleteDialog
              close={() => {
                setAlertOperation("deleted");
                setAlert(true);
                setDeleteDialog(false);
              }}
              open={deleteDialog}
              cancel = {() => setDeleteDialog(false)}
              refresh={() => {
                forceUpdate();
              }}
              name="Traits"
              target={
                "http://localhost:8080/admin/delete-trait?traitId=" +
                selectedEntity
              }
            />
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
