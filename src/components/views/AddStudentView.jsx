import React from "react"
import "./AddStudentView.css"

const AddStudentView = props => {
  return (
    <div className='add-student'>
      <h1>New Student</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Student First Name</label>
          <input
            type='text'
            name='first'
            placeholder='First name here'
            onChange={props.handleChange}
          />
        </div>
        <div className='form-row'>
          <label>Student Last Name</label>
          <input
            type='text'
            name='last'
            placeholder='Last name here'
            onChange={props.handleChange}
          />
        </div>
        <div className='form-row'>
          <label>GPA</label>
          <input
            type='number'
            name='gpa'
            placeholder='4.0'
            step='0.01'
            onChange={props.handleChange}
          />
        </div>
        <div className='form-row'>
          <label>Student Image URL</label>
          <input
            type='url'
            name='url'
            placeholder='Student Image URL'
            onChange={props.handleChange}
          />
        </div>
        <div className='form-row'>
          <label>Student Email</label>
          <input
            type='email'
            name='email'
            placeholder='Student Email'
            onChange={props.handleChange}
          />
        </div>
        <div className='form-row'>
          <label>Campus</label>
          <select type='text' name='campus' placeholder='Campus' onChange={props.handleChange}>
{/*             {props.campusesList.map(campus => {
              return <option value='campus.campusName'>{campus.campusName}</option>
            })} */}
          </select>
        </div>
        <input className='submit-button' type='submit' value='+ Add Student' />
      </form>
    </div>
  )
}

export default AddStudentView
