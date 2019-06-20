import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Typography, TextField } from '@material-ui/core';
import {connect} from 'react-redux'

import {changeValue} from 'store/checkup/actions'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class NewPatientScreen extends Component {
  
  state = {
    value: "adult"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.changeValue({name: "agePhase",value: event.target.value})
  };

  render() {
    return (
      <div>
        <Typography className="section-label" variant="h6" gutterBottom>
          Create New Patient
        </Typography>
        <TextField
          id="databaseCode"
          name="databaseCode"
          label="Database code"
          fullWidth
          onChange={(event)=>{this.props.changeValue({name:"patientID",value: event.target.value})}}
        />
        <FormControl >
          <p className="radio-btn-label">Age phase</p>
          <RadioGroup
            row
            name='agePhase'
            value={this.state.value}
            onChange={this.handleChange}
          >
          <FormControlLabel  value={"adult"} control={<Radio />} label={"Adult"} />
          <FormControlLabel  value={"child"} control={<Radio />} label={"Child"} />
          
          </RadioGroup>
        </FormControl>
        <div >
          {(
          <Button 
          disabled
          onClick={this.props.handleBack} 
          >
            Back
          </Button>
          )}
          <Button onClick={this.props.handleCancel}
            variant="contained"
            color="primary"
            >
            Cancel
          </Button>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            onClick={this.props.handleNext}
          >
            NEXT
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
      changeValue: (field) => dispatch(changeValue(field)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPatientScreen);