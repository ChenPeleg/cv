import React, { Component } from 'react';

class Technologies extends Component<any, any> {
  render() {
    return (
      <div className="item">
        <span className="technology-title"> {this.props.item.TechName}</span>: <span className="project-tagline">{this.props.item.TechExplanation}</span>
      </div>
    );

  }
}

export default Technologies;

