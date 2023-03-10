const mongoose=require('mongoose'); 

const KeysSchema= new mongoose.Schema( 
    {
        key:
        {
            type:String,
            required:[true,'Key is required'],
        },
        value:
        {
            type:String,
            required:[true,'Value is required'],
        },
        email:{
            type:String,
            require:true
        }
    }
    ,{
        timestamps:true
    }
)

module.exports=mongoose.model("Key",KeysSchema);