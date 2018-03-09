const User = require('./user.model')

const addUser = async function (user) {
    return await User.create(user, { isNewRecord: true })
}

const getUserByCriteria = async function (criteria) {
    const user = User.findOne({ where: criteria });
    return user
}

module.exports = {
    addUser: addUser,
    getUserByCriteria: getUserByCriteria
}