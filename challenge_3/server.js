const express = require('express')
const app = express()

app.use(express.static('./client'))

app.get('/', (req, res) => res.send('Test'))

app.listen(3000, () => console.log('Listening on port 3000!'))
