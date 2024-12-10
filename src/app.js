const express = require("express");
const app=express();
app.use("/test",(req,res)=>{
    res.send('Funny how life works');
    
})
app.listen(3000,()=>{
    console.log('Starting server at port 3000');
    
});

// writing on my onwaiting
// const express=require("express")
// const app=express();

// app.use((req,res)  =>   {
//     res.send("life working fine")
    
// })

// app.listen(8888,()=>{
//     console.log("workig");
    
// });