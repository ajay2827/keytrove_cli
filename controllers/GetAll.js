const listpath='http://localhost:5055/list'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')

const GetAll=async()=>{
    const filePath=path.join(__dirname+'/authStorage/authToken.txt');
    const authtoken = fs.readFileSync(filePath, 'utf8');
    if(!authtoken){
      console.log('SignIn to Get Data')
      return
  }
    const data={
        "authtoken":authtoken
    }
    try {
      await axios.post(listpath,data).
      then((res)=>{
        const features=res.data;
        features.map((fea)=>{
            console.log(`${fea.key} -> ${fea.value}  _id: ${fea._id}`);
        })
      })
    process.exit(0);
    } catch (error) {
        console.log(error.response.data.msg);
    }

}
module.exports=GetAll