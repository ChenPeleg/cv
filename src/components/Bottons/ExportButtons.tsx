import React from "react";
import pdfCv from "../../assets/ChenPelegCV.pdf"


const ExportButtons: React.FC<any> = () => {
  const print = () => {
   if (location.href.includes("localhost")) {

   }
    window.print();
  };

  return (
    <div className="buttons-wrapper">
      <a className="button" href={pdfCv} target="_blank" download title="Download CV" rel="noopener noreferrer"> <i className="fa fa-download"></i> </a>
      <div className="button" onClick={print} title="Print CV">
        <i className="fa fa-print"></i></div >
    </div >);
};

export default ExportButtons;
