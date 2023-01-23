const express = require('express') ;
const app = express() ;
require('dotenv').config()
const mongoose = require('mongoose');
const connectDB=require('./db/connect')


// Set the strictQuery option to false
mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

const db =connectDB(process.env.MONGO_URL).then(()=>console.log("Connected"))
.catch((err)=>
    console.log(err)
);

const port = 5555 ;

app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

