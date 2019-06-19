import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class NewPatientScreen extends Component {
  render() {
    return (
      <div>
        <h1>hello from new patient screen</h1>
        <div >
                  {(
                  <Button 
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
                    {/* {activeStep === steps.length - 1 ? 'show Data' : 'Next'} */}
                  </Button>
                </div>
      </div>
    );
  }
}

export default NewPatientScreen;