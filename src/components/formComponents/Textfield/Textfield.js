import React from 'react';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';

class Textfield extends React.Component {

  render(){
    const {
      input: { onChange },
      f
    } = this.props
  return (
    <TextField 
    required={f.req}
    id={f.name}
    label={f.placeholder}
    fullWidth
    autoComplete={f.name}
    onChange={targetValue => onChange(targetValue)}
    />
  )
  }
}  

export default (Textfield);