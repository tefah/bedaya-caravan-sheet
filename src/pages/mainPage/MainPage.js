import React from 'react';
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

import Checkup from '../formPages/Checkup';
import Lab from '../formPages/Lab';
import Pharmacy from '../formPages/Pharmacy';
import Followup from '../formPages/Followup';
import NewPatientScreen from '../formPages/NewPatientScreen';

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

class MainPage extends React.Component {
  state = {
    activeStep: 0,
    init: true,
  };

  submitCurrentForm = null

  getStepContent = (step) => {
    if (this.state.init)
      return <NewPatientScreen />;
    switch (step) {
      case 0:
        return <Checkup  bindSubmission={this.bindSubmission}/>;
      case 1:
        return <Lab bindSubmission={this.bindSubmission} />;
      case 2:
        return <Pharmacy bindSubmission={this.bindSubmission} />;
        case 3:
          return <Followup bindSubmission={this.bindSubmission} />;
      default:
        throw new Error('Unknown step');
    }
  }

  getCheckup = () =>{
    this.setState({init: false})
  }
  handleNext = () => {
    if(this.state.init)
      this.getCheckup();
    else{
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    this.submitCurrentForm();
  }
  };

  handleBack = () => {
    if (this.state.activeStep === 0)
      this.setState({init: true})
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
                <div className={classes.buttons}>
                  {(!this.state.init) && (
                  <Button onClick={this.handleBack} className={classes.button}>
                    Back
                  </Button>
                  )}
                  <Button onClick={this.handleCancel}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'show Data' : 'Next'}
                  </Button>
                </div>
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

export default withStyles(styles)(MainPage);
