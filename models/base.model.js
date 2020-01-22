
const serviceLocator = require('../services/service.locator')

class BaseModel {

    constructor(tableName) {
        this.table = serviceLocator
            .get('db')
            .table(tableName)
    }

    getList() {
        return this.table.select('*')
    }

    find(id) {
        return this.table.select('*')
            .where('id', id)
            .first()
    }


}

module.exports = BaseModel