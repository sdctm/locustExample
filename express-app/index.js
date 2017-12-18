'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({ message: 'Success' });
});

app.post('/login', (req, res) => {
  res.json({ message: 'You are in!' });
});

// app.get('/profile', (req, res) => {
//   res.json({ message: 'welcome' });
// });

app.listen(8080, () => {
  console.log('listening on port 8080');
});
