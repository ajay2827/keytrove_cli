const removepath = 'http://localhost:5055/imageDelete'
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const chalk = require('chalk') ;
const log = console.log ;

const Delete = async (qkey) => {
    const filePath = path.join(__dirname + '/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        log(chalk.red.bold('First SignIn  !! '))
        return
    }
    try {
        await axios.delete(removepath,{
            data:{"authtoken":authtoken,"qkey": qkey}
        }).
            then((res) => {
                log(chalk.green("Image Deleted ")) ;
                const fun = () => {
                    process.exit(0);
                }
                setTimeout(fun, 1000);
            })
    } catch (error) {
        log(chalk.yellow(error.response.data.msg));
        const fun = () => {
            process.exit(0);
        }
        setTimeout(fun, 1000);
    }
}

module.exports = Delete