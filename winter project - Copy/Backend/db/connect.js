require('dotenv').config() ;
const mongoose = require('mongoose') ;
mongoose.Promise = global.Promise ;
mongoose.set('strictQuery', false);

// const db = mongoose.createConnection()
const connectDB =  async () =>{
  await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch((err)=>
    console.log(err)
);
}

const disconnectDB = () =>{
  // mongoose.connection.close(function(){
  //   console.log('Mongoose default connection disconnected through app termination');
  //   process.exit(0);
  //   });
}
module.exports = {connectDB , disconnectDB} ;