var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/notes')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.listen('8000', function(err){
  if(err){
    console.log('err starting app', err)
  }
  else{
    console.log('app listening on port 8000')
  }
})

require('./server/routes')(app)
