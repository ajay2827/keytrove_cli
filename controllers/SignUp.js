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
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = SignUp