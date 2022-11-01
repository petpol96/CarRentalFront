import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function TraitAddDialog(props) {
  const [languages, setLanguages] = useState([]);
  const [value, setValue] = useState();
  const [traitMap, setTraitMap] = useState({});

  useEffect(() => {
    if (languages.length < 1) {
      console.log("Db call languages[TraitAddDialog]");
      var map = {};
      fetch("http://localhost:8080/getLanguages", {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((args) => {
            console.log("Total languages found: " + args["languages"].length);
            console.log(args["languages"]);
            args["languages"].forEach((val) => {
              languages.push(val);
              map[val] = "";
            });
            setTraitMap(map);
          });
        }
      });
    }
  }, []);

  const createContentDTO = () => {
    var dto = [];
    for (var key in traitMap) {
      dto.push({
        language: key,
        text: traitMap[key],
      });
    }

    console.log("DTO is" + dto);
    return dto;
  };

  const handleYes = () => {
    fetch("http://localhost:8080/admin/create/content", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entityType: "CONTENT-TRAIT",
        entityId: props.typeId,
        contents: createContentDTO(),
      }),
    });

    props.returnAction();
    props.refresh();
    props.close();
  };


  const handleChange = (event, language) => {
    traitMap[language] = event.target.value;
    console.log(traitMap);
    console.log(language);
  };

  return (
    <Dialog open={props.open} onClose={props.close}>
      <DialogTitle id="alert-dialog-title">Create a new Trait</DialogTitle>
      {languages.length > 0 && (
        <DialogContent>
          <Stack
            sx={{ width: "100%", height: "100%" }}
            component="paper"
            spacing={2}
          >
            {languages.map((lang) => (
              <TextField
                label={lang}
                variant="outlined"
                onChange={(event) => {
                  handleChange(event, lang);
                }}
              />
            ))}
          </Stack>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleYes}>Save</Button>
        <Button onClick={props.close} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
