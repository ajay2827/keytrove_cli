const setpath = 'http://localhost:5055/updatekey'
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const UpDate = async (qkey, data) => {
    const filePath=path.join(__dirname+'/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        console.log('SignIn to Update Data')
        return
    }
    const data1={
        "key":data.key,
        "value":data.value,
        'ttl':data.ttl,
        "authtoken":authtoken,
        "qkey":qkey
    }
    try {
        
        await axios.put(setpath,data1).
        then((res)=>{
          console.log('Key Updated');
          process.exit(0);
        })

    } catch (error) {
        console.log(error.response.data.msg);
    }

}

module.exports = UpDate