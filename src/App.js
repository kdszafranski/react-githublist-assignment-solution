import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from './components/StudentForm/StudentForm';
import StudentList from './components/StudentList/StudentList';

class App extends Component {
  constructor() {
    super();
    // Keep track of the student list
    this.state = {
      studentList: [],
    };

    // Give our function access to `this`
    this.addStudent = this.addStudent.bind(this);

    this.getStudents();
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent(newStudent) {
    console.log(newStudent);
    // POST your data here
    axios.post('/students', newStudent)
      .then((response) => {
        // console.log(response);    
        this.getStudents();    
      })
      .catch((error) => {
        console.log('error posting: ', error);
      });
  }

  getStudents() {
    console.log('here');
    
    axios.get('/students')
      .then((response) => {
        console.log(response.data);
        // just give it the object you want to store
        this.setState({ studentList: response.data });
      })
      .catch((error) => {
        console.log('error get students: ', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <StudentList studentList={this.state.studentList}/>
      </div>
    );
  }
}

export default App;
