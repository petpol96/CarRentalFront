import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";

export default function AlertOperation(props) {
  const [alert, setAlert] = useState(false);
  const [alertOperation, setAlertOperation] = useState();
  const [operationName, setOperationName] = useState();

  useEffect(() => {
    console.log("useEffect[AlertOperation]");
    setAlertOperation(props.operation);
    setOperationName(props.operationName);
    setAlert(props.alert);
    if (alert) {
      setTimeout(() => {
        props.onReturn();
      }, 3000);
    }
  }, [props]);

  return (
    <Box>
      {alert && (
        <Slide direction="down" in={alert}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {alertOperation} {operationName}  successfully
          </Alert>
        </Slide>
      )}
    </Box>
  );
}
