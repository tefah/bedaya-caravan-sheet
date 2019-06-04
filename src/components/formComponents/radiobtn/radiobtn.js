import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './radiobtn.css'

class Radiobtn extends React.Component {
  
  state = {
    value: this.props.f.options[0],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.setValue(this.props.f.name, event.target.value)
  };
  
  render(){
  return (
    <FormControl >
      <p className="radio-btn-label">{this.props.f.placeholder}</p>
    <RadioGroup
     row
      name={this.props.f.name}
      value={this.state.value}
      onChange={this.handleChange}
    >
    {this.props.f.options.map(option => (
    <FormControlLabel  value={option} control={<Radio />} label={option} />
    )
      )}
    </RadioGroup>
  </FormControl>
  )
  }
}  

export default (Radiobtn);