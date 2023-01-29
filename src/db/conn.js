const mongoose = require("mongoose");

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://localhost:27017/RegisterForm").then(()=>{console.log("Connection is Succesfull")}).catch((err)=>{console.log("Invalid Connection")});
