import {jsPDF} from 'jspdf';


export const useDownloadAsPdf = () => {
    const downloadAsPdf = () => {
      const doc = new jsPDF();
        const rootElement = document.getElementById('cv-wrapper');
        console.log(rootElement);
         doc.html(rootElement as HTMLElement);
         console.log(doc)
         doc.save('chen-peleg.pdf');
    }
    return {downloadAsPdf}
}
