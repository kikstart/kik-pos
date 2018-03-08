const express = require('express')
const routerRegistry = require('../common').routerRegistry

const router = express.Router()

router.post("/", function(req, res) {
    // Get user and return in JSON
    res.send("Not Implemented");
})

routerRegistry.registerRouter('/auth', router)