const removepath = 'http://localhost:5055/removekey'
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const chalk = require('chalk') ;
const log = console.log ;

const Delete = async (id) => {
    const filePath = path.join(__dirname + '/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        log(chalk.red.bold('First SignIn'))
        return
    }
    try {
        await axios.delete(removepath,{
            data:{"authtoken":authtoken,"id": id}
        }).
            then((res) => {
                log(chalk.blue("key deleted"));
                const fun = () => {
                    process.exit(0);
                }
                setTimeout(fun, 1000);
            })
    } catch (error) {
        log(chalk.red.bold(error.response.data.msg));
            process.exit(1);
        
    }
}

module.exports = Delete