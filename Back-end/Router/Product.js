const express = require("express");
const router = express.Router();
const product = require("../Model/ProductSchema");

router.get("/",async(req,res)=>{
    try {
        const getProduct = await product.find()
        res.json(getProduct)
    } catch (error) {
        res.send(error)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const product1 = await product.findById(req.params.id)
        res.json(product1)
    } catch (error) {
        res.send(error)
    }
})

router.get("/category/:categories",async(req,res)=>{
    try{
        const categories = req.params.categories
        const username1 = await product.find({categories:categories})
        res.json(username1[0])
    }
    catch(err){
        console.log(err)
        console.log(err)
    }
})

router.post("/",async(req,res)=>{
    try {
        const postProduct = new product(req.body)
        await postProduct.save()
        res.json(postProduct)
    } catch (error) {
        res.send(error)
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const editProduct = await product.findByIdAndUpdate(req.params.id,req.body)
        res.json(editProduct)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const deleteProduct = await product.findByIdAndDelete(req.params.id)
        res.json(deleteProduct)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router