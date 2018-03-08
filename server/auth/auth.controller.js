const { routerRegistry } = require('../_core')

const router = require('express').Router()

router.post("/", function (req, res) {
    // Get user and return in JSON
    res.send("Not Implemented");
})

module.exports = routerRegistry.register('/auth', router)