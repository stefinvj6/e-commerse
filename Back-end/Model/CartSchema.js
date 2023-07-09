const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    cart:{
        type:mongoose.Types.ObjectId,
        ref:'product',
        required:true
    }
},{ strictPopulate: false })

const cart = mongoose.model("cart",cartSchema);
module.exports = cart;