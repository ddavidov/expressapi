
const BaseModel = require('./base.model')

class User extends BaseModel {
    constructor() {
        super('users')
    }

    /**
     * Get user, matching both: username and password
     *
     * @param username
     * @param password
     * @returns {null}
     */
    getUserByCredentials(username, password) {
        // @TODO: Retrieve from database user, matching both: username and password
        return null;
    }

    /**
     * Get user with token
     *
     * @param token
     * @returns {null}
     */
    getUserByCredentials(token) {
        // @TODO: Retrieve from database user, matching token
        return null;
    }
}

module.exports = User