const getpath='http://localhost:5055/imageGet'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')
const chalk = require('chalk') ;
const { response } = require('express');
const log = console.log ;
const Downloader = require("nodejs-file-downloader");
const homeDir = require('os').homedir();
let temp=false
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
            (async () => {
                const DirPath1=`${homeDir}/Desktop/KeyStoreImages`;
                const DirPath2=`${homeDir}/OneDrive/Desktop/KeyStoreImages`;
                const downloader1 = new Downloader({
                  url: res.data.URL, 
                  directory: DirPath1,
                  filename:`${res.data.key}.png`
                });
                const downloader2 = new Downloader({
                  url: res.data.URL, 
                  directory: DirPath2,
                  filename:`${res.data.key}.png`
                });
                try { 
                   try {
                    await downloader1.download(); 
                   } catch (error) {
                    temp=true
                   }
                   if(temp===true){
                    try {
                      await downloader2.download(); 
                    } catch (error) {
                      console.log("Download failed", error);
                    }
                   }
                } catch (error) {
                  console.log("Download failed", error);
                }
              })();
              log(chalk.hex('#FF69B4')('Image ')+chalk.hex('#f2ba49')(res.data.key) + chalk.hex('#FF69B4')(" Downloaded "));
            //  log(res)
          })
    } catch (error) {
        console.log(error)
        // log(chalk.yellow(error.response.data.msg));

    }
}

module.exports = ImageGet