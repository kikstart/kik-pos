const { api } = require('../_core')
const { userService } = require('.')

const router = require('express').Router()

router.post("/", function(req, res) {
    // Add new user
    userService.addUser(req.body)
        .then(user => {
            res.status(201)
            res.send({
                id: user.id
            })
        })
        .catch(err => {
            res.status(500)
            res.send({
                err: err
            })
        })
});

module.exports = routerRegistry.register('/users', router)