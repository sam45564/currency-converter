require('dotenv').config()

const db = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    debug: false,
    dialect: 'mysql'
}

module.exports = {
    development: db,
    test: db,
    production: db
}