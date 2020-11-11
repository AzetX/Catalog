import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { keys } from '@material-ui/core/styles/createBreakpoints';

export default function Checkboxes({product}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked)
  };
  console.log(product)

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}