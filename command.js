#!/usr/bin/env node
const { program } = require('commander');
const { prompt } = require('inquirer') ;
const SignUp=require('./controllers/SignUp')
const SignIn=require('./controllers/SignIn')
const Set=require('./controllers/Set')
const Get=require('./controllers/Get')
const GetAll=require('./controllers/GetAll')
const UpDate=require('./controllers/Update')
const Delete=require('./controllers/Delete')
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

program
.command('set')
.alias('s')
.description('setting key value data')
.action(()=>{
  prompt(question_keyvalue).then(ans=>Set(ans))
})

program
.command('get <key>')
.alias('g')
.description('getting key value data')
.action(key=>Get(key))

program
.command('list')
.alias('l')
.description('getting all key-value of user')
.action(()=>GetAll());

program
.command('updatelist')
.alias('ul')
.description('give list of updated key-value')
.action(()=>GetAll())

program
.command('update <value>')
.alias('u')
.description('update a key-value of user')
.action(value=>{
  prompt(question_keyvalue).then(ans=>UpDate(value,ans))
})

program
.command('removelist')
.alias('rl')
.description('give list of key-value want to remove')
.action(()=>GetAll())

program
.command('remove <key>')
.alias('r')
.description('remove key-value of user')
.action(key=>Delete(key))

program.parse(process.argv) ;