const fs = require('fs');

const SignOut=async ()=>{
    try {
        await fs.unlink('authToken.txt', function (err) {
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