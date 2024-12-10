const express = require("express");
const app=express();
app.get("/test/:name/:password",(req,res)=>{
    console.log(req.params);

    res.send({
        Name:"raghib",
        status:"unemployed",
    });
    
})
app.listen(3000,()=>{
    console.log('Starting server at port 3000');
    
});


// all working correclt

// writing on my onwaiting
// const express=require("express")
// const app=express();

// app.use((req,res)  =>   {
//     res.send("life working fine")
    
// })

// app.listen(8888,()=>{
//     console.log("workig");
    
// });