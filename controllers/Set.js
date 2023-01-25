const Key = require('../models/Features')
const authFunction = require('../auth')

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
        await Key.create(NewData).then(NewData => {
            console.info('key value data is added');
        })
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = Set