import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function AdminPanelView() {
  const sendRequest = (endpoint) => {
    fetch("http://localhost:8080/admin/purge/" + endpoint, {
      method: "DELETE",
    });
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={() => {
          sendRequest("traits");
        }}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete Traits
      </Button>
      <Button
        onClick={() => {
          sendRequest("trait-types");
        }}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete Trait Types
      </Button>
      <Button
        onClick={() => {
          sendRequest("languages");
        }}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete Languages
      </Button>
      <Button
        onClick={() => {
          sendRequest("vehicles");
        }}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete Vehicles
      </Button>
      <Button
        onClick={() => {
          sendRequest("all");
        }}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete All
      </Button>
    </Stack>
  );
}
