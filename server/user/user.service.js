const User = require('./user.model')

const addUser = function (user) {
  return User.create(user, { isNewRecord: true })
}

const getUserByCriteria = async function (criteria) {
  const user = User.findOne({ where: criteria })
  return user
}

module.exports = {
  addUser: addUser,
  getUserByCriteria: getUserByCriteria
}
