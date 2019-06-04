import React, { Component } from 'react';

class Followup extends Component {

  submit = () => {
    console.log("SUBMITTED from followup");
  }

  render() {
    this.props.bindSubmission(this.submit);
    return (
      <div>
        <h1>hello from Followup</h1>
      </div>
    );
  }
}

export default Followup;