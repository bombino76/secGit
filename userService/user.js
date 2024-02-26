// userservice.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Mock user data
const users = [];

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`User Service listening at http://localhost:${port}`);
});
