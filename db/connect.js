const mongoose=require('mongoose')
// mongoose.Promise = global.Promise;

const connectDB = (url)=>{
return mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useMongoClient: true
})
}
module.exports=connectDB