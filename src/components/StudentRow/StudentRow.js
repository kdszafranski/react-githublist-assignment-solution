import React, { Component } from 'react';

class StudentRow extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        console.log('clicked', this.props);
        this.props.getData(this.props.studentInfo);        
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
                    <button onClick={this.handleClick}>More Details</button>
                </td>
            </tr>
        );
    }
}

export default StudentRow;