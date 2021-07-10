const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
dotenv.config();

app.use(express.json());

mongoose.connect("mongodb+srv://pinned:pinned@cluster0.di3g9.mongodb.net/blog?retryWrites=true&w=majority",
    {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
    }).then(console.log("Connected MongoDB")).catch((err)=>console.log(err));

    app.use("/api/auth",authRoute);
    app.use("api/users",userRoute);

app.listen("5000", ()=>{
    console.log("Backend is running")
});