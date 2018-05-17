import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from './components/StudentForm/StudentForm';
import StudentList from './components/StudentList/StudentList';
import GithubInfoPanel from './components/GithubInfoPanel/GithubInfoPanel';

class App extends Component {
  constructor() {
    super();
    // Keep track of the student list
    this.state = {
      studentList: [],
      currentStudent: {}
    };

    // Give our function access to `this`
    this.addStudent = this.addStudent.bind(this);
    this.getGithubData = this.getGithubData.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);

    this.getStudents();
  } // end constructor

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
    console.log('getting students from server');
    
    axios.get('/students')
      .then((response) => {
        // just give it the object you want to store
        this.setState({ studentList: response.data });
      })
      .catch((error) => {
        console.log('error get students: ', error);
      });
  }

  deleteStudent(id) {
    console.log('to delete: ', id); 
    axios.delete(`/students/${id}`)
      .then((response) => {
        this.getStudents();
      })
      .catch((error) => {
        console.log('error delete student: ', error);
      });   
  }

  getGithubData(student) {
    console.log('go get github data', student);   
    
    const url = `https://api.github.com/users/${student.github}`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);        
        this.setState({ currentStudent: response.data });
      })
      .catch((error) => {
        this.setState({ currentStudent: {} });
        console.log('error get students: ', error);
      });    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <StudentForm addStudent={this.addStudent} />
        <div className="container">
          <h2 className="column">Saved Github Users</h2>
        </div>
        <div className="container">
          <StudentList getGithubData={this.getGithubData} deleteStudent={this.deleteStudent} studentList={this.state.studentList} />

          <GithubInfoPanel student={this.state.currentStudent}/>        
        </div>
      </div>
    );
  } // end render
} // end App class

export default App;
