const removepath = 'http://localhost:5055/imageDelete'
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const Delete = async (qkey) => {
    const filePath = path.join(__dirname + '/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        console.log('SignIn to Remove Data')
        return
    }
    try {
        await axios.delete(removepath,{
            data:{"authtoken":authtoken,"qkey": qkey}
        }).
            then((res) => {
                console.log("Image Deleted");
                const fun = () => {
                    process.exit(0);
                }
                setTimeout(fun, 1000);
            })
    } catch (error) {
        console.log(error.response.data.msg);
        const fun = () => {
            process.exit(0);
        }
        setTimeout(fun, 1000);
    }
}

module.exports = Delete