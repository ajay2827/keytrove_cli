const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const SignUp = async (user) => {

  try {
    const RepUser = await User.find({ email: user.email });

    if (RepUser.length !== 0) {
      console.info('User Exist With this Email ');
      return;
    }
    const NewUser = await User.create(user);
    const authtoken = NewUser.createJWT()
    process.env.ASSIGN_JWT=authtoken
    console.log(process.env.ASSIGN_JWT);
    console.info('user Added ..');
    //   db.close() ;
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = SignUp