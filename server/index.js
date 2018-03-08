const { loader, routerRegistry } = require('./_core')

loader.loadFiles()
const config = require('./config')

const start = function () {
    const app = require('express')()
    app.use('/api', routerRegistry.apiRouter)
    app.listen(config.port)
}

module.exports = {
    start: start
}