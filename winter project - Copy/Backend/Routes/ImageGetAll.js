const express = require('express');
const {client , Redis} = require('../db/Redis');
const Image = require('../models/Image');
const router = express.Router();
const authFunction = require('../auth')

router.post('/',async(req,res)=>{
    try {
        const {authtoken}=req.body;
        const email=await authFunction(authtoken)
        const images = await Image.find({email:email});
        if (images.length === 0) {
            console.info('No Data Exist');
            res.status(400).json({ msg: 'No Data Exist' })
            return;
        }
        res.status(200).json(images)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

module.exports=router