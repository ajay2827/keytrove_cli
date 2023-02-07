const imgPath='http://localhost:5055/imgUpload'
const axios = require( 'axios' );
const { log } = require('console');
const path=require('path')
const fs=require('fs')
const ImageUpload = async (data) => {
    const filePath=path.join(__dirname+'/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        console.log('SignIn to Set Data')
        return
    }
    const data1 = {
        "img_name":data.name,
        "img_path":data.path,
        "authtoken":authtoken
    }
    try {
       await axios.post(imgPath,data1).
       then((res)=>{
        console.log("Image Added");
        process.exit(0);
       })
    
    }
    catch (error) {
        console.log(error);
        process.exit(0);
    }

}

module.exports = ImageUpload