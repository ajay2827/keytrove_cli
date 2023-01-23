#!/usr/bin/env node
const program=require('commander')
const {prompt} = require('inquirer')
const addUser=require('../controllers/addUser')


// const User=require('./models/User')

program
.version('1.0.0')
.description('This is our KeyStore CLI Application')

const questions=[
    {
        type:"input",
        name:"name",
        message:"Customer First Name"
    },
    {
        type:"input",
       name:"email",
        message:"Customer Email"
    },
    {
        type:"input",
        name:"password",
        message:"Customer Password"
    }
]
program
.command('add')
.alias('a')
.description('Add a user')
.action(()=>{
    prompt(questions).then(answers=>{
        addUser(answers) ;
        console.log(answers) ;
        // addUser(answers)
    })
})

program.parse(process.argv)