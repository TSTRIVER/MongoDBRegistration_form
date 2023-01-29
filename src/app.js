const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const port = process.env.PORT || 8000;
const Register = require("./models/registers");

//app.use(express.static());

/*(app.get("/",(req,res)=>{
    res.send("This came from the server side of the project");
})*/

//const staticpath = path.join(__dirname,"../public");
//app.use(express.static(staticpath));
app.set("view engine","hbs");
const templatepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");
app.set("views",templatepath);


hbs.registerPartials(partialspath)

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register",async(req,res)=>{
      try{
           const obt_password = req.body.password;
           if(obt_password === req.body.confirm){
                const newUser = new Register({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    phone: req.body.phone,
                    age: req.body.age,
                    gender: req.body.gender,
                    email: req.body.email,
                    password: req.body.password,
                    confirmpass: req.body.confirm
                })
            const registeredUser = await newUser.save();
           res.status(201).render("index");
           }
           else{
            res.send("Password Mismatch !!");
           }
      }
      catch(err){
          res.status(400).send(err);
      }
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})

