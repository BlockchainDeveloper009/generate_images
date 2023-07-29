var express = require('express');
var app = express();
var fs = require("fs");
const contactsServer_port = 5000;

app.post('/addUser', function (req, res) {
    console.log(`__dirname = ${__dirname}`)
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })


// app.get('/api/contacts/', function (req, res) {
//     res.json({message: "Get all contacts"});

// })

// app with routes

app.use("api/contacts", require("api/contacts/routes/contactRoutes"));

// app.get('/:id', function (req, res) {
//     // First read existing users.
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        var users = JSON.parse( data );
//        var user = users["user" + req.params.id] 
//        console.log( user );
//        res.end( JSON.stringify(user));
//     });
//  })
 app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

var server = app.listen(contactsServer_port, function () {

   var host = server.address().address
   var port = server.address().port
   console.log(`__dirname = ${__dirname}`)
   console.log(`__dirname = ${__dirname}`)
   console.log("Example app listening at http://%s:%s", host, port)
})

console.log(server);