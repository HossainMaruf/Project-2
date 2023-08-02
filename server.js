const express = require('express')
const path = require('path')
const app = express()


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'views', "Home.html"));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', "About.html"));
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', "Contact.html"));
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', "Dashboard.html"));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', "404.html"));
})


// create the server
app.listen(3000);