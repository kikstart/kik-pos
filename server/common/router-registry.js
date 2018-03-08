const express = require('express')

const apiRouter = express.Router()

const registerRouter = function (baseUrl, router) {
    apiRouter.use(baseUrl, router)
}

const getApiRouter = function () {
    return apiRouter
}

module.exports = {
    registerRouter: registerRouter,
    getApiRouter: getApiRouter
}