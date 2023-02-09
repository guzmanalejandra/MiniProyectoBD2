const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin2601:admin@dogstagram.llxnhbl.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("LogInCollection",LogInSchema)
module.exports=collection
