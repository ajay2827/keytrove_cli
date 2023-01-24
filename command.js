#!/usr/bin/env node
const { program } = require('commander');
const { prompt } = require('inquirer') ;
const SignUp=require('./controllers/SignUp')
const SignIn=require('./controllers/SignIn')
const connectDB=require('./db/connect')
const { question_signin , question_signup , question_keyvalue} = require('./question')

connectDB()

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

// program
// .command('addKey')
// .alias('a')
// .description('adding Key ')
// .action(()=>{
//   prompt(question_keyvalue).then(ans=> signIn(ans)) ;
// }) ;

program.parse(process.argv) ;