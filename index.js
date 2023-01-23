const express = require('express') ;
const app = express() ;
require('dotenv').config() ;
const mongoose = require('mongoose') ;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./models/User') ; 
const { getMaxListeners } = require('./models/User');
mongoose.Promise = global.Promise ;

mongoose.set('strictQuery', false);

const db = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("DataBase is Connected "))
.catch((err)=>
    console.log(err)
);


const port = 5555 ;

app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

const addUser = async (user) =>{
          const exist = await User.find({email:user.email}) ;
          
          if ( exist.length !== 0 ) {
            console.info('User Exist With this Email ');
            return ;
          }
          const salt = await bcrypt.genSalt(10);
          const secpass = await bcrypt.hash(user.password, salt);
          const object = {
            "name":user.name,
            "email":user.email,
            "password":secpass
          }
          const data = await User.create(object) ;
          const authtoken = jwt.sign(user.email , process.env.JWT_SECRET) ;
          console.log(authtoken) ;
          console.info('user Added ..') ;
        //   db.close() ;
}

const signIn = async (user) =>{
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
module.exports = {addUser , signIn} ;




