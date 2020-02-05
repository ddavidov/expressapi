const passport = require('./passport')

// Request authentication middleware:
module.exports = function(req, res, next) {
    passport.authenticate('bearer', { session: false },
        (err, user, trace) => {
            // Bind user data to request:
            req.user = user

            next()
        })(req, res, next)
}