import React, { Component } from 'react';


class PersonalInfo extends Component {
  render() {

    return (
      this.props.item.title ? <div className="item">
        <span className="technology-title"> {this.props.item.title}</span>: <span className="project-tagline">{this.props.item.content}</span>
      </div> : null
    );

  }
}

export default PersonalInfo;
