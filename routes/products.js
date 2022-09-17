const express=require('express');
const Product=require("../models/Product");

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("products");
});

router.get("/:id",(req,res)=>{
    res.send(`Product ${req.params.id}`);
});

router.post("/",(req,res)=>{
    console.log(req.body);
    const product= new Product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    });
    console.log(product);
    product.save();
    res.json(product);
});

router.put("/:id",(req,res)=>{
    res.send(`Product güncellendi ${req.params.id}`);
});

router.delete("/:id",(req,res)=>{
    res.send(`Product silindi ${req.params.id}`);
})

module.exports=router;