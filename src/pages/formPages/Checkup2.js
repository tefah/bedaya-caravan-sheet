import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'

import {changeValueCheckup2, changeDataForCheckup2} from 'store/actions'
import {checkup2Data} from 'forms/checkup2Form'
import {updateData, submitData, getSingleData} from 'store/main/actions'
import { COMPONENTS } from 'forms/helpers/FormUtils';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { RadioButton } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';


import Checklist from 'components/formComponents/checklist/checklist';
import { renderTextField, renderRadioGroup, renderCheckbox, renderSelectField } from 'components/formComponents/formComponents';
import validation from 'forms/validation'
import './styling.css'
import { FINISH } from 'pages/mainPage/MainPage';


class Checkup2 extends React.Component{

  state={
    editFlage: false,
    navigateTo:'',
  }

  onError = (err) =>{this.props.handleError(err)}
  onSuccessful = () => {this.props.handleNext()}
  onEdit = (data) => {
    if(data){
      this.props.changeData(data)
      this.setState({editFlage: true})
    }
  }
  handleNext = () => {
    switch(this.state.navigateTo){
      case('checkup'):
      this.props.navigate(0)
      break;
      case('labs'):
      this.props.navigate(1)
      break;
      case('pharmacy'):
        this.props.navigate(2)
      break;
      case('followup'):
        this.props.navigate(3)
      break;
      case('finish'):
        this.props.navigate(FINISH)
      break;
      default:
        this.onSuccessful()
    }
  }

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
    const loadedData = this.props.getSingleData(databaseCode, "checkup2Data",  this.onEdit, this.onError);
  }
  }
  handleChange = (event) => {
    this.setState(state => ({
      ...state,
      navigateTo: event.target.value,
    }));
    // console.log('=================> ', this.state)
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
        this.props.submitData(data, 'checkup2', this.handleNext, this.props.handleError)
      else
        this.props.updateData(data.patientID, data, 'updateCheckup2', this.handleNext, this.props.handleError)  
    }
    return (
      <MuiThemeProvider>
        <Grid container spacing={24}>
          <form style={{width:'100%'}} onSubmit={handleSubmit(submissionData)}>
            {/* form body*/}
            {checkup2Data.fields.map(field => {
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
                      <div>
                      <FormLabel component="legend">{field.placeholder}</FormLabel>
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
                      </div>
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
             <div className={'stations-btns-tab'} >
            <FormControl >
              <InputLabel>Stations</InputLabel>
              <Select
                value={this.state.navigateTo}
                onChange={this.handleChange}
              >
                {['checkup', 'labs', 'pharmacy', 'followup', 'finish'].map(elem =>{
                  return <MenuItem value={elem}>{elem}</MenuItem>
                })}
              </Select>
            </FormControl>
            </div>
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

Checkup2 = reduxForm({
  // a unique name for the form
  form: 'checkup2',
  enableReinitialize: true,
  keepDirtyOnReinitialize:true,
})(Checkup2)


const mapStateToProps = state => {
  return {
    initialValues: Object.keys(state.checkup2).length > 3?state.checkup2:checkup2Data.initialValues,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      changeData: (data) => dispatch(changeDataForCheckup2(data)),
      changeValue: (field) => dispatch(changeValueCheckup2(field)),
      submitData: (data, path, onSuccessful, onError) =>
        dispatch(submitData(data, path, onSuccessful, onError)), 
      getSingleData: (patientID, path, onEdit, onError)=> 
        dispatch(getSingleData(patientID, path, onEdit, onError)),
        updateData: (patientID, data, path, onSuccessful, onError) =>
          dispatch(updateData(patientID, data, path, onSuccessful, onError))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkup2)
