const passport = require('../auth/passport')

class AuthController {
    static login (req, res) {
        passport.authenticate('local', { session: false }, (err, user, trace) => {
            if(err) {
                throw new Error(err)
            }
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
        // @TODO: Implement this
    }
}

module.exports = AuthController
