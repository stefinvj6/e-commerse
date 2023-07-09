const express = require("express")
const router = express.Router()
const products = require('../Model/ProductSchema');
const product = require("../Model/ProductSchema");

// router.get('/:id', async (req, res) => {
//     try {
//       const getCategory = await products.find({ categories: req.params.id }).populate("categories")
//       res.json(getCategory);
//     } catch (error) {
//         res.send(error)
//     }
//   });

  router.get("/:username",async(req,res)=>{
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

module.exports = router