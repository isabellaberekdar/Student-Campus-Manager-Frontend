import React, { Component } from "react";
import "../views/AllStudentsView.css";
import { StudentCard } from "..";

function AllStudentsView(props) {
    let studentElements = [];
    for(let key in props.allStudents){
      studentElements.push(
        <div className="student-grid-item">
          <StudentCard
            student={props.allStudents[key]}
            buttonFunction={props.buttonFunction}
            buttonText={props.buttonText}
          />
        </div>
      );    
    }
  
    return (
      <div>
        <div className="top-text">
          <h1 className="title">All Students</h1>
          <a href={"/addstudent/"}><div className="add-student-button">+ Add Student</div></a>
        </div>
        <div className="student-grid-container">{studentElements}</div>
      </div>
    );
  }

export default AllStudentsView;