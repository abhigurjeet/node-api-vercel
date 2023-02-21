const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.listen(3000, () => {
  console.log(`API listening on PORT 3000 `)
})

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})