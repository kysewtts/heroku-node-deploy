var express = require('express');
var app = express();

app.use(express.static('views'));

app.listen(5000 , function(){
  console.log("Server listening at port 5000");
});
