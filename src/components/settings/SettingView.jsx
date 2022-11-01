import React from 'react'

function SettingView() {

  const response={
    "languages":['Greek','English','Italian'],
    "contents":[{
        "id":1,
        "name":"name1",
        "language":"Greek",
        "text":"text"
    },
    {
        "id":2,
        "name":"name2",
        "language":"English",
        "text":"text"
    },
    {
        "id":3,
        "name":"name3",
        "language":"Italian",
        "text":"text"
    }
]

}
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="trait table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Gr</TableCell>
              <TableCell>International</TableCell>
              <TableCell>Latidue</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map((location) => {
              return (
                <TableRow>
                  <TableCell>{location["id"]}</TableCell>
                  <TableCell>{location["grText"]}</TableCell>
                  <TableCell>{location["multiLangText"]}</TableCell>
                  <TableCell>{location["latitude"]}</TableCell>
                  <TableCell>{location["longitude"]}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon
                        onClick={() => {
                          setEditedLocation(location);
                          setAddDialog(true);
                        }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default SettingView