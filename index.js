const express=require('express');
const mongoose=require("mongoose");
const productsRouter=require('./routes/products');
require("dotenv/config");
const bodyParser=require("body-parser");



const app=express();

app.use(bodyParser.json());
const connectionstring=`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@firstcluster.yyz1u.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
mongoose.connect(
    "mongodb://localhost:27017/NodeJsExample",
    e=>{
        if(e)
        {
            console.log("database başarıyla bağlandı");
        }else
        {
            console.log("database bağlantı hatası");
        }
    }
);

const isLoggedIn=true;

app.use((req,res,next)=>{

    if(!isLoggedIn)
    {
        res.send("giriş yapınız.");
    }else
    {
        next();
    }

}) 

app.use("/products",productsRouter);

app.listen(3000,()=>{

    console.log("Sunucu çalıştı");
});


//products => get
//product //:id // get
//create product // post
//update product //:id//put
//delete product // id // delete