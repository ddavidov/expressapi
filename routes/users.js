
const router = require('express').Router()
const { AttachResourceController } = require('../helpers/resources');
const UserController = require('../controllers/user.controller')
const {allowRoles, Roles} = require('../auth/acl')

router.use(allowRoles(Roles.ADMIN))

AttachResourceController(router, UserController)

module.exports = router
