import React, { Component } from 'react';
import './StudentList.css';
import StudentRow from '../StudentRow/StudentRow';

class StudentList extends Component {
    constructor({getGithubData}) {
        super();
        this.listItems = [];
    }

    
    render() {
        let listItems = this.props.studentList.map((student, i) => {
            console.log(i);
            console.log(this.props);
            
            return <StudentRow key={student._id} studentInfo={student} row={i} getData={this.props.getGithubData}/>
        });

        return (
            <div className="column">                
                <table className="StudentList-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;