import React, { Component } from 'react';

class Pharmacy extends Component {

  submit = () => {
    console.log("SUBMITTED from pharmacy");
  }

  render() {
    this.props.bindSubmission(this.submit);
    return (
      <div>
        <h1>hello from Pharmacy</h1>
      </div>
    );
  }
}

export default Pharmacy;