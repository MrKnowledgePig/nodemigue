var express = require('express');
var app = express()

app.get('/', function(req, res) {
    res.send('hello migue')
})

app.get('/init', function(req, res) {
    res.send('hola papa')
})

app.listen(3000)