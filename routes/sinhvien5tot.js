const sinhvienModel = require('../models/sinhvien.model')
const express = require('express')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const sinhvien = await sinhvienModel.find()
        res.render('sinhvien/list', { sinhvien: sinhvien })
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }

})

router.get('/add', (req, res) => {
    res.render('sinhvien/add')
})
router.post('/add', async(req, res) => {
    try {
        const newSV = new sinhvienModel({
            email: req.body.email,
            name: req.body.name,
            old: req.body.old
        })
        await newSV.save()
        res.redirect('/sinhvien')
    } catch (e) {
        console.log(e.message)
        res.redirect('/')
    }
})
router.delete('/delete/:id', async(req, res) => {
    try {
        console.log(req.params.id)
        await sinhvienModel.findByIdAndDelete(req.params.id)
        res.redirect('/sinhvien')
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})
router.get('/edit/:id', async(req, res) => {
    try {
        const sinhvien = await sinhvienModel.findById(req.params.id)
        res.render('sinhvien/edit', { sinhvien })
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
})

router.put('/edit/:id', async(req, res) => {
    try {
        let sv = await sinhvienModel.findById(req.params.id)
        sv.name = req.body.name
        sv.old = req.body.old
        await sv.save()
        res.redirect('/sinhvien')
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
})

module.exports = router