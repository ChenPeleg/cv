import React, { Component } from 'react';

class Skill extends Component<any, any> {
  render() {
    return (
      <div className="item">
        <h3 className="level-title">{this.props.item.skill}</h3>
        <div className="level-bar">
          <div className="level-bar-inner" data-level={this.props.item.percent}>
          </div>
        </div>
      </div>
    );

  }
}

export default Skill;

