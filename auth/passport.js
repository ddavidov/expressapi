const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy
const uuidv4 = require('uuid/v4');
const User = require('../models/user')

passport.use(new LocalStrategy(
    async function(username, password, done) {
        //@TODO: Get appropriate user from DB
        /* Example:
            const user = await new User.getUserByCredentials(username, password)
        */

        //@TODO: Check if user not found...

        // Generate token
        const token = uuidv4();
        // user.token = uuidv4()

        //@TODO: Save user with new token to DB
        /*
            await User.update(user)
        */
        return done(null, {user: username, token})
        //return done(null, user)
    }
));

passport.use(new BearerStrategy(
    function(token, done) {
        //@TODO: Get appropriate user from DB
        /* Example:
            const user = await new User.getUserByToken(token)
        */
        return done(null, {user: 'username', token})
        //return done(null, user)
    }
));

module.exports = passport