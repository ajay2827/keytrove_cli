const express=require('express')
const Image = require('../models/Image');
const router = express.Router();
const authFunction = require('../auth')                           
const cloudinary=require('cloudinary').v2
require('dotenv').config()

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

router.post('/',async (req,res)=>{
    try
    {
        const {img_name,img_path,authtoken}=req.body;
        const email=await authFunction(authtoken)
        if(!email){
            console.info('SignIn to Set Image');
        res.status(400).json({ msg: 'SignIn to Set Image' })
        return;
        }
    // const filePath='C:/Users/abhin/Desktop/123.png'
  cloudinary.uploader.upload(img_path,resource_type=>raw,async (err,result)=>{
    if(err){
        console.info(err);
        res.status(400).json({ msg: 'An error occured while uploading file' })
        return;
    }
    const imageData={
        email:email,
        img_name:img_name,
        img_path:result.url
    }
    const imgdata = await Image.create(imageData);
    if(imgdata)
    {
        console.log('Image added')
        res.status(200).json({msg:"Image added"});
        return;
    }
  },)
    }
catch(error)
{
    console.log(error);
    process.exit(0);
}
})
module.exports=router