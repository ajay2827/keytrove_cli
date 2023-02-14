const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth');

router.delete('/',async(req,res)=>{
    try{
        const {authtoken,id}=req.body;
        const email=await authFunction(authtoken);
       
        const feature=await Key.find({email:email, _id:id})
        if (feature.length === 0) {
            console.info('Enter a valid key ');
            res.status(400).json({ msg: 'Enter a valid key' })
            return;
        }
            const val = await client.get(`${feature._id}`) ;
            if ( val == 1 ) {
                await client.del(`${feature._id}`) ;
            }else {
                res.status(200).json({message:"Key Not Found"}) ;
                await Key.deleteOne({email:email ,_id:id});
                return ;
            }
            await Key.deleteOne({email:email ,_id:id});
            res.status(200).json({message:"key removed"})
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

module.exports=router;

