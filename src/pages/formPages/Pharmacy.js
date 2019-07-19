import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import {connect} from 'react-redux'

import { renderTextField,  renderSelectField } from 'components/formComponents/formComponents';
import {changeValuePharmacy, changeDataPharmacy} from 'store/actions'
import {updateData, submitData, getSingleData} from 'store/main/actions'


import './styles.css'
import './styling.css'


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { RadioButton } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import validation from 'forms/validation'
import meds from 'forms/helpers/meds'
import { withStyles } from '@material-ui/styles';
import './styling.css'
import { FINISH } from 'pages/mainPage/MainPage';
import CustomSelect from 'components/select/select';


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

const pharmacyInitalValues = {
  referal1: 0,
  diagnosis: '',
  meds: [],
}
const renderMedicine = ({ fields, meta: { error } }, selectProps) => (
  <ul 
  className={'margin fieldtv'}
  >
    <li>
      <Button 
      className={'margin '}
      type="button"
       variant="contained"
       color="primary"
       onClick={() => fields.push()}>
        Add Medicine
      </Button>
    </li>
    {fields.map((med, index) => (
      <li key={index} className={'list-item'}>
      <div className={'block fullwidth'}>
      <Field
        className={' fieldtv '}
        name={`treatment${index+1}`}
        component={CustomSelect}
        options={meds}
        fullWidth
        label={'Enter medicine name'}
        type={'text'}
      />
        <Field
          className={' fieldtv'}
          name={`ttt${index+1}count`}
          component={renderTextField}
          label={`TTT${index+1}count`}
          type={'number'}
        />
        </div>
      
      <Button
      className='remove-btn'
        type="button"
        variant="contained"
        color="secondary"
        onClick={() => fields.remove(index)}
      >Remove Medicine</Button>
    </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

class Pharmacy extends Component {
  
  state = {
    barcode: "",
    editFlage: false,
    scan: false,
    navigateTo:'',
  };

  onError = (err) =>{this.props.handleError(err)}
  onSuccessful = () => {this.props.handleNext()}
  onEdit = (data) => {
    console.log('>>>>>>>>:', data)
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
    const loadedData = this.props.getSingleData(databaseCode, "pharmacyData",  this.onEdit, this.onError);
  }
  }
  barcodeDetected = (barcode) =>{
    this.setState({scan: false})
    alert(barcode)
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
   handleChange = (event) => {
    this.setState(state => ({
      ...state,
      navigateTo: event.target.value,
    }));
    console.log('=================> ', this.state)
  }

  render() {
    const { handleSubmit, load, pristine, reset, submitting } = this.props
    const {required, alphaNumeric, phoneNumber} = validation 
    const { classes } = this.props;
    const submissionData = (data) => {
      data = {
        ...data,
        patientID: this.props.databaseCode,
      }
      // console.log("!!!!!!!!!!!@@@@@@@@@###########: ", data)
      if(!this.state.editFlage)
        this.props.submitData(data, 'pharmacy', this.handleNext, this.props.handleError)
      else
        this.props.updateData(data.patientID, data, 'updatePharmacy', this.handleNext, this.props.handleError)  
    }

    return (
      <MuiThemeProvider style={{width:'100%'}} >
        <div className="container">
         <Grid container spacing={3} direction="row"
          justify="space-evenly"
          alignItems="center">
          <Typography className="section-label" variant="h6" gutterBottom>
            Pharmacy
          </Typography>
          <form style={{width:'100%'}} onSubmit={handleSubmit(submissionData)}>
            {/* form body*/}
            <Typography className="section-label" variant="h6" gutterBottom>
            External referal
          </Typography>
            <Grid className="field-item" item xs={12} >
              <Field name={"referal"} className={'margin select-field'} 
              component={renderSelectField} label={'Referal/Purpose'}>
                <option value={0}>Enter if there is referal</option> 
                <option value={'yes'}>Yes</option> 
                <option value={'demerdash'}>Refer to el Demerdash</option>
                <option value={'benisuef'}>Refer to beni suef hospital</option>
              </Field>
            </Grid> 
            <Typography className="section-label" variant="h6" gutterBottom>
              Diagnosis
            </Typography>
            <Grid className="field-item" item xs={12} >
              <Field
                className={'margin fieldtv'}
                name={'diagnosis'}
                component={renderTextField}
                label={'Diagnosis'}
                type={'text'}
              />
            </Grid>
            <Typography className="section-label" variant="h6" gutterBottom>
              Treatment
            </Typography>
            <Grid className="field-item" item xs={12} >
              <FieldArray name="meds" component={renderMedicine} />
            </Grid>
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
            <div className={`bottom-btns-tab`}>
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
              >
                NEXT
              </Button>
            </div>
          </form>
        </Grid>
        </div>
      </MuiThemeProvider>
      )
  }
}

Pharmacy = reduxForm({
  // a unique name for the form
  form: 'pharmacy',
  enableReinitialize: true,
  keepDirtyOnReinitialize:true,
})(Pharmacy)

const mapStateToProps = state => {
    return {
      initialValues: Object.keys(state.pharmacy).length >= 3?state.pharmacy:pharmacyInitalValues,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        changeData: (data) => dispatch(changeDataPharmacy(data)),
        changeValue: (field) => dispatch(changeValuePharmacy(field)),
        submitData: (data, path, onSuccessful, onError) =>
          dispatch(submitData(data, path, onSuccessful, onError)), 
        getSingleData: (patientID, path, onEdit, onError)=> 
          dispatch(getSingleData(patientID, path, onEdit, onError)),
          updateData: (patientID, data, path, onSuccessful, onError) =>
            dispatch(updateData(patientID, data, path, onSuccessful, onError))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Pharmacy)