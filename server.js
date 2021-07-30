const express = require('express')
const sinhvienRouter = require('./routes/sinhvien5tot')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

const connectFunc = async() => {
    try {
        await mongoose.connect("mongodb+srv://mienmien192:Khanhha192@cluster0.1vu99.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("Connected successfully")

    } catch (e) {
        console.log("connection failed")
    }
}
connectFunc()
app.use('/sinhvien/', sinhvienRouter)
app.use('/', indexRouter)
app.listen(process.env.PORT || 3000)