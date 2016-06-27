'use strict'

const tap = require('tap')
const transportByFara = require('../index')

tap.throws(
  function () {
    const options = false
    transportByFara(options)
  },
  {message: 'Missing required input: options object'},
  'requires an options object'
)

tap.throws(
  function () {
    const options = {
      postnummer: false
    }
    transportByFara(options)
  },
  {message: 'Missing required input: options.postnummer'},
  'requires options.postnummer to exist'
)

tap.throws(
  function () {
    const options = {
      postnummer: true,
      skoleid: false
    }
    transportByFara(options)
  },
  {message: 'Missing required input: options.skoleid'},
  'requires options.skoleid to exist'
)
