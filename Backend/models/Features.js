const mongoose=require('mongoose'); 

const KeysSchema= new mongoose.Schema( 
    {
        key:
        {
            type:String,
            require:true
        },
        value:
        {
            type:String,
            require:true
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