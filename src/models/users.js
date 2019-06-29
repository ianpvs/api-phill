const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date
    },
    deases: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('users', UserSchema)