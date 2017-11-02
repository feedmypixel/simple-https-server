const https = require('https')
const fs = require('fs')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')

const app = express()
const port = process.env.PORT || 8090
const pathToIndex = path.resolve(__dirname + '/public/index.html')
const sslOptions = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem')
}

app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())

app.route('*').get((req, res) => {
  res.sendFile(pathToIndex)
})

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Server listening on ${port}`)
})
