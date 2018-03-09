let sequelize;

const init = function (s) {
    sequelize = s
}

const defineModel = function (name, model) {
    return sequelize.define(name, model)
}

module.exports = {
    init: init,
    defineModel: defineModel
}