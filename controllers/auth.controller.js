const passport = require('../auth/passport')

class AuthController {
    static login (req, res) {
        passport.authenticate('local', { session: false }, (err, user, trace) => {
            // @TODO: Check for errors and construct the response
            res.send(user)
        })(req, res)
    }

    static async logout (req, res) {
        // @TODO: Get user from request
        // @TODO: Generate new token for that user and update user
        // @TODO: Remove user from request

        res.send({success: true})
    }

    static async register (req, res) {
        passport.authenticate('local', { session: false }, (err, user, trace) => {
            // @TODO: Check for errors and construct the response
            res.send(user)
        })(req, res)
    }
}

module.exports = AuthController