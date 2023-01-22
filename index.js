const express = require('express') ;
// const { argv } = require('process');
const app = express() ;
const arguments = process.argv ;

const signup = require('./Routes/signup')
const signin = require('./Routes/signin')
const getAllValue = require('./Routes/getAllKeyValue')
const getValue = require('./Routes/getValue')
const updateValue = require('./Routes/updateValue')
const deleteValue = require('./Routes/deleteValue')

const port = 5555 ;

app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

app.use('/api/auth/signup' , signup);
app.use('/api/auth/signin' , signin);
app.use('/api/getAllvalue' , getAllValue);
app.use('/api/getValue' , getValue);
app.use('/api/updateValue' , updateValue);
app.use('/api/deleteValue' , deleteValue);

// console.log(arguments) ;
// console.log(arguments[2]) ;
// console.log(arguments[3]) ;