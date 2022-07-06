const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hi.</h1>");
});

app.get("/contact", function(req, res){
  res.send("<h1>furkan.nnazli@gmail.com</h1>");
});

app.get("/about", function(req, res){
  res.send("<h1>Hi. This is Furkan.</h1>");
});

app.get("/Hobiler", (req,res)=>{
  res.send("Coding");
});

app.listen(3000, ()=>{console.log("Server has started...");});
