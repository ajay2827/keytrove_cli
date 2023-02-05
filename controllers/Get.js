const getpath='http://localhost:5055/getkey'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')

const Get = async (key) => {

    const filePath=path.join(__dirname+'/authStorage/authToken.txt');
    const authtoken = fs.readFileSync(filePath, 'utf8');
    if(!authtoken){
        console.log('SignIn to Get Data')
        return
    }
    const data={
        "key":key,
        "authtoken":authtoken
    }    
    try {
         await axios.post(getpath,data).
          then((res)=>{
              console.log(`${res.data.key} --> ${res.data.value}`);
             
             process.exit(0);
          })
    } catch (error) {
        console.log(error.response.data.msg);
    }
}

module.exports = Get