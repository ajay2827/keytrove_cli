const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth')

router.post('/',async(req,res)=>{
    try {
        const {authtoken}=req.body;
        const email=await authFunction(authtoken);
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        const features = await Key.find({ email:email });
        res.status(200).json(features)
    } catch (error) {
        console.log(error);
    }
})

module.exports=router