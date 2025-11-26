import { Component } from 'react';

class Language extends Component<any, any> {
  render() {
    return (
      <li>{this.props.item.language} <span className="lang-desc">({this.props.item.level})</span></li>
    );

  }
}

export default Language;

