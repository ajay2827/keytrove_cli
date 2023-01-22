const express = require('express') ;
const app = express() ;
const dotenv=require('dotenv');
const mongoose = require('mongoose');


const signup = require('./Routes/signup')
const signin = require('./Routes/signin')
const getAllValue = require('./Routes/getAllKeyValue')
const getValue = require('./Routes/getValue')
const updateValue = require('./Routes/updateValue')
const deleteValue = require('./Routes/deleteValue')

// middleware
app.use(express.json());
dotenv.config();



// routes 
app.use('/api/auth/signup' , signup);
app.use('/api/auth/signin' , signin);
app.use('/api/getAllvalue' , getAllValue);
app.use('/api/getValue' , getValue);
app.use('/api/updateValue' , updateValue);
app.use('/api/deleteValue' , deleteValue);

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

