import React from 'react';
import pdfCv from '../../assets/ChenPelegCV.pdf'
import {useDownloadAsPdf} from '../../pdf/useDownloadAsPdf.tsx';


const ExportButtons: React.FC<any> = () => {
    const {downloadAsPdf} = useDownloadAsPdf()
    const newPDfDownload = location.href.includes('localhost')
    const print = () => {
        console.log(location.href );
        if (location.href.includes('localhost')) {
            return downloadAsPdf()
        }
        window.print();
    };

    return (
        <div className="buttons-wrapper">
            {!newPDfDownload  ? (    <a className="button" href={pdfCv} target="_blank" download title="Download CV" rel="noopener noreferrer"> <i
                className="fa fa-download"></i> </a>) : (   <div className="button" onClick={downloadAsPdf} title="Download CV as PDF">
                <i className="fa fa-download"></i></div>)}

            <div className="button" onClick={print} title="Print CV">
                <i className="fa fa-print"></i></div>
        </div>);
};

export default ExportButtons;
