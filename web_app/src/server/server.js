const express = require('express')
var path = require('path');
const app = express()
const port = 4000
const hostname = "127.0.0.1"

app.use("/",express.static(path.join(__dirname, '../client/', 'build')));

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})