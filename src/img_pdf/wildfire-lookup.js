
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var turf = require('turf-inside');

async function loadRecordsFromS3(key){
    const params = { Bucket: "wildfiredata", Key: key };
    const result = await s3.getObject(params).promise();
    return result;
}

exports.handler = async (event) => {
    
    let body, turfcrit;
    var isInsidePerim = undefined, geoJsonRecords = undefined, rv={FIRE_NUMBE:"NONE"};  
    
    if (event.body){
        body = JSON.parse(event.body);
        turfcrit = body.farm;
    } else {
        turfcrit = event.queryStringParameters.c.split(",").map(c=>Number(c));
    }
    
    let geoRecords = await loadRecordsFromS3("firesall.json");
    geoJsonRecords = JSON.parse(geoRecords.Body.toString());

    geoJsonRecords.features.forEach(wildfire=>{
        isInsidePerim = turf(turfcrit, wildfire);
        if (isInsidePerim) rv = wildfire.properties;
    });            
    
    var apigatewayReply = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {},
        "body": JSON.stringify(rv)
    };
    
    return apigatewayReply;
    
};
