const axios = require( 'axios' );
const signupurl = 'http://localhost:5055/signup/signup'
const fs = require('fs');

const SignUp = async (user) => {

  try {
    await axios.post(signupurl , user).
    then(async (res)=>{
      const data =   res ;
      const token = data.data.authtoken
      // console.log(token) ;
      fs.writeFile("authToken.txt", token, (err) => {
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