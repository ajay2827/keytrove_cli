const removeallpath='http://localhost:5055/removeall'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')
const chalk = require('chalk') ;
const log = console.log ;

const DeleteAll=async()=>{
    const filePath=path.join(__dirname+'/authStorage/authToken.txt');
    const authtoken = fs.readFileSync(filePath, 'utf8');
    if(!authtoken){
        log(chalk.bgYellow.bold('First SignIn To Delete Data'))
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
        log(chalk.green("All Key Deleted"))
        process.exit(0);
       })
    }catch(error){
        log(chalk.bgRed.bold(error.response.data.msg));
        process.exit(0);
    }
}

module.exports=DeleteAll;