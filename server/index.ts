import express  from "express";

const app = express();
const PORT = process.env.PORT || 5050

app.get("/",(req,res)=>{
    res.send("server is ready!!")
});

app.listen(PORT, ()=>{console.log(`Server Ruunnig On Port ${PORT}`)})