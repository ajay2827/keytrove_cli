#!/usr/bin/env node
const { program } = require('commander');
const { prompt } = require('inquirer') ;
const SignUp=require('./controllers/SignUp')
const SignIn=require('./controllers/SignIn')
const SignOut=require('./controllers/SignOut')
// const Set=require('./controllers/Set')
// const Get=require('./controllers/Get')
// const GetAll=require('./controllers/GetAll')
// const UpDate=require('./controllers/Update')
// const Delete=require('./controllers/Delete')
// const UpdateList=require('./controllers/Updatelist')
// const {connectDB}=require('./db/connect')
const { question_signin , question_signup , question_keyvalue} = require('./question')

//  connectDB()


program
.version('1.0.0')
.description('Key Value Store Npm ')

program
.command('signup')
.alias('a')
.description('Add a user')
.action(()=>{
  prompt(question_signup).then(ans=> SignUp(ans)) ;
}) ;

program
.command('signin')
.alias('a')
.description('Signining user')
.action(()=>{
  prompt(question_signin).then(ans=> SignIn(ans)) ;
}) ;

program
.command('signout')
.alias('a')
.description('SignOut User')
.action(()=>SignOut()) ;

// program
// .command('set')
// .alias('s')
// .description('setting key value data')
// .action(()=>{
//   prompt(question_keyvalue).then(ans=>Set(ans))
// })

// program
// .command('get <key>')
// .alias('g')
// .description('getting key value data')
// .action(key=>Get(key))

// program
// .command('list')
// .alias('l')
// .description('getting all key-value of user')
// .action(()=>GetAll());

// program
// .command('updatelist')
// .alias('ul')
// .description('give list of updated key-value')
// .action(()=>UpdateList())

// program
// .command('update <id>')
// .alias('u')
// .description('update a key-value of user')
// .action(id=>{
//   prompt(question_keyvalue).then(ans=>UpDate(id,ans))
// })

// program
// .command('removelist')
// .alias('rl')
// .description('give list of key-value want to remove')
// .action(()=>UpdateList())

// program
// .command('remove <id>')
// .alias('r')
// .description('remove key-value of user')
// .action(id=>Delete(id))

program.parse(process.argv) ;



