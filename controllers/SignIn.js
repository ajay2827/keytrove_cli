const signinurl = 'http://localhost:5055/signin'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')
const chalk = require('chalk') ;
const log = console.log ;

const SignIn = async (user) =>{
  try {
    await axios.post(signinurl , user).
    then(async (res)=>{
      const token = res.data.authtoken
      const filePath=path.join(__dirname+'/authStorage/authToken.txt')
      fs.writeFileSync(filePath, token, (err) => {
        if (err)
        log(chalk.red.bold('SignIn Again '))
          return;
      });
    })
    log(chalk.green.bold("Successfully SignIn"));
    process.exit(0);

  }
  catch (error) {
    log(chalk.red.bold(error.response.data.msg));
    process.exit(1);
  }
}

module.exports=SignIn