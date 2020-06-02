import React, { Component } from 'react';


class ProjectLinks extends Component {
  render() {
    return (
      <>
        <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">{this.props.item.title}</a><br></br></>
    );

  }
}

export default ProjectLinks;
