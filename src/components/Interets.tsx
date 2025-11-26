import { Component } from 'react';

  

class Interests extends Component<any, any> {
  render() {
    return (
      <li>{this.props.item.hobi}</li>
    );
  }
}

export default Interests;

