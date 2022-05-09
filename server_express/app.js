const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 5002

app.get('/', (req, res) => {
  res.json({"data": "Hello World from express!"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})