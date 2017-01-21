'use strict'

var path = require('path')
var fs = require('fs')

var Handlebars = require('handlebars')
Handlebars.registerHelper('name', require('./name'))

var template = Handlebars.compile(fs.readFileSync(path.join(__dirname, 'template')).toString())

var http = require('http')
var server = http.createServer(serve)

function serve (req, res) {
  res.end(template({}))
}

server.listen(3000)
