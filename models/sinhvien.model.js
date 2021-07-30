const mongoose = require('mongoose')
const sinhvienSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    old: { type: Number }
});
module.exports = mongoose.model('sinhvien', sinhvienSchema)