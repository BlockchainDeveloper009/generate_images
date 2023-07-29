const fs = require('fs');
const { PDFDocument } = require('pdfjs-dist');

async function extractMapFromPDF(pdfPath, outputPath) {
  // Load the PDF file
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  console.log(data)
  const pdf = await PDFDocument.load(data);

  // Get the first page
  const page = pdf.getPage(0);

  // Convert the page to an image
  const image = await page.asPNG({ scale: 2.0 }); // Adjust the scale as needed

  // Save the image to the output file
  fs.writeFileSync(outputPath, image);
}

// Usage example
const pdfPath = './Donnie-Creek-EvacOrder5_Map_20230530.pdf';
const outputPath = './output/image.png';

var t = extractMapFromPDF(pdfPath, outputPath)
        .then(() => {
                console.log('Map extracted successfully!');
            })
        .catch((error) => {
                console.error('Error extracting map:', error);
        });
