import fs from 'fs';
import PDFParser from 'pdf2json';

// Rest of the code remains the same...


function extractMapFromPDF(pdfPath, imagePath) {
    return new Promise((resolve, reject) => {
      const pdfParser = new PDFParser();
  
      pdfParser.on('pdfParser_dataReady', function (pdfData) {
        const mapImage = pdfData.formImage.Pages[0].Images[0];
        const imageData = mapImage.data;
        const imageBuffer = Buffer.from(imageData, 'base64');
  
        fs.writeFile(imagePath, imageBuffer, function (error) {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
  
      pdfParser.on('pdfParser_dataError', reject);
  
      pdfParser.loadPDF(pdfPath);
    });
  }
  
  // Usage example
  
  const pdfPath = './Donnie-Creek-EvacOrder5_Map_20230530.pdf';
  const outputPath = './output/image.png';
  extractMapFromPDF(pdfPath, imagePath)
    .then(() => {
      console.log('Map extracted successfully!');
    })
    .catch((error) => {
      console.error('Error extracting map:', error);
    });
  

