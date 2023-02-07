const listpath='http://localhost:5055/imageGetAll'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')

const ImageGetAll=async()=>{
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
        const images=res.data;
        images.map((img)=>{
            console.log(`${img.img_name}`);
        })
      })
    process.exit(0);
    } catch (error) {
        console.log(error.response.data.msg);
    }

}
module.exports=ImageGetAll