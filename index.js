const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log(`API listening on PORT 3000 `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})