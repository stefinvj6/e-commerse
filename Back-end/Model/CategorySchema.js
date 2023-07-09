const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category_name:{
        type:String,
        required:true
    },
    category_logo:{
        type:String,
        required:true
    }
})

const category = mongoose.model('category',categorySchema);
module.exports = category;