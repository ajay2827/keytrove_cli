const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth')

router.post('/',async(req,res)=>{
    try {
        const {key,value,ttl,authtoken}=req.body;
        const email=await authFunction(authtoken)
        const NewData={
            key:key,
            value:value,
            email:email
        }
        const data=await Key.find({ email: email, key: key });
        if(data.length!==0)
        {
          res.status(400).json({msg:"key is unique"});
          return;
        }
        const keydata = await Key.create(NewData);
        // console.log(keydata) ;
        if ( ttl == -1 ) {
            client.set(`${keydata._id}` , `1`) ;
        }else {
            client.setex(`${keydata._id}` , ttl , '1' ) ;
        }
        
       console.log("Key Added") ;
       res.status(200).json({message:"key added" , value:0})
    } catch (error) {
        console.log(error.message);
    res.status(500).json({ msg: error.message });
    }
})

module.exports=router