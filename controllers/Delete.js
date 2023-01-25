const Key = require('../models/Features')
const authFunction = require('../auth');
const {client} = require('../db/Redis')

const Delete=async(key)=>{
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        const features=await Key.find({email:email , key:key})
        features.map(async(feature)=>{
            const val = await client.get(`${feature._id}`) ;
            if ( val == 1 ) {
                await client.del(`${feature._id}`) ;
            }
            Key.deleteOne({_id:feature._id}) ;
        })
        console.log(`Key ${key} deleted`) ;
    } catch (error) {
        console.log(error);
    }
}

module.exports=Delete