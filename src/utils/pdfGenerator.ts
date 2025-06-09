import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = async (element: HTMLElement, filename: string = 'Farhad_Nabizada_CV.pdf') => {
  try {
    // Configure html2canvas options for better quality and one-page constraint
    const canvas = await html2canvas(element, {
      scale: 3, // Higher resolution for crisp text
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      logging: false, // Disable logging for cleaner output
      imageTimeout: 0, // Disable timeout for better reliability
      removeContainer: true
    });

    const imgData = canvas.toDataURL('image/png', 1.0); // Maximum quality
    
    // A4 dimensions in mm
    const pageWidth = 210;
    const pageHeight = 297;
    
    // Calculate scaling to fit exactly one page
    const canvasAspectRatio = canvas.width / canvas.height;
    const pageAspectRatio = pageWidth / pageHeight;
    
    let imgWidth, imgHeight;
    
    if (canvasAspectRatio > pageAspectRatio) {
      // Canvas is wider than page ratio, scale by width
      imgWidth = pageWidth;
      imgHeight = pageWidth / canvasAspectRatio;
    } else {
      // Canvas is taller than page ratio, scale by height
      imgHeight = pageHeight;
      imgWidth = pageHeight * canvasAspectRatio;
    }
    
    // Center the image on the page
    const offsetX = (pageWidth - imgWidth) / 2;
    const offsetY = (pageHeight - imgHeight) / 2;

    // Create PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    // Add the image to fit exactly one page
    pdf.addImage(imgData, 'PNG', offsetX, offsetY, imgWidth, imgHeight, undefined, 'FAST');

    // Save the PDF
    pdf.save(filename);
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};

export const downloadCV = async (cvElementRef: React.RefObject<HTMLElement>) => {
  if (!cvElementRef.current) {
    console.error('CV element not found');
    return false;
  }

  // Show loading state (you can implement a loading indicator)
  const success = await generatePDF(cvElementRef.current);
  
  if (success) {
    console.log('CV downloaded successfully');
  } else {
    console.error('Failed to download CV');
  }
  
  return success;
}; 