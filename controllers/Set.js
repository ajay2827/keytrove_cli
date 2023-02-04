const setpath='http://localhost:5055/setkey'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path');
const { log } = require('console');

const Set = async (data) => {
    const filePath=path.join(__dirname+'/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        console.log('SignIn to Set Data')
        return
    }
    const data1 = {
        "key":data.key,
        "value":data.value,
        'ttl':data.ttl,
        "authtoken":authtoken
    }
    try {
       await axios.post(setpath,data1).
       then((res)=>{
        console.log("key added");
        process.exit(0);
       })
    
    }
    catch (error) {
        console.log(error.response.data.msg);
        process.exit(0);
    }

}

module.exports = Set