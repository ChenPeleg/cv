import { Component } from 'react';

class Experience extends Component<any, any> {
  render() {

    return (
      <div className="item" style={this.props.item.toBeContinued ? { marginBottom: "5px" } : undefined}>
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-main-title">{this.props.item.title}</h3>
            {this.props.item.date ? <div className="time">{this.props.item.date}</div> : null}
          </div>
          {/* <div className="company">{this.props.item.location}</div> */}
        </div>
        <span className="job-title">{this.props.item.subtitle ? this.props.item.subtitle + ":" : null}</span> {this.props.item.explanation}
        <div className="details">

        </div>
      </div>


    );

  }
}

export default Experience;
