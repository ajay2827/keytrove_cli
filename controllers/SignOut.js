const fs = require('fs');
const path=require('path')

const SignOut=async ()=>{
    try {
        const filePath=path.join(__dirname+'/authStorage/authToken.txt')
        await fs.unlink(filePath, function (err) {
            if (err) 
            console.log(err);
        
            console.log('Successfully SignOut!!');
            const fun = () =>{
                process.exit(0) ;
            }
            setTimeout(fun, 1000);
        });
    } catch (error) {
        console.log(error);
        const fun = () =>{
            process.exit(0) ;
        }
        setTimeout(fun, 1000);
    }
}

module.exports=SignOut