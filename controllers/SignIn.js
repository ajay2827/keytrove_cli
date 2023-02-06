const signinurl = 'http://localhost:5055/signin'
const fs = require('fs');
const axios = require( 'axios' );
const path=require('path')

const SignIn = async (user) =>{
  try {
    await axios.post(signinurl , user).
    then(async (res)=>{
      const token = res.data.authtoken
      const filePath=path.join(__dirname+'/authStorage/authToken.txt')
      fs.writeFile(filePath, token, (err) => {
        if (err)
          console.log('SignIn Again');
          return;
      });
    })
    console.log("Successfully SignIn") ;
  }
  catch (error) {
    console.log(error.response.data.msg);
  }
}

module.exports=SignIn