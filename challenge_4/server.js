const express = require('express')
const app = express()

app.use(express.static('client'))

app.get('/', (req, res) => res.end('Hello World!'))

app.listen(3000, () => console.log('App listening on port 3000!'))
