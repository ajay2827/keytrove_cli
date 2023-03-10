const axios = require( 'axios' );
const signupurl = 'http://localhost:5055/signup'
const fs = require('fs');
const path=require('path')
const chalk = require('chalk') ;
const log = console.log ;

const SignUp = async (user) => {

  try {
    await axios.post(signupurl , user).
    then(async (res)=>{
      const token = res.data.authtoken
      const filePath=path.join(__dirname+'/authStorage/authToken.txt')
      fs.writeFileSync(filePath, token, (err) => {
        if (err)
        log(chalk.red.bold('SignUp Again'))
          return;
      });
    })
    log(chalk.bgGreen.bold("Successfully Signup"));
    process.exit(0);

  }
  catch (error) {
    log(chalk.red.bold(error.response.data.msg));
    process.exit(1);
  }
}

module.exports = SignUp