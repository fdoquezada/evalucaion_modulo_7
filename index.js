const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))



const port = 4000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))