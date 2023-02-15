const fs = require('fs');
const path=require('path')
const chalk = require('chalk') ;
const log = console.log ;

const SignOut=async ()=>{
    try {
        const filePath=path.join(__dirname+'/authStorage/authToken.txt')
        fs.writeFile(filePath, '', (err) => {
            if (err){
              log(chalk.red.bold("First Signin To Signout"));
              return;
            }
              log(chalk.green.bold("Successfully SignOut!!"))
          });
          process.exit(0);
    } catch (error) {
        log(chalk.red.bold(error.response.data.msg));
           process.exit(1) 
        
    }
}

module.exports=SignOut