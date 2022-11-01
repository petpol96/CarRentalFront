import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function LanguageAddDialog(props) {
  const [newLanguage, setNewLanguage] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {}, []);

  const handleYes = () => {
    console.log("I add language " + newLanguage);
    fetch("http://localhost:8080/admin/create/language", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: newLanguage,
      }),
    });

    props.refresh();
    props.close();
    props.returnAction();
  };

  const handleLanguage = (event) => {
    setNewLanguage(event.target.value);
  };

  return (
    <Dialog open={props.open} onClose={props.close}>
      <DialogContent>
        <Stack
          sx={{ width: "100%", height: "100%" }}
          component="paper"
          spacing={2}
        >
          <TextField
            onChange={(event) => {
              handleLanguage(event);
            }}
            label="language"
            variant="outlined"
          ></TextField>
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
