const express = require('express')
const router = express.Router();
// Get the user model
const User = require('../models/User');

router.get('/', (req, res) => {
  const data = {
    pageTitle: "Home",
    heading: "SOMETHING ABOUT HOME"
  }
  res.render('pages/Home', {...data});
})

router.get('/about', (req, res) => {
  const data = {
    pageTitle: "About",
    heading: "About Page"
  }
  res.render('pages/About', {...data});
})

router.get('/contact', (req, res) => {
  const data = {
    pageTitle: "Contact",
    heading: "Contact Page"
  }
  res.render('pages/Contact', {...data});
})

router.get('/dashboard', (req, res) => {
  const data = {
    pageTitle: "Dashboard",
    heading: "Dashboard Page"
  }
  res.render('pages/Dashboard', {...data});
})

router.get("/signup", (req, res) => {
  const data = {
    pageTitle: "Signup",
    heading: "Registration",
    old: false,
    errors: false
  }
  res.render("pages/Signup", {...data}); // Spread operator
})

router.get("/signin", (req, res) => {
  const data = {
    pageTitle: "Signin",
    heading: "Signin Page"
  }
  res.render("pages/Signin", {...data});
})

router.get("/users", async (req, res) => {
  const users = await User.find();
  const data = {
    pageTitle: "Users List",
    heading: "All the users",
    users
  }

  res.render("pages/Users", {...data});
})

router.get('*', (req, res) => {
  const data = {
    pageTitle: "Dashboard",
    heading: "Dashboard Page"
  }
  res.render('pages/404', {...data});
})

module.exports = router;