import React, { Component } from 'react';

class StudentRow extends Component {
    constructor() {
        super();

        this.handleDetails = this.handleDetails.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDetails(event) {
        event.preventDefault();
        this.props.getData(this.props.studentInfo);    
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.deleteStudent(this.props.studentInfo._id);
    }

    render() {
        let className = '';
        if (this.props.row % 2 === 1) {
            // alt rows
            let className = 'StudentList-altrow';
        }

        return (
            <tr className={className}>
                <td>{this.props.studentInfo.github}</td>
                <td>
                    <button onClick={this.handleDetails}>More Details</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        );
    } // end render
} // end StudentRow class

export default StudentRow;