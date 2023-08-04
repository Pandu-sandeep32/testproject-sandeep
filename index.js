const express = require('express')
const app = express()
const routes = require("./routes/routes")
const bodyparser = require("body-parser")
const port = 8000
app.use(express.json())

app.use('/fb',routes)

app.listen(port,() => {
    console.log(`listening to port ${port}` )
})