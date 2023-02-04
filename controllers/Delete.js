const removepath = 'http://localhost:5055/removekey'
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const Delete = async (id) => {
    const filePath = path.join(__dirname + '/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        console.log('SignIn to Remove Data')
        return
    }
    try {
        await axios.delete(removepath,{
            data:{"authtoken":authtoken,"id": id}
        }).
            then((res) => {
                console.log("key delete");
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