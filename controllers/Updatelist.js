const Key = require('../models/Features')
const authFunction = require('../auth')
const {client , Redis} = require('../db/Redis') ;

const UpdateList=async()=>{
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
                console.log(`${feature.key} -> ${feature.value} id: ${feature._id}`);
            }
        })   
        const fun = () =>{
            process.exit(0) ;
        }
        setTimeout(fun, 1000);
    } catch (error) {
        console.log(error);
    }
    // disconnectDB() ;
    // process.exit(0);
}
module.exports=UpdateList