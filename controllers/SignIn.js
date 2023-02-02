const signinurl = 'http://localhost:5055/signin/signin'
const fs = require('fs');
const axios = require( 'axios' );


const SignIn = async (user) =>{
  try {
    await axios.post(signinurl , user).
    then(async (res)=>{
      const data =   res ;
      const token = data.data.authtoken
      // console.log(token) ;
      fs.writeFile("authToken.txt", token, (err) => {
        if (err)
          console.log('SignIn Again');
          return;
      });
    })
    console.log("signined success") ;
  }
  catch (error) {
    console.log(error);
  }
}

module.exports=SignIn