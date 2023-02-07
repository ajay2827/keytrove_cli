const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// API for Signup 
// http://localhost:5055/signup/signup

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = {
      "name": name,
      "email": email,
      "password": password
    }
    const RepUser = await User.find({ email: email });
    if (RepUser.length !== 0) {
      console.info('User Exist With this Email ');
      res.status(400).json({ msg: 'User Exist with this Email' })
      return;
    }
    const NewUser = await User.create(user);
    const authtoken = NewUser.createJWT()
    process.env.ASSIGN_JWT = authtoken
    console.log(process.env.ASSIGN_JWT);
    res.status(200).json({ authtoken: authtoken })
    console.info('User Added ..');
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
}
)

module.exports = router;