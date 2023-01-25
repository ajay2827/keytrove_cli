const Key = require('../models/Features')
const authFunction = require('../auth')
const {client , Redis} = require('../db/Redis') ;

const Set = async (data) => {
    try {
        const email = await authFunction()
        if (!email) {
            console.log('SignIn to use this functionality');
            return
        }
        const NewData={
            key:data.key,
            value:data.value,
            email:email
        }
        const keydata = await Key.create(NewData)
       
        if ( data.Expiration_Time == -1 ) {
            client.set(`${keydata._id}` , `1`) ;
        }else {
            client.setex(`${keydata._id}` , data.Expiration_Time , '1' ) ;
        }
       console.log("Key Added") ;
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = Set