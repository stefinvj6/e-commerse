const express = require("express");
const cart = require("../Model/CartSchema");
const router = express.Router();

router.get("/",async(req,res)=>{
    try {
        const getCart = await cart.find().populate("cart").populate("cart")
        res.json(getCart)
    } catch (error) {
        res.send(error)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const getId = await cart.findById(req.params.id).populate("cart")
        res.json(getId)
    } catch (error) {
        res.send(error)
    }
})

router.post("/",async(req,res)=>{
    try {
        const postCart = new cart(req.body)
        await postCart.save()
        res.send(postCart)
    } catch (error) {
        res.send(error)
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const editCart = await cart.findByIdAndUpdate(req.params.id,req.body).populate("cart")
        res.json(editCart)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const deleteCart = await cart.findByIdAndDelete(req.params.id)
        res.json(deleteCart)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router