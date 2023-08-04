const express = require('express')
const router = express.Router();
// getting the user model
const User = require('../models/User');
const Validation = require('../helpers/FormInputValidate');

router.post('/signup', async (req, res) => {
  const errors = Validation.ValidateRegistration(req.body);
  const count = Validation.ErrorCount(errors);
  const data = {
    pageTitle: "Signup",
    heading: "Registration",
    errors,
    old: req.body
  }
  if(count > 0) {
    // Some error
    res.render("pages/Signup", {...data});
  } else {
    // There is no error
    const user = await User.findOne({email: req.body.email});
    if(user) {
      // already exist with the same email
      data.errors.email = "Email already exist"; 
      res.render("pages/Signup", {...data});
    } else {
      // offcourse this is new email
     const newUser = new User(req.body); 
     await newUser.save();
     res.render("pages/Home", {pageTitle: "Home", heading: "Homepage"});
    }
  }
})


module.exports = router;