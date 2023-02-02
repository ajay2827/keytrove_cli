const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth')

router.post('/',async(req,res)=>{
    try {     
        const {key,authtoken}=req.body;
        const email=await authFunction(authtoken);
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        
        const features = await Key.find({ email: email, key: key });
        if (!features.length === 0) {
            console.info('Enter a valid key');
            return;
        }
        // features.map( async(feature) => {
        //     const val = await client.get(`${feature._id}`) ;
        //     if ( val == 1 ) {
        //         console.log(`${feature.key} -> ${feature.value}`);
        //     }
        // })
        res.status(200).json(features);

    } catch (error) {
        console.log(error);
    }

})

module.exports=router