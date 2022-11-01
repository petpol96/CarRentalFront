import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import TocIcon from "@mui/icons-material/Toc";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import LanguageAddDialog from "./LanguageAddDialog";
import AlertOperation from "../commons/AlertOperation";
import DeleteDialog from "../commons/DeleteDialog";
import ReactCountryFlag from "react-country-flag";

export default function LanguageView() {
  const [languages, setLanguages] = useState([]);
  const [deletedLanguages, setDeletedLanguages] = useState([]);
  const [addDialog, setAddDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [check, setCheck] = useState(false);
  const [update, setUpdate] = useState(false);
  const [alert, setAlert] = useState(false);

  var [alertOperation, setAlertOperation] = useState();

  useEffect(() => {
    console.log("Useeffect [LanguageView]");
    if (languages.length < 1 || update === true) {
      console.log("DB get languages");
      fetch("http://localhost:8080/admin/languages", {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          console.log("Got answer from back");
          response.json().then((args) => {
            var temp = [];
            args.forEach((val) => {
              if (val["language"] === "EN") {
                val["language"] = "GB";
              }
              temp.push(val);
            });
            setLanguages(temp);
            setUpdate(false);
          });
        }
      });

      // setLanguages(temp);
      console.log(languages.length);
    }
  }, [check, alert, languages, deletedLanguages, addDialog, update]);

  const forceUpdate = () => {
    setCheck(false);
    setLanguages([]);
    setUpdate(true);
  };

  const toggleDeletedLanguage = (event) => {
    if (event.target.checked) {
      deletedLanguages.push(event.target.id);
    } else {
      deletedLanguages.splice(deletedLanguages.indexOf(event.target.id));
    }
    console.log(deletedLanguages);
    setCheck(deletedLanguages.length > 0);
  };

  const addLanguage = () => {
    setAlertOperation("Created");
    setAddDialog(true);
  };

  const formatDelete = () => {
    var request = "";
    deletedLanguages.forEach((lang) => {
      request += "id" + deletedLanguages.indexOf(lang) + "=" + lang + "&";
    });
    return request.slice(0, -1);
  };

  return (
    <Stack>
      <AlertOperation
        onReturn={() => setAlert(false)}
        alert={alert}
        operation={alertOperation}
        operationName="Language"
      />
      <LanguageAddDialog
        close={() => {
          setAddDialog(false);
        }}
        open={addDialog}
        refresh={forceUpdate}
        returnAction={() => {
          setAlert(true);
        }}
      />
      <Box>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          direction="right"
          icon={<TocIcon fontSize="small" />}
        >
          <SpeedDialAction
            icon={<AddIcon />}
            tooltipTitle="add"
            onClick={addLanguage}
          />
          {check && (
            <SpeedDialAction
              icon={<DeleteIcon />}
              tooltipTitle="delete"
              onClick={() => {
                setDeleteDialog(true);
              }}
            />
          )}
        </SpeedDial>
      </Box>
      <Box>
        {languages.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="trait table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Language</TableCell>
                  <TableCell>Flag</TableCell>
                  <TableCell>Select</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {languages.map((language) => {
                  return (
                    <TableRow>
                      <TableCell>{language["id"]}</TableCell>
                      <TableCell>{language["language"]}</TableCell>
                      <TableCell>
                        <ReactCountryFlag
                          svg
                          countryCode={language["language"]}
                        />
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          id={String(language["id"])}
                          onChange={toggleDeletedLanguage}
                          padding="checkbox"
                        ></Checkbox>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <DeleteDialog
          close={() => {
            setAlertOperation("Deleted");
            setAlert(true);
            setDeleteDialog(false);
          }}
          open={deleteDialog}
          refresh={() => {
            forceUpdate();
          }}
          cancel={() => setDeleteDialog(false)}
          name="Languages"
          target={
            "http://localhost:8080/admin/delete/languages/?" + formatDelete()
          }
        />
      </Box>
    </Stack>
  );
}
