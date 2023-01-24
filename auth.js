const fs = require('fs');
const jwt=require('jsonwebtoken')
require('dotenv').config()

const authFunction= ()=>{
  fs.readFile('authToken.txt', 'utf8', async function(err, data){
    if(err){
      console.log('Sign In to continue');
    }
    const token=data
    const payload=await jwt.verify(token, process.env.JWT_SECRET)
    if(!payload){
      console.log('Invalid Login');
    }
    console.log(payload.email);
    return payload.email
});
}
authFunction()
module.exports=authFunction

