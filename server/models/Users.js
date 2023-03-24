const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String, 
        required: true,
    },
    selection: {
        type: [{
            id: {type: String},
            winner: {type: String}
        }], 
        required: false,
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User