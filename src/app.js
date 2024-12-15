const express = require("express");
const app=express();
app.get("/test",
    (req,res,next)=>{
    console.log(req.params);

    // next()
    res.send({
        Name:"raghib",
        status:"unemployed",
    });
    
},
(req,res)=>{
    res.send("mai hu gian")
}

)
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



// practice 2
// const express=require("express")
// const app=express();

// app.use("/test",(req,res)=>{
//     res.send("hello world from raghib")
// })

// app.listen(3000,()=>{
//     console.log('raghib');
    
// })