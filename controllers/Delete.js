const Key = require('../models/Features')
const authFunction = require('../auth');
const {client} = require('../db/Redis')

const Delete=async(id)=>{
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        const feature=await Key.find({email:email, _id:id})
            const val = await client.get(`${feature._id}`) ;
            if ( val == 1 ) {
                await client.del(`${feature._id}`) ;
            }
            await Key.deleteOne({email:email ,_id:id}) ;
        
        console.log(`Key ${feature[0].key} deleted`) ;
        const fun = () =>{
            process.exit(0) ;
        }
        setTimeout(fun, 1000);
    } catch (error) {
        console.log(error);
        const fun = () =>{
            process.exit(0) ;
        }
        setTimeout(fun, 1000);
    }
}

module.exports=Delete