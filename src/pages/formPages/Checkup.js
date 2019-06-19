import React, { Component } from 'react';
import {connect} from 'react-redux'

import {changeValue} from 'store/checkup/actions'
import {checkupData} from 'forms/checkupForm'
import {submitData} from 'store/main/actions'
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

  onError = () =>{this.props.handleError()}
  onSuccessful = () => {this.props.handleNext()}

  // submit = () => {
  //   const data = {
  //     ...this.props[0].checkup,
  //     patientID: "test1"
  //   }
  //   // console.log("DATAAAAAAA" , this.props[0].checkup)
  //   console.log("SUBMITTED from checkup");
  //   this.props.submitData(data, "addCheckup", this.onError, this.onSuccessful);

  // }
  // setFieldValue = (fieldName, value) => {
  //   console.log("SETTING FIELD ", fieldName)
  //   console.log("WITH VALUE ", value)
  //   this.props.changeValue({name: fieldName, value})
  //   console.log("SHOULD BE SETTTT",this.props)
  // }
  render() {
    // this.props.bindSubmission(this.submit);
    return (
      <div className="container">
        {/* <Typography className="section-label" variant="h6" gutterBottom>
          {this.props.label}
        </Typography> */}
        <Grid container spacing={24}>
          <Formik 
            initialValues={checkupData.initialValues}
            validate={values => {return true;}}
            onSubmit={(values, { setSubmitting }) => {
              // alert(`SUBMIT FROM CHECKUP: ${values}`)
              // console.log("SUBMITTED FROM CHECKUP: ", values)
              const data = {
                ...values,
                patientID: "test1"
              }
              // console.log("DATAAAAAAA" , data)
              console.log("SUBMITTED from checkup");
              this.props.submitData(data, "addCheckup",  this.onSuccessful,this.onError);
              setSubmitting(false)
              
            }}
          >
            {({isSubmitting, handleSubmit, setFieldValue, submitForm}) => {
              //bind submission remotly here
              return (
                <Form  >
                  {checkupData.fields.map(field => {
                    switch(field.component){
                      case(COMPONENTS.input):
                        return ( 
                          <Grid className="field-item" item xs={12} >
                            <Field
                              required={field.req}
                              id={field.name}
                              name={field.name}
                              label={field.placeholder}
                              fullWidth
                              autoComplete={field.name}
                            />
                            <ErrorMessage name={field.name} component="div" />
                          </Grid>  
                        );
                      case(COMPONENTS.radio):
                        return (
                          <Grid className="field-item" item xs={12} >
                              <Field component={Radiobtn} f={field} setValue={setFieldValue} />
                              <ErrorMessage name={field.name} component="div" />  
                          </Grid>
                        );
                      case(COMPONENTS.checkbox):
                        return(
                          <Grid className="field-item" item xs={12} >
                            <Field component={Checkbox} f={field} setValue={setFieldValue} />
                          </Grid>
                        );
                      case(COMPONENTS.selectlist):
                        return (
                          <Grid className="field-item" item xs={12} >
                            <Selectlist f={field} setValue={setFieldValue} />
                          </Grid>
                        );
                      case(COMPONENTS.checklist):
                        return (
                          <Grid className="field-item" item xs={12} >
                            <Checklist f={field} setValue={setFieldValue} />
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
                  {(!this.state.init) && (
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
}

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
      changeValue: (field) => dispatch(changeValue(field)),
      submitData: (data, path, onSuccessful, onError) =>
        dispatch(submitData(data, path, onSuccessful, onError)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkup);