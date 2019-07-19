import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'

import {changeValueFollowup, changeDataFollowup} from 'store/actions'
// import {lab1Data} from 'forms/lab1Form'
import {updateData, submitData, getSingleData} from 'store/main/actions'
import { COMPONENTS } from 'forms/helpers/FormUtils';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { RadioButton } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Checklist from 'components/formComponents/checklist/checklist';
import { renderTextField, renderRadioGroup, renderCheckbox, renderSelectField } from 'components/formComponents/formComponents';
import validation from 'forms/validation'
import './styling.css'


const followupInitialValues = {
  idNumber: '',
  furtherTreatment: '',
  furtherInvestigation: '', 
  diagnosisf: '', 
  motherName: '',

}

class Followup extends React.Component{

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
    const loadedData = this.props.getSingleData(databaseCode, "followupData",  this.onEdit, this.onError);
  }
  }

  render(){
    const { handleSubmit, load, pristine, reset, submitting } = this.props
    const {required, alphaNumeric, phoneNumber} = validation 
    const submissionData = (data) => {
      data = {
        ...data,
        patientID: this.props.databaseCode,
      }
      // console.log("!!!!!!!!!!!@@@@@@@@@###########: ", data)
      if(!this.state.editFlage)
        this.props.submitData(data, 'followup', this.props.handleNext, this.props.handleError)
      else
        this.props.updateData(data.patientID, data, 'updateFollowup', this.props.handleNext, this.props.handleError)  
    }
    return (
      <MuiThemeProvider>
        <Grid container spacing={24}>
          <form style={{width:'100%'}} onSubmit={handleSubmit(submissionData)}>
            {/* form body*/}
            <Typography className="section-label" variant="h6" gutterBottom>
              Follow up
            </Typography>
            <Grid className="field-item" item xs={12} >
              <Field
                className={'margin fieldtv'}
                name='idNumber'
                component={renderTextField}
                label='ID Number'
                type='number'
              />
            </Grid>  
            <Grid className="field-item" item xs={12} >
              <Field
                className={'margin fieldtv'}
                name='motherName'
                component={renderTextField}
                label={`Mother's name`}
                type='text'
              />
            </Grid>  
            <Grid className="field-item" item xs={12} >
              <Field
                className={'margin fieldtv'}
                name='diagnosisf'
                component={renderTextField}
                label='Diagnosis'
                type='text'
              />
            </Grid>  
            <Grid className="field-item" item xs={12} >
              <Field
                className={'margin fieldtv'}
                name='furtherInvestigation, diagnosisf, motherName'
                component={renderTextField}
                label='Further Investigation'
                type='text'
              />
            </Grid>  
            <Grid className="field-item" item xs={12} >
              <Field
                className={'margin fieldtv'}
                name='furtherTreatment'
                component={renderTextField}
                label='Further treatmetn'
                type='text'
              />
            </Grid>  
            
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

Followup = reduxForm({
  // a unique name for the form
  form: 'followup',
  enableReinitialize: true,
  keepDirtyOnReinitialize:true,
})(Followup)


const mapStateToProps = state => {
// console.log('that is the initial values: ', lab1Data.initialValues)
// console.log('that is the state: ', state.lab1)

  return {
    initialValues: Object.keys(state.followup).length > 3?state.followup:followupInitialValues,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      changeData: (data) => dispatch(changeDataFollowup(data)),
      changeValue: (field) => dispatch(changeValueFollowup(field)),
      submitData: (data, path, onSuccessful, onError) =>
        dispatch(submitData(data, path, onSuccessful, onError)), 
      getSingleData: (patientID, path, onEdit, onError)=> 
        dispatch(getSingleData(patientID, path, onEdit, onError)),
        updateData: (patientID, data, path, onSuccessful, onError) =>
          dispatch(updateData(patientID, data, path, onSuccessful, onError))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Followup)
