const express = require('express')
const app = express()
const port = 3005
const users = require('./routes/users')

// Bind routes:
app.use('/user', users)
// app.use('/order', orders)
// app.use('/product', products)
// app.use('/category', categories)

// Start app:
app.listen(port, () => console.log(`API listening on port ${port}!`))