import React, { Component } from "react";

import { connect } from "react-redux";

import { EditStudentView } from "../";

class EditStudentContainer extends Component {
  render() {
    return (
      <div>
        <h1>EditStudentContainer</h1>
        <EditStudentView id={1} />
      </div>
    );
  }
}

function mapStateToProp(state) {
  return;
}

export default connect(mapStateToProp)(EditStudentContainer);
