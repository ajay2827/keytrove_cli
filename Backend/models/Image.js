const mongoose=require('mongoose')

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
        }
}
)

module.exports=mongoose.model("Image",ImageSchema)