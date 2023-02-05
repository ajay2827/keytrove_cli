const axios = require( 'axios' );
const signupurl = 'http://localhost:5055/signup'
const fs = require('fs');
const path=require('path')

const SignUp = async (user) => {

  try {
    await axios.post(signupurl , user).
    then(async (res)=>{
      const token = res.data.authtoken
      const filePath=path.join(__dirname+'/authStorage/authToken.txt')
      fs.writeFile(filePath, token, (err) => {
        if (err)
          console.log('SignUp Again');
          return;
      });
    })
    console.log("Successfully SignUp") ;
  }
  catch (error) {
    console.log(error.response.data.msg);
  }
}

module.exports = SignUp