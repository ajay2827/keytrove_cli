const imgPath='http://localhost:5055/imgUpload'
const axios = require( 'axios' );
// const { log } = require('console');
const path=require('path')
const fs=require('fs')
const chalk = require('chalk') ;
const log = console.log ;
// const imageToBase64 = require('image-to-base64')
 
const ImageUpload = async (data) => {
    const filePath=path.join(__dirname+'/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        log(chalk.red.bold('First SignIn  !! '))
        return
    }
    // const image = await imageToBase64(data.path);
    // const ImagePath=path.join(__dirname+'/encryptedImage/EncryptImage.txt')
    //   fs.writeFile(ImagePath,image, (err) => {
        // if (err)
        //   console.log('Error while encryptiing Image');
    //       return;
    //   });
    const data1 = {
        "img_name":data.name,
        "img_path":data.path,
        "authtoken":authtoken
    }
    console.log(data1)
    try {
       await axios.post(imgPath,data1).
       then((res)=>{
        log(chalk.green("Image Added ")) ;
        process.exit(0);
       })
    
    }
    catch (error) {
        log(chalk.yellow(error.response.data.msg));
        process.exit(0);
    }

}

module.exports = ImageUpload