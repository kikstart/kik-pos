const jwt = require('jsonwebtoken')
const config = require('../config')

const auth = function (user) {
  const token = jwt.sign({
    type: 'bearer'
  }, config.token.secret, { expiresIn: config.token.expiresIn, issuer: config.token.issuer })

  return token
}

module.exports = {
  auth: auth
}
