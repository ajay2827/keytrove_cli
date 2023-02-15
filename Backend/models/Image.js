const mongoose=require('mongoose')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const ImageSchema=new mongoose.Schema(
    {
        img_name:{
            type:String,
            required:[true,'Image name is required'],
            unique:[true,'Image name should be unique']
        },
        img_path:{
            type:String,
            required:[true,'Image path is required']
        },
        email:{
            type:String,
            required:[true,'Email is required'],
            minlength:3,
            maxlength:50,
            match:[
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email'
            ],
          }
}
)

// ImageSchema.pre('save',()=>{
//     this.img_path=cryptr.encrypt(this.img_path)
// })

module.exports=mongoose.model("Image",ImageSchema)