// Create Webserver
// Path: server.js
// var http = require('http');
// var server = http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello World\n");
// });
// server.listen(8000);
// console.log("Server running at http://localhost:8000");
// Create Webserver with Express
// Path: server.js
// var express = require('express');
// var app = express();
// app.get('/', function (request, response) {
//     response.send("Hello World");
// });
// app.listen(8000);
// console.log("Server running at http://localhost:8000");
// Create Webserver with Express and EJS
// Path: server.js
// var express = require('express');
// var app = express();
// app.set('view engine', 'ejs');
// app.get('/', function (request, response) {
//     response.render('index');
// });
// app.listen(8000);
// console.log("Server running at http://localhost:8000");
// Path: views/index.ejs
// <html>
//     <head>
//         <title>Hello World</title>
//     </head>
//     <body>
//         <h1>Hello World</h1>
//     </body>
// </html>
// Create Webserver with Express and EJS and Data
// Path: server.js
// var express = require('express');
// var app = express();
// app.set('view engine', 'ejs');
// app.get('/', function (request, response) {
//     response.render('index', { name: "John Doe" });
// });
// app.listen(8000);
// console.log("Server running at http://localhost:8000");
// Path: views/index.ejs
// <html>
//     <head>
//         <title>Hello <%= name %></title>
//     </head>
//     <body>
//         <h1>Hello <%= name %></h1>
//     </body>
// </html>
// Create Webserver with Express and EJS and Data and Module
// Path: server.js
// var express = require('express');
// var app = express();
// var skills = require('./skills');
// app.set('view engine', 'ejs');
// app.get('/', function (request, response) {
//     response
