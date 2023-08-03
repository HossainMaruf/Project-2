const express = require('express')
const router = express.Router();

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
    heading: "Registration"
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

router.get('*', (req, res) => {
  const data = {
    pageTitle: "Dashboard",
    heading: "Dashboard Page"
  }
  res.render('pages/404', {...data});
})

module.exports = router;