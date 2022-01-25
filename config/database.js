const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_STRING, {
            // useNewUrlParser: true,     // use npm list to check version in mongoose 6 these are not supported
            // useUnifiedTopology: true,
            // useFindAndModify: false,  
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
module.exports = connectDB