const Helpcommand = () =>{
    console.log("Options : ") ;
    console.log("   1. -v , --version    Display Current Version ") ;
    console.log("   2. l , list          For Getting All Key Value Pairs With Their Id"  ) ;
    console.log("   3. h , help          For help"  ) ;
    console.log("   4. signup            For Signup  "  ) ;
    console.log("   5. signin            For SignIn  "  ) ;
    console.log("   6. signout           For Signing Out  "  ) ;
    
    console.log(" ") ;
    // console.log(" ") ;
    // console.log(" ") ;
    console.log("Commands : ") ;
    console.log("   1. keystore set           , keystore s                 For Setting any Key Value") ;
    console.log("   2. keystore get <key_Name>, keystore g <key_name>      For Getting any Specific key  "  ) ;
    console.log("   3. keystore update <id>   , keystore u <id>            For Updating Any Key  "  ) ;
    console.log("   4. keystore remove <id>   , keystore r <id>            For Removing Any Key  "  ) ;

    console.log("Password Requirements : ") ;
    console.log("   1. Password Must Has  Atleast 6 Character")
}
module.exports=Helpcommand;