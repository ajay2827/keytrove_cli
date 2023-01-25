require('dotenv').config() ;
const mongoose = require('mongoose') ;
mongoose.Promise = global.Promise ;
mongoose.set('strictQuery', false);

const connectDB =  async () =>{
  const db = await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then()
.catch((err)=>
    console.log(err)
);
}

module.exports = connectDB ;