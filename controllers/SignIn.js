const mongoose = require('mongoose') ;
const User = require('../models/User') ;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const fs = require('fs');

const SignIn = async (user) =>{
     try
     {
        const exist = await User.find({email:user.email}) ; 
        if ( exist.length === 0 ) {
            console.info('Please SignUp First Then SignIn'); ;
            return ;
          }
          
          const passwordCompare = await exist[0].comparePassword(user.password) ;
          if ( !passwordCompare ) {
            console.info("Use Correct Password") ;
            return ;
          }
          const authtoken = await exist[0].createJWT()
          console.log(authtoken) ;
          fs.writeFile("authToken.txt", authtoken, (err) => {
            if (err)
              console.log('SignIn Again');
              return;
          });
          console.log("signined .") ; 
          const fun = () =>{
            process.exit(0) ;
        }
        setTimeout(fun, 1000);
     }
     catch(err)
     {
        console.log(err);
     }
}

module.exports=SignIn