const express = require('express')
const path = require('path')
const app = express()


// select the view directory for our app
app.set('views', 'views');
// setting the templating engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  const data = {
    pageTitle: "Home",
    heading: "SOMETHING ABOUT HOME"
  }
  res.render('Home', {data});
})

app.get('/about', (req, res) => {
  const data = {
    pageTitle: "About",
    heading: "About Page"
  }
  res.render('About', {data});
})

app.get('/contact', (req, res) => {
  const data = {
    pageTitle: "Contact",
    heading: "Contact Page"
  }
  res.render('Contact', {data});
})

app.get('/dashboard', (req, res) => {
  res.render('Dashboard');
})

app.get('*', (req, res) => {
  res.render('404');
})


// create the server
app.listen(3000);