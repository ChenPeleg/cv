import { Component } from 'react';

class Education extends Component<any, any> {
  render() {
    return (
      <div className="item">
        <h4 className="degree">{this.props.item.title}</h4>
        <h5 className="meta">{this.props.item.content}</h5>
        <div className="time">{this.props.item.date}</div>
      </div>
    );

  }
}

export default Education;

