const express=require("express")
const app=express();

app.use(express.static('images'))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})

app.get("/signin",(req,res)=>{
    res.sendFile(__dirname+"/registration.html");
})

app.get("/bestsellers",(req,res)=>{
    res.sendFile(__dirname+"/bestsellers.html");
})

app.get("/budgetsmartphones",(req,res)=>{
    res.sendFile(__dirname+"/budgetsmartphones.html");
})

app.listen(3000.,()=>{
    console.log("Server Started");
})