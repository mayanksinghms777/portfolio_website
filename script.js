const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = 3000

staticpath = path.join(__dirname, 'public');
templatepath = path.join(__dirname, 'templates/views');
partialpath = path.join(__dirname, 'templates/partials');

app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);
app.use(express.static(staticpath));


app.get("/", (req, res) => {
  res.render("index");
})
app.get('/index', (req, res) => {
  res.render("index");
})
app.get('/Projects', (req, res) => {
  res.send('Hello World!')
})
app.get('/Resume', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})