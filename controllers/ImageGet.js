const getpath='http://localhost:5055/imageGet'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')
const chalk = require('chalk') ;
const { response } = require('express');
const log = console.log ;

const ImageGet = async (key) => {
    const filePath=path.join(__dirname+'/authStorage/authToken.txt');
    const authtoken = fs.readFileSync(filePath, 'utf8');
    if(!authtoken){
        log(chalk.red.bold('First SignIn  !! '))
        return
    }
    const data={
        "key":key,
        "authtoken":authtoken
    }    
    try {
         await axios.post(getpath,data).
          then((res)=>{
              log( chalk.hex('#f2ba49')(res.data.key) + chalk.hex('#FF69B4')("  URL --> ")+ `${res.data.URL}`);
            //  log(res)
             process.exit(0);
          })
    } catch (error) {
        console.log(error)
        // log(chalk.yellow(error.response.data.msg));

    }
}

module.exports = ImageGet