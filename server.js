const { error } = require('console');
const express=require('express');
const app=express();
const PORT=3001;
app.use(express.json());

app.get('/',(req,res)=>{
    return res.send('Login')
})

app.post('/login',(req,res)=>{
    const {Email,Password}=req.body;
    if(!Email){
        return res.status(400).json({
            error:"Email Cannot be empty"
        })
    }
    if(!Password){
        return res.status(400).json({
            error:"Password Cannot be empty"
        })
    }
    return res.status(201).json({
        message:"Created Successfully"
    })
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})