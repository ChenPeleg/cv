import React from 'react';
import pdfCv from '../../assets/ChenPelegCV.pdf'
import {useDownloadAsPdf} from '../../pdf/useDownloadAsPdf.tsx';
import {CircleIcon} from '../CircleIcon/CircleIcon.tsx';


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
            {!newPDfDownload  ? (    <a className="button" href={pdfCv} target="_blank" download title="Download CV" rel="noopener noreferrer">

                <CircleIcon name={'download'}/>

            </a>) : (   <div className="button" onClick={downloadAsPdf} title="Download CV as PDF">
                <CircleIcon name={'download'}/>
            </div>)}

            <div className="button cursor-pointer rounded-full shadow" onClick={print} title="Print CV">
                <CircleIcon name={'print'}/>

            </div>
        </div>);
};

export default ExportButtons;
