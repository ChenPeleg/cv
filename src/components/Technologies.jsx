import React, { Component } from 'react';


class Technologies extends Component {
  render() {
    console.log()
    return (
      <div className="item">
        <span className="technology-title"> {this.props.item.TechName}</span>: <span className="project-tagline">{this.props.item.TechExplanation}</span>
      </div>
    );

  }
}

export default Technologies;
