const fs = require('fs');
const jwt=require('jsonwebtoken')
require('dotenv').config()

let temp;

const authFunction= async()=>{
  const token= fs.readFileSync('authToken.txt', 'utf8')
    const payload=await jwt.verify(token, process.env.JWT_SECRET)
    if(!payload){
      console.log('Invalid Login');
    }
    return payload.email
}
module.exports=authFunction;

