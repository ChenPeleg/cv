import { jsPDF } from "jspdf";




export const useDownloadAsPdf = () => {
    const downloadAsPdf = () => {
        const doc = new jsPDF();

        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
    }
    return  {downloadAsPdf}
}
