import React from 'react';
import {connect} from 'react-redux'
import './mainPage.css'

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
import Pharmacy from '../formPages/Pharmacy';
import Followup from '../formPages/Followup';
import NewPatientScreen from '../formPages/NewPatientScreen';
import {submitData, setIP} from 'store/main/actions'
import Checkup2 from 'pages/formPages/Checkup2';
import Lab1 from 'pages/formPages/Lab1';
import Lab2 from 'pages/formPages/Lab2';
import Lab3 from 'pages/formPages/Lab3';
import Lab4 from 'pages/formPages/Lab4';

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
    marginBottom: theme.spacing.unit * 10,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 10,
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
    substep: 0,
  };

  getStepContent = (step) => {
    if (this.state.init)
      return <NewPatientScreen
      handleBack={this.handleBack}
      onSubmit={this.submitData}
      handelCancel={this.handelCancel} />;
    switch (step) {
      case 0:
        // return<CheckupForm onSubmit={values => {console.log(values)}} />
        if(this.state.substep === 0)
        return <Checkup
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}
        agePhase={this.state.values.agePhase}
        databaseCode={this.state.values.databaseCode} />;
        else{
          return <Checkup2
          handleError={this.errorWhileSubmitting}
          handleBack={this.handleBack}
          handleNext={this.handleNext}
          handelCancel={this.handelCancel}
          agePhase={this.state.values.agePhase}
          databaseCode={this.state.values.databaseCode} />;
          }
      case 1:
        switch(this.state.substep){
          case(0):
        return <Lab1
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}
        agePhase={this.state.values.agePhase}
        databaseCode={this.state.values.databaseCode} />;
        case(1):
        return <Lab2
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}
        agePhase={this.state.values.agePhase}
        databaseCode={this.state.values.databaseCode} />;
        case(2):
        return <Lab3
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}
        agePhase={this.state.values.agePhase}
        databaseCode={this.state.values.databaseCode} />;
        case(3):
        return <Lab4
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}
        agePhase={this.state.values.agePhase}
        databaseCode={this.state.values.databaseCode} />;
        }
      case 2:
        return <Pharmacy 
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}
        agePhase={this.state.values.agePhase}
        databaseCode={this.state.values.databaseCode}/>;
      case 3:
        return <Followup 
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}
        agePhase={this.state.values.agePhase}
        databaseCode={this.state.values.databaseCode} />;
      case ERROR:
        return (
        <div>
          <h3 style={{color: 'red'}}>Error occured while submitting<br/>
          {this.state.error.statusCode===404?"No such user":"Check your internet or IP address and" }
          press the back button</h3>
          <Button 
          variant="contained"
          color="secondary"
          onClick={this.handleReset}>
            Back
          </Button>
        </div>
        )
      default:
        throw new Error('Unknown step');
    }
  }

  getCheckup = (values) =>{
    this.setState({
      init: false,
      values: values
    })
  }
  errorWhileSubmitting = (err) => {
    this.setState(state => ({
      reservedStep: state.activeStep,
      activeStep: ERROR,
      error: err
    }))
  }

  submitData = (data) => {
  console.log(data)
  switch(this.state.activeStep){
    case(0):
      if(this.state.init)
        this.getCheckup(data);
      else{
        this.props.submitData(data, 'addCheckup', this.handleNext, this.errorWhileSubmitting)
      }  
      break;
    case(1):
      this.props.submitData(data, `lab${this.state.substep+1}Data`, this.handleNext, this.errorWhileSubmitting)
      break;
    case(2):
    this.props.submitData(data, `pharmacy`, this.handleNext, this.errorWhileSubmitting)
      break;
    case(3):
    this.props.submitData(data, `followup`, this.handleNext, this.errorWhileSubmitting)
      break;
          

  }
  }

  handleNext = () => {
    const substep = this.state.substep;
    switch(this.state.activeStep){
      case(0):
      if(substep === 1){
        this.setState({substep: 0})
        this.nextStep();
      }else{
        this.setState({substep: 1})
      }
      break;
      case(1):
        if(substep < 3){
          this.setState({substep: substep+1})
        }else{
          this.setState({substep: 0})
          this.nextStep()
        }
      break;
      case(2):
        this.nextStep()
      break;
      case(3):
        this.nextStep()
      break;
      default: 
      this.nextStep()
    }
  };
  nextStep = () =>{
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  }
  previousStep = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleBack = () => {
    const substep = this.state.substep;
    
    switch(this.state.activeStep){
      case(0):
      if(substep === 1)
        this.setState({substep: 0})
      else if(substep === 0)
        this.setState({init: true})
      break;
      case(1):
        if(substep === 0){
          this.setState({substep: 1})
          this.previousStep()
        }else{
          this.setState({substep: substep - 1})
        }
      break;
      case(2):
        this.previousStep()
      break;
      case(3):
        this.previousStep()
      break;
      case(ERROR):
        this.setState(state => ({
          activeStep: state.reservedStep,
          reservedStep: 0,
        }))
      break;
      default: 
      this.previousStep()
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment >
        <CssBaseline />
        <div className={'main-container'}>
        <AppBar position="absolute" color="default" className={`appbarr ${classes.appBar}`}>
          <Toolbar align="center" className={'headertb'}>
            <Typography variant="h6" color="inherit" noWrap align="center">
              Bedaya Caravan sheet 2019
            </Typography>
            <TextField
              id={'iptv'}
              style={{width: '30%'}}
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
                {/* <Pharmacy 
        handleError={this.errorWhileSubmitting}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handelCancel={this.handelCancel}
        agePhase={'adult'}
        databaseCode={'a10'}/> */}

              </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
        </div>
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
