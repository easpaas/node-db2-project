const express = require('express');
const helmet = require('helmet');

// const fruitsRouter = require('../fruits/fruits-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/fruits', fruitsRouter);

// api is up and running
server.get('/', (req, res) => {
  res.status(200).json({ message: 'up'});
})

module.exports = server;
