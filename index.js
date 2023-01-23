const express = require('express') ;
const app = express() ;
require('dotenv').config()
const mongoose = require('mongoose');

// Set the strictQuery option to false
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connected"))
.catch((err)=>
    console.log(err)
);

const port = 5555 ;

app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

