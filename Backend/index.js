var bodyParser = require('body-parser')
const express = require('express') ;
const app = express() ;
const Signup = require('./Routes/Signup')
const Signin = require('./Routes/Signin')
require('dotenv').config() ;

const port = 5055 ;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose') ;
mongoose.Promise = global.Promise ;
mongoose.set('strictQuery', false);

// const db = mongoose.createConnection()
const connectDB =  async () =>{
  await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(port , ()=>{
        console.log(`app is listning on port ${port}`) ;
    })
})
.catch((err)=>
    console.log(err)
);
}
connectDB()

app.get('/' , (req,res)=>{
    res.json("ok");
})
app.use('/signup' , Signup)
app.use('/signin' , Signin)
