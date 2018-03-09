const { api } = require('../_core')
const { authService } = require('.')
const { userService } = require('../user')

const router = require('express').Router()

router.post("/", function (req, res) {
    userService.getUserByCriteria({
        username: req.body.username,
        password: req.body.password
    })
        .then(user => {
            if (user) {
                authService.auth(user)
                    .then(token => {
                        res.status(200)
                        res.send({
                            token: token
                        })
                    })
            } else {
                res.status(404)
                res.send()
            }
        })
        .catch(err => {
            res.status(500)
            res.send({
                err: err
            })
        })
})

module.exports = routerRegistry.register('/auth', router)