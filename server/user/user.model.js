const Sequelize = require('sequelize')
const { databaseHandler } = require('../_core')

module.exports = databaseHandler.defineModel('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: Sequelize.STRING(20), allowNull: false, unique: true },
    password: { type: Sequelize.STRING }
})