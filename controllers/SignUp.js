const mongoose = require('mongoose') ;
const User = require('../models/User') ;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SignUp = async (user) =>{

    try{
        const exist = await User.find({email:user.email}) ;
    
    if ( exist.length !== 0 ) {
      console.info('User Exist With this Email ');
      return ;
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(user.password, salt);
    const object = {
      "name":user.name,
      "email":user.email,
      "password":hashpassword
    }
    const data = await User.create(object) ;
    const authtoken = jwt.sign(user.email , process.env.JWT_SECRET) ;
    console.log(authtoken) ;
    console.info('user Added ..') ;
  //   db.close() ;
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports=SignUp