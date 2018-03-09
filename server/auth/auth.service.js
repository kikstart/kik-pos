const jwt = require('jsonwebtoken')
const config = require('../config')

const auth = function (user) {
    return new Promise(resolve => {
        const token = jwt.sign({
            type: 'bearer',
            issuer: config.token.issuer
        }, config.token.secret, { expiresIn: config.token.expiresIn });

        resolve(token)
    })
}

module.exports = {
    auth: auth
}