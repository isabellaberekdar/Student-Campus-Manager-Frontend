import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AddStudent from './components/containers/AddStudent'
import SingleCampus from "./components/containers/SingleCampus"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/student/:id' component={SingleCampus} />
          <Route exact path='/addstudent' component={AddStudent} />
        </Switch>
      </Router>
    )
  }
}

export default App
