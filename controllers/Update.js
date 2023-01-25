Key = require('../models/Features')
const authFunction = require('../auth')
const {client} = require('../db/Redis');
const UpDate=async(id,data)=>{
    
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
    
     
    if ( data.Expiration_Time == -1 ) {
                await client.set(`${id}` , `1`) ;
            }else {
                await client.setex(`${id}` , data.Expiration_Time , '1' ) ;
            }
            await Key.updateOne({_id:id},{$set:{key:data.key,value:data.value}})
            console.log("key Updated")
   
            const fun = () =>{
                process.exit(0) ;
            }
            setTimeout(fun, 1000);

    } catch (error) {
        console.log(error);
    }

}

module.exports=UpDate