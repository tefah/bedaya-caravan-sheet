import React, { Component } from 'react';
import {connect} from 'react-redux'

import {changeValue} from 'store/checkup/actions'
import Section from 'components/section/Section';
import {sociodemographic, pastHistory, complaint,
vitalData, anthropometry, complexion} from 'forms/checkupForm'
import {submitData} from 'store/main/actions'


class Checkup extends Component {

  state = {
    ...(sociodemographic.initialValues)
  }

  onError = () =>{}
  onSuccessful = () => {}

  submit = () => {
    const data = {
      ...this.props[0].checkup,
      patientID: "test1"
    }
    // console.log("DATAAAAAAA" , this.props[0].checkup)
    console.log("SUBMITTED from checkup");
    this.props.submitData(data, "addCheckup", this.onError, this.onSuccessful);

  }
  setFieldValue = (fieldName, value) => {
    console.log("SETTING FIELD ", fieldName)
    console.log("SETTING FIELD ", value)
    this.props.changeValue({name: fieldName, value})
    console.log("SHOULD BE SETTTT",this.props)
  }
  render() {
    this.props.bindSubmission(this.submit);
    return (
      <div>
        <Section 
        label={sociodemographic.label}
        fields={sociodemographic.fields}
        setValue={this.setFieldValue} />

        <Section 
        label={complaint.label}
        fields={complaint.fields}
        setValue={this.setFieldValue} />

        <Section 
        label={pastHistory.label}
        fields={pastHistory.fields}
        setValue={this.setFieldValue} />

        <Section 
        label={vitalData.label}
        fields={vitalData.fields}
        setValue={this.setFieldValue} />

        <Section 
        label={anthropometry.label}
        fields={anthropometry.fields}
        setValue={this.setFieldValue} />

        <Section 
        label={complexion.label}
        fields={complexion.fields}
        setValue={this.setFieldValue} />
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