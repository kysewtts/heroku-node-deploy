var express = require('express');
var port = process.env.PORT || 5000;
var app = express();

var index = app.listen(port , function(){
  console.log("Server listening at port 5000");
});

app.use(express.static('views'));
