import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

class CheckBox extends React.Component {

  render(){
    const {
      input: {  onChange }
    } = this.props
  return (
    <FormControlLabel
          control={
            <Checkbox
              onChange={(event, checked) => {onChange(checked)}}
            />
          }
          label={this.props.f.placeholder}
        />
  )
  }
}  

export default (CheckBox);