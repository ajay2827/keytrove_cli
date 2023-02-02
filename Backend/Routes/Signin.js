const express = require('express') ;
const router = express.Router() ;
const { body, validationResult } = require('express-validator');
const User = require('../models/User') ;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// api for siginin
// http://localhost:5055/signin/signin


router.post('/' ,[
    body('email' , 'Enter A valid email').isEmail(),
    body('password' , 'Enter a valid password').isLength({ min: 5 })
], async (req,res)=>{
    const errors = validationResult(req).errors;
    if (errors.length!=0) {
      return res.status(400).json({ errors: errors , value:-2 });
    }
   try {
    const {email , password} = req.body ;
    const exist = await User.find({email:email}) ; 
    if ( exist.length === 0 ) {
        console.info('Please SignUp First Then SignIn'); ;
        return ;
      }
      
      const passwordCompare = await exist[0].comparePassword(password) ;
      if ( !passwordCompare ) {
        console.info("Use Correct Password") ;
        return ;
      }
      const authtoken = await exist[0].createJWT()
      console.log(authtoken) ;
      res.status(200).json({authtoken:authtoken}) ;
      console.log("signined .") ; 
   } catch (error) {
    console.log(error.message);
    res.status(500).json({ message:"server error occured" , value :-1});
   }
    },
)

module.exports = router;