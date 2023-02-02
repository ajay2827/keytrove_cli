const axios = require( 'axios' );
const signupurl = 'http://localhost:5055/signup/signup'
const fs = require('fs');
const path=require('path')

const SignUp = async (user) => {

  try {
    await axios.post(signupurl , user).
    then(async (res)=>{
      const data =   res ;
      const token = data.data.authtoken
      console.log(token) ;
      const filePath=path.join(__dirname+'/authStorage/authToken.txt')
      fs.writeFile(filePath, token, (err) => {
        if (err)
          console.log(err);
          return;
      });
      console.log('123');
    })
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = SignUp