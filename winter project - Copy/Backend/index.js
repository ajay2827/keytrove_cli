var bodyParser = require('body-parser')
const express = require('express') ;
const app = express() ;
const Signup = require('./Routes/Signup')
const Signin = require('./Routes/Signin')
const Set=require('./Routes/Set')
const Get=require('./Routes/Get')
const GetAll=require('./Routes/GetAll')
const Update=require('./Routes/Update')
const Remove=require('./Routes/Remove')
const Removeall=require('./Routes/Removeall')
const ImageUpload=require('./Routes/ImageUpload')
const ImageGet=require('./Routes/ImageGet')
const ImageGetAll=require('./Routes/ImageGetAll')
const ImageDelete=require('./Routes/ImageDelete')
require('dotenv').config() ;

const port = 5055 ;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose') ;
mongoose.Promise = global.Promise ;
mongoose.set('strictQuery', false);

const fileUpload=require('express-fileupload')
// const db = mongoose.createConnection()
const connectDB =  async () =>{
  await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(port , ()=>{
        console.log(`App is listning on port ${port}`) ;
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
app.use('/setkey',Set)
app.use('/getkey',Get)
app.use('/list',GetAll)
app.use('/updatekey',Update)
app.use('/removekey', Remove)
app.use('/removeall',Removeall)
app.use('/removekey', Remove)
app.use('/imgUpload', ImageUpload)
app.use('/imageGet', ImageGet)
app.use('/imageGetAll', ImageGetAll)
app.use('/imageDelete', ImageDelete)
app.use(fileUpload({
    useTempFiles:true
}))