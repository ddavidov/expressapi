
class UserController {
    static index (req, res) {
        res.send('Index response')
    }
    static create(req, res) {
        res.send('Create response')
    }
    static read(req, res) {
        res.send('Read response')
    }
    static update(req, res) {
        res.send('Update response')
    }
    static delete(req, res) {
        res.send('Delete response')
    }
}

module.exports = UserController