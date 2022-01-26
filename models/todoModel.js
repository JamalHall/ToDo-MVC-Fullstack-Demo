const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,

    },
    complete:{
        type: Boolean,
        required: true,

    },
    date:{
        type: String,
        required: true,

    }

})

module.exports = mongoose.model('todoMod',dbSchema)