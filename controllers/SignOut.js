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
    } catch (error) {
        log(chalk.red.bold(error.response.data.msg));

        const fun = () =>{
            process.exit(0) ;
        }
        setTimeout(fun, 1000);
    }
}

module.exports=SignOut