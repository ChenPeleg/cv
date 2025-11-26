import React, { Component } from 'react';
import ProjectLinks from "./ProjectLinks"

class Projects extends Component<any, any> {
  render() {
    return (
      <div className="item">
        <span className="project-title"><a href={this.props.item.url} target="_blank" rel="noopener noreferrer">{this.props.item.projectName}</a></span> - <span className="project-tagline">{this.props.item.explanation}</span> <br></br> {this.props.item.links.length ? (this.props.item.links.map((item: any, key: any) => <ProjectLinks item={item} key={key} />)) : <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">{this.props.item.url}</a>}
      </div>
    );

  }
}

export default Projects;

