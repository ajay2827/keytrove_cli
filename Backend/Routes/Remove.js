const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth');

router.delete('/',async(req,res)=>{
    try{
        const {authtoken,id}=req.body;
        const email=await authFunction(authtoken);
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        const feature=await Key.find({email:email, _id:id})
            const val = await client.get(`${feature._id}`) ;
            if ( val == 1 ) {
                await client.del(`${feature._id}`) ;
            }
            await Key.deleteOne({email:email ,_id:id});
            res.status(200).json({message:"key remove"})
    }
    catch(error)
    {
        console.log(error)
    }
})

module.exports=router;