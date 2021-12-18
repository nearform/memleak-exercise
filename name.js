'use strict'

const namesGenerator = require('docker-namesgenerator')
const names = {}

function name () {
  let result = namesGenerator()
  if (names[result]) {
    result += names[result]++
  }
  names[result] = 1
  return result
}

module.exports = name
