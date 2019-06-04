import React, { Component } from 'react';

class Lab extends Component {

  submit = () => {
    console.log("SUBMITTED from lab");
  }

  render() {
    this.props.bindSubmission(this.submit);
    return (
      <div>
        <h1>WELCOME from LAB</h1>
      </div>
    );
  }
}

export default Lab;