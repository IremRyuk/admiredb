const express = require('express')
const router = express.Router()
// const middlewareAuth = require('../middleware/middleware')
const {NewData,getAllData,singleData,deleteData,UpdateSingleValue} = require('../controlers/jobsController')


// middleware
// router.use(middlewareAuth)

router.get('/myjobs',getAllData)
router.post('/',NewData)
router.get('/:id',singleData)
router.patch('/:id',UpdateSingleValue)
router.delete('/:id',deleteData)

module.exports = router