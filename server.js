const express = require('express')
const app = express()

// Import the controllers
const pagesRoute = require('./controllers/PagesController');

// select the view directory for our app
app.set('views', 'views');
// setting the templating engine
app.set('view engine', 'ejs');
// setting the routes
app.use("/", pagesRoute);
// create the server
app.listen(3000);