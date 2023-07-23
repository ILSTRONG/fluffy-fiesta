// Create Webserver
// Path: server.js
// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("<h1>Hello World!</h1>");
// });
// server.listen(3000);
// console.log("Server is running on http://localhost:3000");
// Create Webserver with Express
// Path: server.js
// var express = require('express');
// var app = express();
// app.get('/', function(req, res) {
//     res.send("<h1>Hello World!</h1>");
// });
// app.listen(3000, function() {
//     console.log("Server is running on http://localhost:3000");
// });
// Create Webserver with Express and EJS
// Path: server.js
// var express = require('express');
// var app = express();
// app.set("view engine", "ejs");
// app.get('/', function(req, res) {
//     res.render("index");
// });
// app.listen(3000, function() {
//     console.log("Server is running on http://localhost:3000");
// });
// Path: views/index.ejs
// <h1>Hello World!</h1>
// Create Webserver with Express, EJS and Data
// Path: server.js
// var express = require('express');
// var app = express();
// app.set("view engine", "ejs");
// app.get('/', function(req, res) {
//     var data = {name: "John Doe", age: 34, skills: ["Javascript", "HTML", "CSS"]};
//     res.render("index", {data: data});
// });
// app.listen(3000, function() {
//     console.log("Server is running on http://localhost:3000");
// });
// Path: views/index.ejs
// <h1>Hello World!</h1>
// <p><%= data.name %> is <%= data.age %> years old.</p>
// <p>His skills are:</p>
// <ul>
//     <% for (var i = 0; i < data.skills.length; i++) { %>
//         <li><%= data.skills[i] %></li>
//     <% } %>
// </ul>
// Create Webserver with Express, EJS, Data and Layout
// Path