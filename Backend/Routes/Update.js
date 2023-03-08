const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth')

router.put('/',async(req,res)=>{
    try{
        const {key,value,ttl,authtoken,id}=req.body;
        const email=await authFunction(authtoken)
        const features = await Key.find({_id:id , email:email}) ;
        if (features.length === 0) {
            console.info('Enter a valid id ');
            res.status(400).json({ msg: 'Enter a valid id' })
            return;
        }
        const val = await client.get(features[0]._id);
        if ( val != 1 ) {
            console.info('Enter a valid id ');
            res.status(400).json({ msg: 'Enter a valid id' })
            return;
        }
        if ( ttl == -1 ) {
            await client.set(`${features[0]._id}` , `1`) ;
        }else {
            await client.setex(`${features[0]._id}` , ttl , '1' ) ;
        }
        await Key.updateOne({_id:features[0]._id},{$set:{key:key,value:value}})   
        console.log("key Updated")
        res.status(200).json({message:"key updated"})
    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

module.exports=router;