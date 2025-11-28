import React from 'react';
import pdfCv from '../../assets/ChenPelegCV.pdf'
import {useDownloadAsPdf} from '../../pdf/useDownloadAsPdf.tsx';
import {CircleIcon} from '../CircleIcon/CircleIcon.tsx';


const ExportButtons: React.FC<any> = () => {
    const {downloadAsPdf} = useDownloadAsPdf()
    const newPDfDownload = location.href.includes('localhost')
    const print = () => {

        window.print();
    };

    return (
        <div className="absolute right-8 lg:top-6 top-40 z-10 flex flex-row gap-5 print:hidden export-buttons">
            {!newPDfDownload  ? (    <a className="button cursor-pointer rounded-full shadow" href={pdfCv} target="_blank" download title="Download CV" rel="noopener noreferrer">

                <CircleIcon name={'save'}/>

            </a>) : (   <div className="button cursor-pointer rounded-full hover:shadow" onClick={downloadAsPdf} title="Download CV as PDF">
                <CircleIcon name={'save'}/>
            </div>)}

            <div className="button cursor-pointer rounded-full hover:shadow" onClick={print} title="Print CV">
                <CircleIcon name={'print'}/>

            </div>
        </div>);
};

export default ExportButtons;
