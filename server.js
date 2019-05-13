const express = require('express');
const app = express();
const server = require('http').Server(app);

server.listen(4004);
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('/index.html', {
      root: './dist/'
    });
  });