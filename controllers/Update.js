Key = require('../models/Features')
const authFunction = require('../auth')

const UpDate=async(value,data)=>{
    
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
     await Key.updateOne({value:value},{$set:{key:data.key,value:data.value}})
     .then(data=>{
        console.info('Key value updated')
     });

    } catch (error) {
        console.log(error);
    }

}

module.exports=UpDate