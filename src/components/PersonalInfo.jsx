import React, { Component } from 'react';


class PersonalInfo extends Component {
  render() {

    return (
      <div className="item">
        <span className="technology-title"> {this.props.item.title}</span>: <span className="project-tagline">{this.props.item.content}</span>
      </div>
    );

  }
}

export default PersonalInfo;
