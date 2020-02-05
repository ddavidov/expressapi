
const BaseModel = require('./base.model')
const md5 = require('md5')

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
        return this.table
            .select(['name', 'email', 'id'])
            .where('email', username)
            .andWhere('password', md5(password))
            .first()
    }

    /**
     * Get user with token
     *
     * @param token
     * @returns {null}
     */
    getUserByToken(token) {
        return this.table
            .select(['name', 'email', 'id'])
            .where('token', token)
            .first()
    }
}

module.exports = User