import React, { useEffect, useState, Fragment } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TextField from "@mui/material/TextField";

const EditableTableCell = (props) => {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(props.text);
    console.log("[editableCell] useffect");
    console.log(props.text);
  }, [props]);

  return (
    <TableCell sx={{ flex: 1 }}>
      {props.mode ? (
        <TextField
          defaultValue={props.text}
          variant="standard"
          onChange={(event) => {
            props.change(event.target.value, props.id);
          }}
        />
      ) : (
        <>{content}</>
      )}
    </TableCell>
  );
};

export default function TraitTableRow(props) {
  const [rowData, setRowData] = useState();
  const [editMode, setEditMode] = useState(false);
  const [rowResponse, setRowResponse] = useState({});

  useEffect(() => {
    console.log("Use effect[TraitTableRow]");
    setRowData(props.data);
  }, [editMode, rowData, props.data]);

  const handleCheck = () => {
    fetch("http://localhost:8080/admin/update/content", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entityType: "CONTENT-TRAIT",
        entityId: rowResponse["id"],
        text: rowResponse["value"],
      }),
    });
    props.onDataRenew();
    setEditMode(false);
  };

  const change = (newValue, contentId) => {
    //change this to db call
    console.log("changing row response");
    setRowResponse({ value: newValue, id: contentId });
  };

  const handleDelete = () => {
    props.onDelete(props.data["id"]);
  };

  return (
    <TableRow>
      {rowData !== undefined && (
        <>
          {editMode ? (
            <TableCell sx={{ width: 250 }}>
              <IconButton onClick={handleCheck}>
                <CheckIcon />
              </IconButton>
              <IconButton>
                <ClearIcon
                  onClick={() => {
                    setEditMode(false);
                  }}
                />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteForeverIcon />
              </IconButton>
            </TableCell>
          ) : (
            <TableCell sx={{ width: 100 }}>
              <IconButton
                onClick={() => {
                  setEditMode(true);
                }}
              >
                <EditIcon />
              </IconButton>
            </TableCell>
          )}
          <TableCell sx={{ width: 100 }}>{rowData.id}</TableCell>
          {rowData.contents.map((content, index) => {
            console.log("Text: " + content["text"]);
            return (
              <EditableTableCell
                mode={editMode}
                text={content["text"]}
                id={content["id"]}
                change={change}
              />
            );
          })}
        </>
      )}
    </TableRow>
  );
}
