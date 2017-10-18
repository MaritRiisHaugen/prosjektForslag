const express = require('express')
const app = express()

const {client} = require("pg")


app.get('/', function (req, res) {
  res.send('')
})

app.use(express.static('public'));


app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})

app.get('/about', function (req, res) {
  res.send('about')
})

app.get('/login', function (req, res) {
  res.send('login')
})

app.get('/logout', function (req, res) {
  res.send('logout')
})

app.get('/home', function (req, res) {
  res.send('home')
})

app.post('/list/:name', function (req, res) {
  res.send('about')
})

app.post('/createAcct/:userName', function (req, res) {
  res.send('createAcct/:userName')
})

app.post('/done', function (req, res) {
  res.send('done')
})