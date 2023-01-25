const Key = require('../models/Features')
const authFunction = require('../auth')

const GetAll=async()=>{
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        const features = await Key.find({ email:email });
        features.map((feature) => {
            console.log(`${feature.key} -> ${feature.value}`);
        })   
    } catch (error) {
        console.log(error);
    }
}

module.exports=GetAll