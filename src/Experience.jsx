import React, { Component } from 'react';


class Experience extends Component {
  render() {
    console.log(this.props.item.date)
    return (
      <div className="item">
        <div className="meta">
          {this.props.item.date ? <div className="upper-row">
            <h3 className="job-main-title">{this.props.item.title}</h3>
            <div className="time">{this.props.item.date}</div>
          </div> : null}
          <div className="company">{this.props.item.location}</div>
        </div>
        <h4 className=" job-title">{this.props.item.subtitle}</h4>
        <div className="details">
          {this.props.item.explanation}
        </div>
      </div>


    );

  }
}

export default Experience;
