const express = require("express");
const app=express();
const mongoose = require("mongoose");
const cors =  require('cors')
const port = 8000;
const dotenv = require("dotenv")

dotenv.config()

main().then(() => {
    console.log("MongoDB Connected")
}).catch((err) => {
    console.log(err)
});async function main(){
    await mongoose.connect(process.env.DB)
}

app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000'
//   }));

const Products = require("./Router/Product")
app.use("/product",Products)

const Categorys = require("./Router/Category")
app.use("/category",Categorys)

const Carts = require("./Router/Cart")
app.use("/cart",Carts)

const getCategories = require('./Router/getCategory')
app.use("/getCategory",getCategories)

const Users = require("./Router/User")
app.use("/user",Users)

app.listen(port,()=>{
    console.log(`App is listening on : ${port}`)
})