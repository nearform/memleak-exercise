'use strict'

var namesGenerator = require('docker-namesgenerator')
var names = {}

function name () {
  var result = namesGenerator()
  if (names[result]) {
    result += names[result]++
  }
  names[result] = 1
  return result
}

module.exports = name
