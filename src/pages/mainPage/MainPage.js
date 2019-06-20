import React from 'react';
import {connect} from 'react-redux'

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

import Checkup from '../formPages/Checkup';
import Lab from '../formPages/Lab';
import Pharmacy from '../formPages/Pharmacy';
import Followup from '../formPages/Followup';
import NewPatientScreen from '../formPages/NewPatientScreen';
import {submitData, setIP} from 'store/main/actions'
import CheckupForm from 'pages/formPages/CheckupForm';

const styles = theme => ({
  appBar: {
    position: 'relative',
    align: 'center',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Check up', 'Lab', 'Pharmacy', 'Follow Up'];
const ERROR = 1000;

class MainPage extends React.Component {
  state = {
    activeStep: 0,
    reservedStep: 0,
    init: true,
  };

  getStepContent = (step) => {
    if (this.state.init)
      return <NewPatientScreen
      
      handleBack={this.handleBack}
      handleNext={this.handleNext}
      handelCancel={this.handelCancel} />;
    switch (step) {
      case 0:
        // return<CheckupForm onSubmit={values => {console.log(values)}} />
        return <CheckupForm
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        onSubmit={this.handleNext}
        handelCancel={this.handelCancel}/>;
      case 1:
        return <Lab  
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}/>;
      case 2:
        return <Pharmacy 
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel} />;
      case 3:
        return <Followup 
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel} />;
      case ERROR:
        return (
        <div>
          <h3 style={{color: 'red'}}>Error occured while submitting<br/>
          {this.state.error.statusCode===404?"No such user":"Check your internet or IP address and" }
          press the back button</h3>
          <Button 
          variant="contained"
          color="secondary"
          onClick={this.handleBack}>
            Back
          </Button>
        </div>
        )
      default:
        throw new Error('Unknown step');
    }
  }

  getCheckup = () =>{
    this.setState({init: false})
  }
  errorWhileSubmitting = (err) => {
    this.setState(state => ({
      reservedStep: state.activeStep,
      activeStep: ERROR,
      error: err
    }))
  }
  handleNext = () => {
    if(this.state.init)
      this.getCheckup();
    else{
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    
  }
  };

  handleBack = () => {
    if (this.state.activeStep === 0)
      this.setState({init: true})
    else if(this.state.activeStep === ERROR){
      this.setState(state => ({
        activeStep: state.reservedStep,
        reservedStep: 0,
      }))
    }
    else {
      this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  bindSubmission = (submition) => {
    // console.log("SUBMISSION FUN: ", submition)
    this.submitCurrentForm = submition;
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar align="center">
            <Typography variant="h6" color="inherit" noWrap align="center">
              Bedaya Caravan sheet 2019
            </Typography>
            <TextField
              label={"Enter IP address"}
              fullWidth
              onChange={(event) => setIP(event.target.value)}
            />
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? ( //putting what shows after all steps done
              <React.Fragment>
                steps Finished
              </React.Fragment>
              ) : ( //shows step content 
              <React.Fragment>
                {this.getStepContent(activeStep)}
              </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submitData: (data, path, onSuccessful, onError) =>
     dispatch(submitData(data, path, onSuccessful, onError)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPage));
