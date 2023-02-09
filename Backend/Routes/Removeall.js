const express = require('express');
const {client , Redis} = require('../db/Redis');
const Key = require('../models/Features');
const router = express.Router();
const authFunction = require('../auth');

router.delete('/',async(req,res)=>{
    try
    {
        const {authtoken,qkey}=req.body;
        const email=await authFunction(authtoken);
        const features=await Key.find({email:email})
        if (features.length === 0) {
            console.info('No Data');
            res.status(400).json({ msg: 'No Data' })         
    }
    // redis wala delete
    features.map(async(feature)=>{
        await client.del(`${feature._id}`); 
    })
    // delete all mongo data
    await Key.deleteMany({email:email}) 
    res.status(200).json({message:"All Key Removed"})

}
    catch(error)
    {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

module.exports=router;