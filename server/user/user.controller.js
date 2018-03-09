const { api } = require('../_core')
const { userService } = require('.')

const router = require('express').Router()

router.post('/', async function (req, res) {
  // Add new user
  try {
    const user = await userService.addUser(req.body)
    res.status(201)
    res.send({
      id: user.id
    })
  } catch (err) {
    res.status(500)
    res.send({
      err: err
    })
  }
})

module.exports = api.register('/users', router)
