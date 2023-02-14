const getpath='http://localhost:5055/getkey'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')
const chalk = require('chalk') ;
const log = console.log ;
const Get = async (key) => {

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
              log(chalk.green.bold(res.data.key) + ' --> ' + chalk.yellow(res.data.value) + `    id : ${res.data._id}`);
             
             process.exit(0);
          })
    } catch (error) {
        // log(error.response)
        log(chalk.yellow(error.response.data.msg));
    }
}

module.exports = Get