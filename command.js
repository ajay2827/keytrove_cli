const { program } = require('commander');
const { prompt } = require('inquirer') ;
const {addUser , signIn} = require('./index');
const { question_signin , question_signup , question_keyvalue} = require('./question')


program
.version('1.1.1')
.description('Key Value Store Npm ')

program
.command('Signup')
.alias('a')
.description('Add a user')
.action(()=>{
  prompt(question_signup).then(ans=> addUser(ans)) ;
}) ;

program
.command('SignIn')
.alias('a')
.description('Signining user')
.action(()=>{
  prompt(question_signin).then(ans=> signIn(ans)) ;
}) ;

// program
// .command('addKey')
// .alias('a')
// .description('adding Key ')
// .action(()=>{
//   prompt(question_keyvalue).then(ans=> signIn(ans)) ;
// }) ;

program.parse(process.argv) ;