const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth')

router.put('/',async(req,res)=>{
    try{
        const {key,value,ttl,authtoken,id}=req.body;
        const email=await authFunction(authtoken)
        if (!email) {
            console.log('SignIn to use this functionality');
            return;
        }
        if ( ttl == -1 ) {
            await client.set(`${id}` , `1`) ;
        }else {
            await client.setex(`${id}` , ttl , '1' ) ;
        }
        await Key.updateOne({_id:id},{$set:{key:key,value:value}})
        console.log("key Updated")
        res.status(200).json({message:"key updated"})
    }catch(error)
    {
       console.log(error)
    }
})

module.exports=router;