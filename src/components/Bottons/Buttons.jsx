import React, { Component } from 'react';


class Buttons extends Component {
  state = { stylePath: "colorprint.css", grey: "greyprint.css", color: "colorprint.css" }

  download() {
    alert("down")
  }
  print = () => {

    window.print()
  }
  render() {
    return (
      <div className="buttons-wrapper">
        <a className="button" href="/ChenPelegCV.pdf" target="_blank" download title="Download CV"> <i className="fa fa-download"></i> </a>

        <div className="button" onClick={this.print} title="Print CV">
          <i className="fa fa-print"></i></div >

      </div >);
  }
}

export default Buttons;
