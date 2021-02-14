const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport');

const User = require('../models/User')

//Sign Up handler
router.post('/signup', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

// All errors
  if(!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in empty fields '})
  }

  if(password !== password2) {
    errors.push({ msg: 'The passwords do not match' })
  }

  if(password.length < 6) {
    errors.push({ msg: 'The password must have at least 6 characters'})
  }

  if(errors.length > 0){
    res.status(200).json({success: true, message: "signned up succesfully!"})
  } else {
    User.findOne({ email: email })
    .then(user => {
      if(user) {
        errors.push({ msg: 'Email is already in use' })
        res.status(400)
      } else {
        const newUser = new User({
          name,
          email,
          password
        })

        //Password hash
        bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;

          newUser.password = hash;
          newUser.save()
          .then(user => {
            res.status(300).json({success: true})
          })
          .catch(err => console.log(err))
        }))
      }
    });
  }
});

module.exports = router;