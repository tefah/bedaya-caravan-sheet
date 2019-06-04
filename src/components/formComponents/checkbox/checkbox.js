import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

class CheckBox extends React.Component {

  render(){
  return (
    <FormControlLabel
          control={
            <Checkbox
              onChange={(event, checked) => {this.props.setValue(this.props.f.name, checked)}}
            />
          }
          label={this.props.f.placeholder}
        />
  )
  }
}  

export default (CheckBox);