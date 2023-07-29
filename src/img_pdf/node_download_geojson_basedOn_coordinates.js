const fs = require('fs');
var longitude = '29.9902199'
var latitude = '-95.33678270000001'
// Define the GeoJSON data
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude] // Replace with your desired coordinates
      }
    }
  ]
};

// Convert the GeoJSON to a string
const geojsonString = JSON.stringify(geojson, null, 2);

// Write the GeoJSON to a file
const filePath = 'map.geojson';
fs.writeFileSync(filePath, geojsonString);

console.log('Map GeoJSON file created successfully!');

// Prompt the user to download the file
const fileData = fs.readFileSync(filePath);
const base64Data = Buffer.from(fileData).toString('base64');

console.log('Download the map.geojson file:');

const downloadLink = document.createElement('a');
downloadLink.href = 'data:application/octet-stream;base64,' + base64Data;
downloadLink.download = 'map.geojson';
downloadLink.click();
