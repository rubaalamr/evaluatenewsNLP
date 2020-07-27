const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var aylien = require("aylien_textapi")
var textapi = new aylien({
  application_id: process.env.API_ID,
   application_key: process.env.API_KEY
});

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(2020, function () {
    console.log('Example app listening on port 2020!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/url', function (req, res){
  textapi.sentiment({
    url: req.body.text
  }, function(error, response) {
    if (error) {
      return;
    }
    res.send(response)
  });
})
