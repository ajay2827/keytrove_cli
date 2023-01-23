const User=require('../models/User')

const addUser= (user)=>{
    User.create(user)
    console.info('User Added')
}
module.exports= addUser