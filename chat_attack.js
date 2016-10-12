var express = require("express");
var chat_attack = express();

chat_attack.get('/', function (req, res) {
  res.send("Chat Attack commencing!");
});

chat_attack.listen(3000, function () {
  console.log('rm -rfing, like a dg');
});

  
