const { api } = require('../_core')
const { authService } = require('.')
const { userService } = require('../user')

const router = require('express').Router()

router.post('/', async function (req, res) {
  try {
    const user = await userService.getUserByCriteria({
      username: req.body.username,
      password: req.body.password
    })

    if (user) {
      const token = authService.auth(user)
      res.status(200)
      res.send({
        token: token
      })
    } else {
      res.status(404)
      res.send()
    }
  } catch (err) {
    res.status(500)
    res.send({
      err: err
    })
  }
})

module.exports = api.register('/auth', router)
