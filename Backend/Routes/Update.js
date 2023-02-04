const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth')

router.put('/',async(req,res)=>{
    try{
        const {key,value,ttl,authtoken,id}=req.body;
        const email=await authFunction(authtoken)
        if ( ttl == -1 ) {
            await client.set(`${id}` , `1`) ;
        }else {
            await client.setex(`${id}` , ttl , '1' ) ;
        }
        const features = await Key.find({_id:id , email:email}) ;
        console.log(features.length) ;
        if (features.length === 0) {
            console.info('Enter a valid id ');
            res.status(400).json({ msg: 'Enter a valid id' })
            return;
        }
        await Key.updateOne({_id:id},{$set:{key:key,value:value}})
       
        console.log("key Updated")
        res.status(200).json({message:"key updated"})
    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

module.exports=router;