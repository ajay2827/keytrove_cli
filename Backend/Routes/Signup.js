const express = require('express') ;
const router = express.Router() ;
const { body, validationResult } = require('express-validator');
const User = require('../models/User') ;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



// API for Signup 
// http://localhost:5055/signup/signup



router.post('/' ,[
  body('name' , 'name must be atleast 3 character').isLength({ min: 3 }),
    body('email' , 'Enter A valid email').isEmail(),
    body('password' , 'Enter a valid password').isLength({ min: 5 })
], async (req,res)=>{
    const errors = validationResult(req).errors;
    if (errors.length!=0) {
      return res.status(400).json({ errors: errors , value:-2 });
    }
   try {
    const {name , email , password  } = req.body ;
      const user = {
        "name":name,
        "email":email,
        "password":password
      }

    const RepUser = await User.find({ email: email });

    if (RepUser.length !== 0) {
      console.info('User Exist With this Email ');
      return;
    }
    const NewUser = await User.create(user);
    const authtoken = NewUser.createJWT()
    process.env.ASSIGN_JWT=authtoken
    console.log(process.env.ASSIGN_JWT);
    res.status(200).json({authtoken: authtoken})
    console.info('user Added ..');
   } catch (error) {
    console.log(error.message);
    res.status(500).json({ message:"server error occured" , value :-1});
   }
    },
)

module.exports = router;