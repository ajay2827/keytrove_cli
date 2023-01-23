const { db } = require('../models/User');
const User=require('../models/User')

const addUser= async(user)=>{
   await User.create(user).then(user=>{
    console.info("New user added");
    db.close();
   });
}
module.exports= addUser