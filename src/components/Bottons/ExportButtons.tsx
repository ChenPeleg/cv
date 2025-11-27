import { Component } from 'react';
import pdfCv from "../../assets/ChenPelegCV.pdf"


class ExportButtons extends Component<any, any> {

  download() {
    alert("down")
  }
  print = () => {
   if (location.href.includes("localhost")) {

   }
    window.print()
  }
  render() {
    return (
      <div className="buttons-wrapper">
        <a className="button" href={pdfCv} target="_blank" download title="Download CV" rel="noopener noreferrer"> <i className="fa fa-download"></i> </a>
        <div className="button" onClick={this.print} title="Print CV">
          <i className="fa fa-print"></i></div >
      </div >);
  }
}

export default ExportButtons;

