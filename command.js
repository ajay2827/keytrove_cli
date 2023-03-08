#!/usr/bin/env node
const { program } = require('commander');
const { prompt } = require('inquirer') ;
const SignUp=require('./controllers/SignUp')
const SignIn=require('./controllers/SignIn')
const SignOut=require('./controllers/SignOut')
const Set=require('./controllers/Set')
const Get=require('./controllers/Get')
const GetAll=require('./controllers/GetAll')
const UpDate=require('./controllers/Update')
const Delete=require('./controllers/Delete')
const Help=require('./controllers/Help')
const DeleteAll=require('./controllers/DeleteAll')
const ImageUpload=require('./controllers/ImageUpload')
const ImageGet=require('./controllers/ImageGet')
const ImageGetAll=require('./controllers/ImageGetAll')
const ImageDelete=require('./controllers/ImageDelete')
const { question_signin , question_signup , question_keyvalue,question_image} = require('./question')


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
.command('update <id>')
.alias('u')
.description('update a key-value of user')
.action(id=>{
  prompt(question_keyvalue).then(ans=>UpDate(id,ans))
})


program
.command('remove <id>')
.alias('r')
.description('remove key-value of user')
.action(id=>Delete(id))

program
.command('remove-All')
.alias('rl')
.description('remove all key-value of user')
.action(()=>DeleteAll())

program
.command('help')
.alias('h')
.description('Help Command')
.action(()=>Help());

program
.command('img-Upload')
.alias('k')
.description('Img Uploading')
.action(()=>{
  prompt(question_image).then(ans=> ImageUpload(ans)) ;
}) ;

program
.command('img-Get <key>')
.alias('g')
.description('getting Image URL')
.action(key=>ImageGet(key))

program
.command('img-GetAll')
.alias('l')
.description('Getting all Image keys')
.action(()=>ImageGetAll());

program
.command('img-Delete <qkey>')
.alias('r')
.description('Image Delete')
.action(qkey=>ImageDelete(qkey))

program.parse(process.argv) ;



