const mongoose=require('mongoose'); 
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const UserSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Name is required'],
            minlength:3,
            maxlength:50,
          },
          email:{
            type:String,
            required:[true,'Email is required'],
            minlength:3,
            maxlength:50,
            match:[
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email'
            ],
            unique:true,
          },
          password:{
            type:String,
            required:[true,'Password is required'],
            minlength:6,
          }
    },
    {
        timestamps:true
    }
)

UserSchema.pre('save', async function(){
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt) 
 })
 UserSchema.methods.createJWT= function (){
    return jwt.sign({email:this.email},process.env.JWT_SECRET,{expiresIn :process.env.JWT_LIFETIME})
  }
  UserSchema.methods.comparePassword= function(candidatePassowrd){
    const isMatch=bcrypt.compare(candidatePassowrd,this.password)
    return isMatch ;
  }
module.exports=mongoose.model("User",UserSchema);