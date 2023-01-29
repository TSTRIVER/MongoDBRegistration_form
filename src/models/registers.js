const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
       firstname:{
          type:String,
          required:true
       },
       lastname:{
          type:String,
          required:true
       },
       phone:{
          type: Number,
          required:true,
          unique:true
       },
       age:{
          type: Number,
          required:true
       },
        gender:{
          type:String,
          required:true,
       },
       email:{
          type:String,
          required:true,
          unique:true
       },
       password:{
          type:String,
          required:true,
          unique:true
       },
       confirmpass:{
        type:String,
        required:true,
        unique:true
       }
    
})

const Register = new mongoose.model('Register',userSchema);
module.exports = Register;  