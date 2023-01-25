Key = require('../models/Features')
const authFunction = require('../auth')
const {client} = require('../db/Redis');
const UpDate=async(value,data)=>{
    
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
    
    const features = await Key.find({ email:email , value:value}) ;
    features.map(async(feature) =>{
        if ( data.Expiration_Time == -1 ) {
            await client.set(`${feature._id}` , `1`) ;
        }else {
            await client.setex(`${feature._id}` , data.Expiration_Time , '1' ) ;
        }
        await Key.updateOne({_id:feature._id},{$set:{key:data.key,value:data.value}})
        console.log("key Updated")
        return ;
    })
   


    } catch (error) {
        console.log(error);
    }

}

module.exports=UpDate