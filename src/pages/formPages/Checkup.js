import React, { Component } from 'react';
import Section from '../../components/section/Section';

import {sociodemographic} from '../../forms/checkupForm'

class Checkup extends Component {

  state = {
    ...(sociodemographic.initialValues)
  }
  submit = () => {
    // console.log(this.state)
    console.log("SUBMITTED from checkup");
  }
  setFieldValue = (fieldName, value) => {
    console.log("SETTING FIELD ", fieldName)
    this.setState({
      ...this.state,
      fieldName: value
    })
    console.log(this.state)
  }
  render() {
    this.props.bindSubmission(this.submit);
    return (
      <div>
        <h1>CHECKUP BITCH</h1>
        <Section 
        label={sociodemographic.label}
        fields={sociodemographic.fields}
        setValue={this.setFieldValue} />
      </div>
    );
  }
}

export default Checkup;