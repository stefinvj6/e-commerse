const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_image:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    }
    // categories:{
    //     type:mongoose.Types.ObjectId,
    //     ref:'category',
    //     required:true
    // }
},{ strictPopulate: false })

const product = mongoose.model("product",productSchema);
module.exports = product;