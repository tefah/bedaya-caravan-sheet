import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


import { renderTextField, renderRadioGroup } from 'components/formComponents/formComponents';
import './styles.css'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { RadioButton } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FormLabel from '@material-ui/core/FormLabel';


import validation from 'forms/validation'
import { withStyles } from '@material-ui/styles';
import './styling.css'
import { fields } from 'forms/newPtientForm';



const styles = theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

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
    const {required, alphaNumeric, phoneNumber} = validation 
    const { classes } = this.props;


    return (
      <MuiThemeProvider style={{width:'100%'}} >
        <div className="container">
         <Grid container spacing={3} direction="row"
          justify="space-evenly"
          alignItems="center">
          <Typography className="section-label" variant="h6" gutterBottom>
            Create New Patient
          </Typography>
          <form style={{width:'100%'}} onSubmit={handleSubmit}>
            {/* form body*/}
            <Grid className="field-item" item xs={12} >
              <Field
                className={'fieldtv margin'}
                name={"databaseCode"}
                component={renderTextField}
                label={"Database code"}
                type={'text'}
                validate={[required, alphaNumeric]}
              />
            </Grid> 

            <FormLabel component="legend" style={{alignContent: 'center'}}>{'Age phase'}</FormLabel>
            <Grid className="field-item" item xs={12} >
              <Field className={'margin radio'}
               name={'agePhase'} 
               component={renderRadioGroup}
              validate={required}
              >
              <RadioButton
                style={{display: 'inline-block', width: 'auto'}}
                value={"adult"}  label={"Adult"} />
              <RadioButton
                style={{display: 'inline-block', width: 'auto'}}
                value={"child"}  label={"Child"} />
              </Field>
            </Grid>
            <div className={`bottom-btns-tab`}>
              {(
              <Button 
              disabled
              onClick={this.props.handleBack} 
              className={classes.button}
              >
                Back
              </Button>
              )}
              <Button onClick={this.props.handleCancel}
                variant="contained"
                color="primary"
                className={classes.button}
                >
                Cancel
              </Button>
              <Button
                type='submit'
                variant="contained"
                color="primary"
                className={classes.button}
              >
                NEXT
              </Button>
            </div>
          </form>
        </Grid>
        </div>
      </MuiThemeProvider>
      );
  }
}

NewPatientScreen = reduxForm({
  // a unique name for the form
  form: 'newPatient',
  enableReinitialize: true
})(NewPatientScreen)

export default withStyles(styles)(NewPatientScreen);