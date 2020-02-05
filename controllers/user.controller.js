const User = require('../models/user')

class UserController {
    static async index (req, res) {
        console.log('USER FROM REQUEST:', req.user)
        res.send(await new User().getList())
    }
    static create(req, res) {
        // res.send(await User.create(req))
    }
    static read(req, res) {
        // res.send(await User.find(req.params.id))
    }
    static update(req, res) {
        // res.send(await User.save())
    }
    static delete(req, res) {
        // res.send(await User.delete(req.params.id))
    }
}

module.exports = UserController