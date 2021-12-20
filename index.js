'use strict'

const path = require('path')
const fs = require('fs')

const Handlebars = require('handlebars')
Handlebars.registerHelper('name', require('./name'))

const template = Handlebars.compile(fs.readFileSync(path.join(__dirname, 'template')).toString())

const http = require('http')
const server = http.createServer(serve)

function serve (req, res) {
  res.end(template({}))
}

server.listen(3000)
