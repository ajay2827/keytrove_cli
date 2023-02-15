const getpath='http://localhost:5055/imageGet'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')
const chalk = require('chalk') ;
const { response } = require('express');
const log = console.log ;
const Downloader = require("nodejs-file-downloader");
const homeDir = require('os').homedir();

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
              console.log(homeDir)
                const DirPath=`${homeDir}/onedrive/Desktop/KeyStoreImages`;
                console.log(DirPath);
                const downloader = new Downloader({
                  url: res.data.URL, 
                  directory: DirPath,
                  filename:`${res.data.key}.png`
                });
                try {
                   await downloader.download(); 
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