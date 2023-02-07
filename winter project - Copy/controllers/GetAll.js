const listpath='http://localhost:5055/list'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')
const chalk = require('chalk') ;
const log = console.log ;

const GetAll=async()=>{
    const filePath=path.join(__dirname+'/authStorage/authToken.txt');
    const authtoken = fs.readFileSync(filePath, 'utf8');
    if(!authtoken){
      log(chalk.bgYellowBright.bold('First SignIn  !!'))
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
          log(chalk.green.bold(fea.key) + ' --> ' + chalk.yellow(fea.value));
        })
      })
    process.exit(0);
    } catch (error) {
      log(chalk.cyan.bold(error.response.data.msg));
    }

}
module.exports=GetAll