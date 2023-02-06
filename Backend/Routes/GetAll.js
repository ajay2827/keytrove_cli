const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth')

router.post('/',async(req,res)=>{
    try {
        const {authtoken}=req.body;
        const email=await authFunction(authtoken)
        const features = await Key.find({ email:email });
        if (features.length === 0) {
            console.info('No Data Exist');
            res.status(400).json({ msg: 'No Data Exist' })
            return;
        }
        res.status(200).json(features)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

module.exports=router