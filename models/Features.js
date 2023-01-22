const mongoose=require('mongoose'); 

const KeysSchema= new mongoose.Schema( 

    {
        user_id:
        {
            type:string,
            require:true,
            unique:true
        },
        key:
        {
            type:Mixed,
            value:String,
            unique:true,
            require:true
        },
        value:
        {
            type:Mixed,
            value:String,
            unique:true,
            require:true
        },
        key_id:
        {
            type:String,
            unique:true,
            require:true
        },
    }
    ,{
        timestamps:true
    }
)

module.exports=mongoose.model("Keys",KeysSchema);

// 47mspnZswrIYfyv1