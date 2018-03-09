const User = require('./user.model')

const addUser = function (user) {
    return User.create(user, {
        isNewRecord: true
    })
}

const getUserByCriteria = function (criteria) {
    return User.findOne({
        where: criteria
    });
}

module.exports = {
    addUser: addUser,
    getUserByCriteria: getUserByCriteria
}