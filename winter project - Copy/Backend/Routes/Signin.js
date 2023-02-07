const express = require('express') ;
const router = express.Router() ;
const { body, validationResult } = require('express-validator');
const User = require('../models/User') ;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// api for siginin
// http://localhost:5055/signin/signin

router.post('/' , async (req,res)=>{
   try {
    const {email , password} = req.body ;
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    if(!validateEmail(email) || !password){
      console.info('Please provide valid credentials');
      res.status(400).json({msg:'Please provide valid credentials'})
      return;
    }
    const exist = await User.find({email:email}) ; 
    if ( exist.length === 0 ) {
      console.info('Please SignUp first then SignIn');
      res.status(400).json({msg:'Please SignUp first then SignIn'})
      return;
      }  
      const passwordCompare = await exist[0].comparePassword(password) ;
      if ( !passwordCompare ) {
        console.info('Please provide valid credentials');
      res.status(400).json({msg:'Please provide valid credentials'})
      return;
      }
      const authtoken = await exist[0].createJWT()
      console.log(authtoken) ;
      res.status(200).json({authtoken:authtoken}) ;
      console.log("Successfully SignIn") ; 
   } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
   }
    },
)

module.exports = router;