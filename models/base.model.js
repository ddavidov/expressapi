
const serviceLocator = require('../services/service.locator')

class BaseModel {

    constructor(tableName, primaryKeyName = 'id') {
        this.table = serviceLocator
            .get('db')
            .table(tableName)
        this.primaryKey = primaryKeyName
    }

    getList() {
        return this.table.select('*')
    }

    find(id) {
        return this.table.select('*')
            .where('id', id)
            .first()
    }

    update(data) {
        let buffer = {...data};
        if(!buffer[this.primaryKey]){
            return false;
        }
        const id = buffer[this.primaryKey]
        delete buffer[this.primaryKey]

        return this.table.where(this.primaryKey, id).update(data)
    }
}

module.exports = BaseModel