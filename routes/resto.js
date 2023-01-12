
const express = require('express')
const router = express.Router() 
const Resto = require('../models/Resto')


router.post('/', async(req, res) => {
    const restoPost = new Resto({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        const resto = await restoPost.save()
        res.json(resto)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const resto = await Resto.find()
        res.json(resto)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:restoId', async(req, res) => { 
    const data = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }

    try {
        // update data 
        const resto = await Resto.updateOne({_id: req.params.restoId}, data)
        // response
        res.json(resto)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:restoId', async(req, res) => {
    try {
        // delete data 
        const resto = await Resto.deleteOne({_id: req.params.restoId})
        // response
        res.json(resto)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router