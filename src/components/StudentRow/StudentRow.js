import React, { Component } from 'react';

class StudentRow extends Component {

    render() {
        let className = '';
        if (this.props.row % 2 === 1) {
            // alt rows
            let className = 'StudentList-altrow';
        }

        return (
            <tr className={className}>
                <td>{this.props.studentInfo.github}</td>
            </tr>
        );
    }
}

export default StudentRow;