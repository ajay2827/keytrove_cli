const removeallpath='http://localhost:5055/removeall'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')

const DeleteAll=async()=>{
    const filePath=path.join(__dirname+'/authStorage/authToken.txt');
    const authtoken = fs.readFileSync(filePath, 'utf8');
    if(!authtoken){
        console.log('SignIn to Get Data')
        return
    }
    const data={
        "authtoken":authtoken
    }
    try
    {
       await axios.delete(removeallpath,{
        data:{"authtoken":authtoken}
       }).then((res)=>{
        console.log('all key deleted')
        process.exit(0);
       })
    }catch(error){
        console.log(error.response.data.msg)
        process.exit(0);
    }
}

module.exports=DeleteAll;