const express = require("express");
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'data.json'))
})

app.listen(5000, () => console.log(`Server started.`))