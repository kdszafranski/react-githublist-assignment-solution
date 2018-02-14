import React, { Component } from 'react';
import './StudentList.css';

class StudentList extends Component {
    constructor() {
        super();
        this.listItems = [];
    }

    render() {
        let listItems = this.props.studentList.map((student, i) => {
            console.log(i);
            let el;
            if(i % 2 == 1) {
                // alt rows
                el = <tr key={student._id} className="StudentList-altrow"><td>{student.github}</td></tr>; 
            } else {
                el = <tr key={student._id}><td>{student.github}</td></tr>;
            }

            console.log(el);
            

            return el;
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