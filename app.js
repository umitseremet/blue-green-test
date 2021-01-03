const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello World! this is v10.9'))
app.get('/health', (req, res) => res.send('Health check status: ok'))

app.listen(80, () => console.log(`Example app listening at http://localhost:${port}`))
