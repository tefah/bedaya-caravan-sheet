import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'

import {changeValueLab4, changeDataLab4} from 'store/actions'
import {lab4Data} from 'forms/lab4Form'
import {updateData, submitData, getSingleData} from 'store/main/actions'
import { COMPONENTS } from 'forms/helpers/FormUtils';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { RadioButton } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Checklist from 'components/formComponents/checklist/checklist';
import { renderTextField, renderRadioGroup, 
  renderCheckbox, renderSelectField } from 'components/formComponents/formComponents';
import validation from 'forms/validation'
import './styling.css'


class Lab4 extends React.Component{

  state={
    editFlage: false,
  }
  
  onError = (err) =>{this.props.handleError(err)}
  onSuccessful = () => {this.props.handleNext()}
  onEdit = (data) => {
    if(data){
      this.props.changeData(data)
      this.setState({editFlage: true})
    }  }

  componentDidMount(){
    // console.log("@@@@@@@@@@@@@@: ", this.props)
  if(this.props.databaseCode){
    const agePhase = this.props.agePhase
    const databaseCode = this.props.databaseCode
    this.props.changeValue({
      name: "patientID",
      value: databaseCode
    })
    this.props.changeValue({
      name: "agePhase",
      value: agePhase
    })
    const loadedData = this.props.getSingleData(databaseCode, "lab4Data",  this.onEdit, this.onError);
  }
  }

  render(){
    const { handleSubmit, load, pristine, reset, submitting } = this.props
    const {required, alphaNumeric, phoneNumber} = validation 

    const submissionData = (data) => {
      // console.log("!!!!!!!!!!!@@@@@@@@@###########: ", data)
      if(!this.state.editFlage)
        this.props.submitData(data, 'lab4', this.props.handleNext, this.handleError)
      else
        this.props.submitData(data.patientID, data, 'updateLab4', this.props.handleNext, this.handleError)  
    }
    return (
      <MuiThemeProvider>
        <Grid container spacing={24}>
          <form style={{width:'100%'}} onSubmit={handleSubmit(submissionData)}>
            {/* form body*/}
            {lab4Data.fields.map(field => {
              let valid = []
              if(field.req){
                if (field.name === 'mobNumber'){
                valid = [required, phoneNumber]
                } else {
                  valid = [required]
                }
              }
                switch(field.component){
                  case(COMPONENTS.input):
                    return ( 
                      <Grid className="field-item" item xs={12} >
                        <Field
                          className={'margin fieldtv'}
                          name={field.name}
                          component={renderTextField}
                          label={field.placeholder}
                          type={field.type}
                          validate={valid}
                        />
                      </Grid>  
                    );
                  case(COMPONENTS.radio):
                    return (
                      <Grid className="field-item" item xs={12} >
                          <Field name={field.name} component={renderRadioGroup} className={'margin radio'}
                          validate={valid}>
                          {field.options.map(option => (
                            <RadioButton
                            style={{display: 'inline-block', width: 'auto'}}
                            value={option}  label={option} />
                            )
                          )}
                          </Field>
                      </Grid>
                    );
                  case(COMPONENTS.checkbox):
                    return(
                      <Grid className="field-item" item xs={12} >
                        <Field name={field.name} className={'margin checkbox'}
                         component={renderCheckbox} label={field.placeholder} />
                      </Grid>
                    );
                  case(COMPONENTS.selectlist):
                    return (
                      <Grid className="field-item" item xs={12} >
                        <Field name={field.name} className={'margin select-field'} 
                        component={renderSelectField} label={field.placeholder}>
                          {field.options.map(option => (
                            <option value={option}>{option}</option> 
                            )
                          )}
                          </Field>
                      </Grid>
                    );
                  case(COMPONENTS.checklist):
                    return (
                      <Grid className="field-item" item xs={12} >
                        <Field name={field.name} type={COMPONENTS.checklist} className={'margin checklist'}
                         component={Checklist} f={field}  />
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
            <div className={'bottom-btns-tab'} >
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
          </form>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

Lab4 = reduxForm({
  // a unique name for the form
  form: 'lab4',
  enableReinitialize: true,
  keepDirtyOnReinitialize:true,
})(Lab4)


const mapStateToProps = state => {
  return {
    initialValues: state.lab4,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      changeData: (data) => dispatch(changeDataLab4(data)),
      changeValue: (field) => dispatch(changeValueLab4(field)),
      submitData: (data, path, onSuccessful, onError) =>
        dispatch(submitData(data, path, onSuccessful, onError)), 
      getSingleData: (patientID, path, onEdit, onError)=> 
        dispatch(getSingleData(patientID, path, onEdit, onError)),
        updateData: (patientID, data, path, onSuccessful, onError) =>
          dispatch(updateData(patientID, data, path, onSuccessful, onError))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lab4)
