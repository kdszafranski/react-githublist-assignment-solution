import React, { Component } from 'react';
import './GithubInfoPanel.css';

class GithubPanel extends Component {

    render() {
        if (this.props.student.hasOwnProperty('bio')) {
            return (
                <div className="column">                
                        <div className="GithubInfoPanel">
                            <img src={this.props.student.avatar_url} />
                            <h2><a href={this.props.student.html_url}>{this.props.student.name}</a></h2>
                            <p>{this.props.student.bio}</p>
                        </div>                    
                </div>
            );
        } else {
            return <div className="column"></div>
        }
    } // end render

} // end class

export default GithubPanel;