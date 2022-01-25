const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
    task:{

    },
    complete:{

    },
    date:{

    }

})

module.exports = mongoose.model('todoMod',dbSchema)