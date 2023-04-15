const express= require("express");
const path = require("path")
const app = express();
const port= 3000;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
});
app.get('/script.js',(req,res)=>{
    res.sendFile(path.join(__dirname,"script.js"))
});

app.listen(port)
console.log("listning start at",port);
