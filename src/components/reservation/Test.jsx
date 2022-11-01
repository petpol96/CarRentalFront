import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function Test() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
    color="primary"
    padding="checkbox"
  />
  );
}
