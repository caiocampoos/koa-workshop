require('dotenv').config()
const { fromEnv } = require('./utils')

module.exports = {
    mongodb: {
        uri: fromEnv('MONGO_URI')
    }
}