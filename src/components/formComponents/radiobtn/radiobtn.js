import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './radiobtn.css'

class Radiobtn extends React.Component {
  
  render(){
    const {
      input: { value, onChange }
    } = this.props
    const changeit = (valueExtracted) => {
      console.log("SO WHEN YOU FINISH refactoring check this: ", valueExtracted)
      onChange(valueExtracted)
    }
  return (
    <FormControl >
      <p className="radio-btn-label">{this.props.f.placeholder}</p>
    <RadioGroup
     row
      name={this.props.f.name}
      value={value}
      onChange={event => {changeit(event.target.value)}}
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