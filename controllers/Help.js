const chalk = require('chalk') ;
const log = console.log ;

const Helpcommand = () =>{
    log(chalk.bgRed.bold("Options : ")) ;
    // console.log("  1. -v , --version    Display Current Version ") ;
    log(chalk.hex('#f2ba49').bold("   1. ") + chalk.green("-v , --version   ")+ chalk.hex('#FF69B4')("Display Current version ")) ;
    
    log(chalk.hex('#f2ba49').bold("   2. ") + chalk.green("h , help   ")+ chalk.hex('#FF69B4')("For help")) ;
    log(chalk.hex('#f2ba49').bold("   3. ") + chalk.green("signup   ")+ chalk.hex('#FF69B4')("For Signup")) ;
    log(chalk.hex('#f2ba49').bold("   4. ") + chalk.green("signin   ")+ chalk.hex('#FF69B4')("For SignIn")) ;
    log(chalk.hex('#f2ba49').bold("   5. ") + chalk.green("signout   ")+ chalk.hex('#FF69B4')("For Signing Out")) ;
    
    console.log(" ") ;
    log(chalk.bgRed.bold("Commands : ")) ;
    log(chalk.hex('#f2ba49').bold("   1. ") + chalk.green("keystore set , keystore s  ")+ chalk.hex('#FF69B4')("For Setting any Key")) ;
    log(chalk.hex('#f2ba49').bold("   2. ") + chalk.green("keystore get <key_Name>, keystore g <key_name>  ")+ chalk.hex('#FF69B4')("For Getting any Specific key")) ;
    log(chalk.hex('#f2ba49').bold("   3. ") + chalk.green("keystore l ,keystore list  ")+ chalk.hex('#FF69B4')("For Getting All Key Value Pairs With Their Id")) ;
    log(chalk.hex('#f2ba49').bold("   4. ") + chalk.green("keystore update <id> , keystore u <id>  ")+ chalk.hex('#FF69B4')("For Updating Any Key")) ;
    log(chalk.hex('#f2ba49').bold("   5. ") + chalk.green("keystore remove <id> , keystore r <id>  ")+ chalk.hex('#FF69B4')("For Removing Any Key")) ;
    log(chalk.hex('#f2ba49').bold("   6. ") + chalk.green("keystore imgUpload , keystore k ")+ chalk.hex('#FF69B4')("For Uploading Any Image")) ;
    log(chalk.hex('#f2ba49').bold("   7. ") + chalk.green("keystore imageGet <key> , keystore g <key> ")+ chalk.hex('#FF69B4')("For Getting Any Image correspondence Name")) ;
    log(chalk.hex('#f2ba49').bold("   8. ") + chalk.green("keystore listimagename , keystore l  ")+ chalk.hex('#FF69B4')("For Getting All Uploaded Images")) ;
    log(chalk.hex('#f2ba49').bold("   9. ") + chalk.green("keystore imageDelete <image_key> , keystore l <image_key> ")+ chalk.hex('#FF69B4')("For deleting any Image Correspondence  Image name")) ;
   log(" ") ;

    log(chalk.bgRed.bold("Password Requirements : ")) ;

    log(chalk.hex('#f2ba49').bold("    Password Must Has  Atleast 6 Character")) ;
}
module.exports=Helpcommand;