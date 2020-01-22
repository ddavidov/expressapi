require('dotenv').config()
const express = require('express')
const app = express()
const users = require('./routes/users')
const serviceLocator = require('./services/service.locator')

// Init services:
serviceLocator.register('db', require('knex')({
    client: process.env.DB_DRIVER,
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PWD,
        database : process.env.DB_NAME
    }
}))

// Bind routes:
app.use('/user', users)
// app.use('/order', orders)
// app.use('/product', products)
// app.use('/category', categories)

// Start app:
app.listen(process.env.APP_PORT, () => console.log(`API listening on port ${process.env.APP_PORT}!`))