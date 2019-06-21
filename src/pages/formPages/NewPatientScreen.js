import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'


import {changeValue} from 'store/checkup/actions'
import { renderTextField, renderRadioGroup } from 'components/formComponents/formComponents';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { RadioButton } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class NewPatientScreen extends Component {
  
  state = {
    value: "adult"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.changeValue({name: "agePhase",value: event.target.value})
  };

  render() {
    const { handleSubmit, load, pristine, reset, submitting } = this.props


    return (
      <MuiThemeProvider>
        <Typography className="section-label" variant="h6" gutterBottom>
          Create New Patient
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* form body*/}
          <Grid className="field-item" item xs={12} >
            <Field
              name={"databaseCode"}
              component={renderTextField}
              label={"Database code"}
            />
          </Grid> 
          <Grid className="field-item" item xs={12} >
            <Field name={'agePhase'} component={renderRadioGroup}>
            <RadioButton
              style={{display: 'inline-block', width: 'auto'}}
              value={"adult"}  label={"Adult"} />
            <RadioButton
              style={{display: 'inline-block', width: 'auto'}}
              value={"child"}  label={"Child"} />
            </Field>
          </Grid>
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
            >
              NEXT
            </Button>
          </div>
        </form>
      </MuiThemeProvider>
      );
  }
}

NewPatientScreen = reduxForm({
  // a unique name for the form
  form: 'newPatient',
  enableReinitialize: true
})(NewPatientScreen)

// const mapStateToProps = state => {
//   return {
//     initialValues: state.checkup,
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     changeData: (data) => dispatch(changeData(data)),
//   }
// }

export default (NewPatientScreen);