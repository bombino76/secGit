// productservice.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());

// Mock product data
const products = [];

app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json(newProduct);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Product Service listening at http://localhost:${port}`);
});
