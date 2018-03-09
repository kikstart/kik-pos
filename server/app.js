require('dotenv').config({ path: `${__dirname}/.env` })
const { loader, routerRegistry, databaseHandler } = require('./_core')
const config = require('./config')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

databaseHandler.init(new Sequelize(
    config.database.database,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dilect
    }
))

loader.loadFiles()

const app = require('express')()
app.use(bodyParser.json())
app.use('/api', routerRegistry.apiRouter)
app.listen(config.server.port, () => {
    console.log(`Server started on port: ${config.server.port}`)
})