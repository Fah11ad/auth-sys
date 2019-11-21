const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt'); //(3-auth)
const passport = require('passport'); //(6-auth)


//User model (1-auth)
const User = require('../models/User')

//Login Page
router.get('/login', (req, res) => res.render('login')) //render all login page

//Register Page
router.get('/register', (req, res) => res.render('register')) //render all register page

//Register Handle
router.post('/register', (req, res) => {
    console.log(req.body) // to check after insert data in register form
    const { name, email, password, password2 } = req.body;
  let errors = []; 
    // Check required field
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }
  //Check password match
  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }
  // Check pass length
  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
      // Validation passed
      User.findOne({ email: email }) // (2- auth)check if email is exist
      .then(user =>{
          if(user) {
              //Users exists
              error.push({ msg: 'Email is already registered'})
            res.render('register', {
                errors,
                name,
                email,
                password,
                password2
              });
          }else {
            const newUser = new User({
                name,
                email,
                password
            });
            // console.log(newUser);
            // res.send('hello')
            
            // Hash Password (4-auth)
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  //Set pass to hash
                  newUser.password = hash;
                  // Save user
                  newUser
                    .save()
                    .then(user => {
                      req.flash(
                        'success_msg',
                        'You are now registered and can log in'
                      );
                      res.redirect('/users/login');
                    })
                    .catch(err => console.log(err));
                });
              });
          }
      })
  }
})
// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});



module.exports = router