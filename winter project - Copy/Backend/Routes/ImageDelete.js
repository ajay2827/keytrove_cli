const express = require('express');
const {client , Redis} = require('../db/Redis');
const Image = require('../models/Image');
const router = express.Router();
const authFunction = require('../auth');

router.delete('/',async(req,res)=>{
    try{
        const {authtoken,qkey}=req.body;
        const email=await authFunction(authtoken);
        const images=await Image.find({email:email,img_name:qkey})
        if (images.length === 0) {
            console.info('Enter a valid key ');
            res.status(400).json({ msg: 'Enter a valid key' })
            return;
        }
            await Image.deleteOne({img_name:qkey});
            res.status(200).json({message:"Image removed"})
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

module.exports=router;

