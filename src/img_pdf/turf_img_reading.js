const fs = require('fs');
const turf = require('@turf/turf');

// Read the GeoJSON map file
const geojsonPath = 'path/to/your/map.geojson';
const geojson = JSON.parse(fs.readFileSync(geojsonPath, 'utf8'));

// Extract the boundary coordinates
const boundary = turf.polygonToLine(geojson.features[0].geometry);
const coordinates = boundary.geometry.coordinates;

console.log('Boundary coordinates:', coordinates);