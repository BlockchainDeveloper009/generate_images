const Jimp = require('jimp');

let testFolderPath = './images'
async function generateImages() {
    const width = 800;
    const height = 600;
  
    for (let i = 0; i < 2; i++) {
      const image = new Jimp(width, height);
  
      // Modify the image to create your desired image
      // For example, set pixel colors, apply filters, add text, etc.
  
      // Save the image to a file
      await image.writeAsync(`${testFolderPath}/image_${i}.png`);
    }
  }

  var t = generateImages()
  .then(() => console.log('Image generation completed.'))
  .catch((error) => console.error('Error generating images:', error));

  console.log(t)