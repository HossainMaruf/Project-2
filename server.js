const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

// Import the controllers
const pagesRoute = require('./controllers/PagesController');
const authRoute = require('./controllers/AuthController');

// select the view directory for our app
app.set('views', 'views');

// setting the templating engine
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// setting the routes
app.use("/", pagesRoute);
app.use('/', authRoute);

// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/NoteBook").then(() => {
  console.log("DB Connected");
});
// create the server
app.listen(3000);