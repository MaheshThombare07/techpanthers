const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//connection code
main().then(()=>{
    console.log("connection Done..");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/techpanthers');
};

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(8080,()=>{
    console.log("app is listing...");
});







