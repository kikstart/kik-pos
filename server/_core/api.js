const express = require('express')

const apiRouter = express.Router()

const register = function (baseUrl, router) {
    apiRouter.use(baseUrl, router)
    return router
}

module.exports = {
    register: register,
    router: apiRouter
}