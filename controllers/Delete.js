const Key = require('../models/Features')
const authFunction = require('../auth');


const Delete=async(value)=>{
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        const keyvalue=await Key.deleteOne({value:value})
        .then(key=>{
            console.info('key-value is remove');
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports=Delete