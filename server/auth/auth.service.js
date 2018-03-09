const jwt = require('jsonwebtoken')
const config = require('../config')

const auth = async function (user) {
    const token = jwt.sign({
        type: 'bearer',
        issuer: config.token.issuer
    }, config.token.secret, { expiresIn: config.token.expiresIn });

    return token
}

module.exports = {
    auth: auth
}