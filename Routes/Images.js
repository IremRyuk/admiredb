const express = require('express')
const router = express.Router()
// const middlewareAuth = require('../middleware/middleware')
const {NewData,getAllData,singleData,deleteData,UpdateSingleValue} = require('../controlers/ImagesController')


// middleware
// router.use(middlewareAuth)

router.get('/allImages',getAllData)
router.post('/',NewData)
router.get('/:id',singleData)
router.patch('/:id',UpdateSingleValue)
router.delete('/:id',deleteData)

module.exports = router