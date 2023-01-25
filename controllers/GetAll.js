const Key = require('../models/Features')
const authFunction = require('../auth')
const {client , Redis} = require('../db/Redis') ;
const GetAll=async()=>{
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        const features = await Key.find({ email:email });
        features.map(async (feature) => {
            const val = await client.get(`${feature._id}`) ;
            if ( val == 1 ) {
                flag = true ;
                console.log(`${feature.key} -> ${feature.value}`);
            }
        })   

        
    } catch (error) {
        console.log(error);
    }
}

module.exports=GetAll