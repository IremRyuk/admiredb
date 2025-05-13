const ImagesSchema = require('../Schema/ImagesSchema')
const mongoose  = require('mongoose')

// Get All Data
const getAllData = async (req,res) => {
    const allData = await ImagesSchema.find().sort({createdAt:-1})
    res.status(200).json(allData)
}
// Create New Data
const NewData = async (req,res) => {
    const {nameGeo,nameEng,nameRus,image} = req.body
    try{
        const newData = await ImagesSchema.create({nameGeo,nameEng,nameRus,image})
        res.status(200).json({newData})
    }catch(err){
        console.log('New Posty Error',err)
    }
}
// Update Data
const UpdateSingleValue = async(req,res) => {
    const {id} = req.params

    // if params id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log('params id is not valid')
        return res.status(404).json({error:'params id is not valid'})
    }

    // if params id is valid then
    try{
        const updataSingleItem = await ImagesSchema.findOneAndUpdate({_id:id},{...req.body})
        res.status(200).json({updated:updataSingleItem})
    }
    catch(err)
    {console.log(`${err} in single item update`)}
    
}

// Get Single Data
const singleData = async(req,res) => {
    const {id} = req.params
    const SingleData = await ImagesSchema.findById(id)
    res.status(200).json(SingleData)
}


// Delete Single Data
const deleteData = async(req,res) => {
    const {id} = req.params
    // Check if params id is Valid
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'params id is not valid'})
}


const deletedItem = await ImagesSchema.findByIdAndDelete(id)
res.status(200).json(deletedItem)
}


module.exports = {
    getAllData,
    NewData,
    singleData,
    deleteData,
    UpdateSingleValue,
}