var express = require('express');
var app = express();

app.use(express.static('BAPRASHackathon'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/html/index.html')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
