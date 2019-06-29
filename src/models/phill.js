const mongoose = require('mongoose')

const PhillSchema = new mongoose.Schema({
    sintomas: {
        type: Array
    },
    user_id: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('phill', PhillSchema)