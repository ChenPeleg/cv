import {jsPDF} from 'jspdf';


export const useDownloadAsPdf = () => {
    const downloadAsPdf = async () => {
      const doc = new jsPDF();
      //assets/plugins/font-awesome/css/font-awesome.css
        doc.addFont('assets/plugins/font-awesome/css/font-awesome.css', 'FontAwesome', 'normal', 'StandardEncoding');
        doc.setFont('FontAwesome');     const rootElement = document.getElementById('cv-wrapper');
        console.log(rootElement);
       const result =  doc.html(rootElement as HTMLElement, {
             x: 0,
             y: 0,
           width: 190, // A4 width (210mm) minus margins
           windowWidth:   800,
           autoPaging: 'text'
         });
        await result.save('chen-peleg.pdf')
    }
    return {downloadAsPdf}
}
