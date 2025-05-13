const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ImagesSchema = new Schema({
    nameGeo:{
        type:String,
        required:true
    },
    nameEng:{
        type:String,
        required:true
    },
    nameRus:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports = mongoose.model('images',ImagesSchema)