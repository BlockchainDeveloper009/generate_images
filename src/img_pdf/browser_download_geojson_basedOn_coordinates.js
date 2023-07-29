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

// Create a Blob object from the GeoJSON string
const blob = new Blob([geojsonString], { type: 'application/json' });

// Create a download link
const downloadLink = document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = 'map.geojson';
downloadLink.style.display = 'none';

// Add the download link to the document body
document.body.appendChild(downloadLink);

// Simulate a click event on the download link to trigger the download
downloadLink.click();

// Clean up by removing the download link
document.body.removeChild(downloadLink);
