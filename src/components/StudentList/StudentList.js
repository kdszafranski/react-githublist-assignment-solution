import React, { Component } from 'react';
import './StudentList.css';
import StudentRow from '../StudentRow/StudentRow';

class StudentList extends Component {
    constructor() {
        super();
        this.listItems = [];
    }

    render() {
        let listItems = this.props.studentList.map((student, i) => {
            console.log(i);
            return <StudentRow key={student._id} studentInfo={student} row={i} />            
        });

        return (
            <div>
                <h2>Students</h2>
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