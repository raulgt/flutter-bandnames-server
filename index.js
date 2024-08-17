const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./socket/socket');




// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log('El servidor esta corriendo en el puerto: ', process.env.PORT);
});


