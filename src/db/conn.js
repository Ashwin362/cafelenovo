const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/cafe")
.then(()=>console.log("connection successful"))
.catch((error)=>console.log("unsccessful"))