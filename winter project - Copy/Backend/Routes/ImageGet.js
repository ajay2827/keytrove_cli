const express = require('express');
const {client , Redis} = require('../db/Redis');
const Image = require('../models/Image');
const router = express.Router();
const authFunction = require('../auth')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

router.post('/',async(req,res)=>{
    try {     
        const {key,authtoken}=req.body;  
        const email=await authFunction(authtoken);
        const images = await Image.find({ email:email,img_name: key });
        // console.log(images)
        if (images.length === 0) {
            console.info('Enter a valid key ');
            res.status(400).json({ msg: 'Enter a valid key' })
            return;
        }
        const URL=images[0].img_path
        const decryptedURL=cryptr.decrypt(URL)
        res.status(200).json({'key':key,'URL':decryptedURL})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }

})

module.exports=router