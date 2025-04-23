const mongoose = require('mongoose')
const Schema = mongoose.Schema
const JobsSchema = new Schema({
    nameGeo:{
        type:String,
        required:true
    },
    nameEng:{
        type:String,
        required:true
    },
    titleGeo:{
        type:String,
        required:false
    },
    titleEng:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:false,
    },
    sale:{
        type:Number,
        required:false,
    },
    image:{
        type:String,
        required:false
    }
},{timestamps:true})
module.exports = mongoose.model('jobs',JobsSchema)