import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Alert from '@mui/material/Alert';

export default function DeleteDialog(props) {

  const handleYes = ()=>{
    console.log(props.target)
    fetch(props.target,{
      method: "DELETE",
    })

    props.refresh()
    props.close()
  }

  return (
    <Dialog
      open={ props.open}
      onClose={props.close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Alert severity="error">Record Delete</Alert>
     
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You are about to delete some {props.name} records.Are you sure you
          want to proceed? This change cannot be reverted
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleYes}>Yes</Button>
        <Button onClick={props.cancel} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}