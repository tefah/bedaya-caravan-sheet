import React, { Component } from 'react';
import {connect} from 'react-redux'

import {changeValue} from 'store/checkup/actions'
import {checkupData} from 'forms/checkupForm'
import {submitData, getSingleData} from 'store/main/actions'
import { COMPONENTS } from 'forms/helpers/FormUtils';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Radiobtn from 'components/formComponents/radiobtn/radiobtn';
import Checklist from 'components/formComponents/checklist/checklist';
import Selectlist from 'components/formComponents/selectlist/selectlist';
import Checkbox from 'components/formComponents/checkbox/checkbox';

class Checkup extends Component {

  state = {
    ...(checkupData.initialValues)
  }

  onError = (err) =>{this.props.handleError(err)}
  onSuccessful = () => {this.props.handleNext()}

  render() {
    // this.props.bindSubmission(this.submit);
    return (
      <div className="container">
        <Grid container spacing={24}>
          <Formik 
            initialValues={checkupData.initialValues}
            validate={values => {return true;}}
            onSubmit={(values, { setSubmitting }) => {
              const data = {
                ...values,
                patientID: this.props[0].checkup.patientID,
                agePhase: this.props[0].checkup.agePhase
              }
              console.log("SUBMITTED from checkup");
              this.props.submitData(data, "addCheckup",  this.onSuccessful,this.onError);
              setSubmitting(false)
              
            }}
          >
            {({isSubmitting, handleSubmit, setFieldValue, submitForm}) => {
              const handlSetFieldValue = (name, value) => {
                setFieldValue(name, value)
                this.setState(state => {
                  return {
                    ...state,
                    name: value
                  }
                })              }
              //bind submission remotly here
              return (
                <Form  >
                  {checkupData.fields.map(field => {
                    switch(field.component){
                      case(COMPONENTS.input):
                        return ( 
                          <Grid className="field-item" item xs={12} >
                            <TextField
                              required={field.req}
                              id={field.name}
                              name={field.name}
                              label={field.placeholder}
                              fullWidth
                              autoComplete={field.name}
                              value={this.state[field.name]}
                              onChange={event => {
                                const data = event.target.value
                                setFieldValue(field.name, event.target.value)
                                this.setState(state => {
                                  return {
                                    ...state,
                                    [field.name]: data
                                  }
                                })
                              }}
                            />
                            <ErrorMessage name={field.name} component="div" />
                          </Grid>  
                        );
                      case(COMPONENTS.radio):
                        return (
                          <Grid className="field-item" item xs={12} >
                              <Field initialValue={this.state} component={Radiobtn} f={field} setValue={handlSetFieldValue} />
                              <ErrorMessage name={field.name} component="div" />  
                          </Grid>
                        );
                      case(COMPONENTS.checkbox):
                        return(
                          <Grid className="field-item" item xs={12} >
                            <Field component={Checkbox} f={field} setValue={handlSetFieldValue} />
                          </Grid>
                        );
                      case(COMPONENTS.selectlist):
                        return (
                          <Grid className="field-item" item xs={12} >
                            <Selectlist f={field} setValue={handlSetFieldValue} />
                          </Grid>
                        );
                      case(COMPONENTS.checklist):
                        return (
                          <Grid className="field-item" item xs={12} >
                            <Checklist f={field} setValue={handlSetFieldValue} />
                          </Grid>
                      );
                      case(COMPONENTS.label):
                        return (
                          <Typography className="section-label" variant="h6" gutterBottom>
                            {field.placeholder}
                          </Typography>
                      );
                      default: 
                      return (<h1>ERROR not a valid component</h1>);
                    }
                  })
                }
                <div >
                  <Button 
                    onClick={this.props.handleBack} 
                    >
                    Back
                  </Button>
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
                    {/* {activeStep === steps.length - 1 ? 'show Data' : 'Next'} */}
                  </Button>
                </div>
                </Form>
              )
            } 
            }
          </Formik>
        </Grid>
      </div>
    );
  }

onEdit = (data) => {
  console.log("#################$$$$$$$$$$$$ ", data)
  this.setState(state => {
    return{
    ...data,
    }
  })
}

componentDidMount(){
  // console.log("########################$$$$$$$: ", this.props)
  if(this.props[0].checkup.patientID!=="default"){
    const patientID = this.props[0].checkup.patientID
    this.props.getSingleData(patientID, "checkupData",  this.onEdit, this.onError);
  }
}

}

const mapStateToProps = state => {
  return {
    ...state,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      changeValue: (field) => dispatch(changeValue(field)),
      submitData: (data, path, onSuccessful, onError) =>
        dispatch(submitData(data, path, onSuccessful, onError)), 
      getSingleData: (patientID, path, onEdit, onError)=> 
        dispatch(getSingleData(patientID, path, onEdit, onError)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkup);