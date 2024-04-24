const mariadb = require('mariadb')

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env

const pool = mariadb.createPool({
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE
})

module.exports = pool