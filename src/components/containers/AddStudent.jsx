import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../../store/utilities/Student"; // Get the action creator for students
import AddStudentView from "../views/AddStudentView";

class AddStudent extends Component {
  // Use local state to keep track of form input
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      gpa: 0.0,
      url: "",
      email: "",
      campus: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { first, last, gpa, url, email, campus } = this.state;
    const newStudent = {
      firstName: first,
      lastName: last,
      gpa: parseFloat(gpa),
      image: url,
      email: email
      /*       campus: campus
       */
    };

    // Add student to campus' list of student

    // needs validation
    this.props.addStudent(newStudent);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value // makes form input correspond to local state values
    });
  };

  render() {
    return (
      <AddStudentView
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        campusesList={this.props.campusesList}
      />
    );
  }
}

const mapState = state => {
  return {
    campusesList: state.campusesReducer.allCampuses
  };
};

const mapDispatch = dispatch => {
  return {
    addStudent: newStudent => dispatch(addStudent(newStudent))
  };
};

export default connect(mapState, mapDispatch)(AddStudent);
