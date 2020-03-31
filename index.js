var express = require('express');
var app = express();
var port = 3000;
var path = require("path");

app.set("view options", { layout: false });
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {//routes
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(port, function () {
  console.log('server running')
})
//restart server to grab changes
//node modules  - npm install