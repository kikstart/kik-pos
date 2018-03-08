const express = require('express')
const routerRegistry = require('./common').routerRegistry
const config = require('./config')

const loadModules = function () {
    config.activeModules.forEach(moduleName => {
        require(`./${moduleName}`)
    });
}

const start = function () {
    loadModules()
    const app = express()
    app.use('/api', routerRegistry.getApiRouter())
    app.listen(config.port)
}

module.exports = {
    start: start
}