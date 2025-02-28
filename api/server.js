const express = require('express');

const Hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/hobbits', (req, res) => {
  Hobbits.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/hobbits', (req, res) => {
  Hobbits.insert(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
