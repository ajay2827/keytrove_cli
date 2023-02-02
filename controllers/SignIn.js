const signinurl = 'http://localhost:5055/signin/signin'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')

const SignIn = async (user) =>{
  try {
    await axios.post(signinurl , user).
    then(async (res)=>{
      const token = res.data.authtoken
      // console.log(token) ;
      const filePath=path.join(__dirname+'/authStorage/authToken.txt')
      fs.writeFile(filePath, token, (err) => {
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