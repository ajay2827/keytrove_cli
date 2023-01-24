const mongoose = require('mongoose') ;
const User = require('../models/User') ;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const SignIn = async (user) =>{
     try
     {
        const exist = await User.find({email:user.email}) ; 
        if ( exist.length === 0 ) {
            console.info('Please SignUp First Then SignIn'); ;
            return ;
          }
          console.log(exist[0].password) ;
          const passwordCompare = await bcrypt.compare(user.password , exist[0].password) ;
          if ( !passwordCompare ) {
            console.info("Use Correct Password") ;
            return ;
          }
          const authtoken = jwt.sign(user.email , process.env.JWT_SECRET) ;
          console.log(authtoken) ;
          console.log("signined .") ; 
     }
     catch(err)
     {
        console.log(err);
     }
}

module.exports=SignIn