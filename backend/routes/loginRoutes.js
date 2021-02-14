const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: 'http://localhost:3000/shop',
      failureRedirect: 'http://localhost:3000/',
      failureFlash: true
    })(req, res, next);
  });

  module.exports = router;