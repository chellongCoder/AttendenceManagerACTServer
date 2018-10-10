const RestDB = require('rest-db');

const connect = RestDB.instance;

class ModuleGetStudent {
    constructor() {
        this.db = connect.getConnect();
    }

    async process(req, res) {
        const result = res.body;

        const data = await this.db('STUDENT').select("*");

        console.log('data', data);
        (typeof data !== "undefine") ?
        res.json({
            messege: "success",
            data: data
        }): res.json({
            message: "fail",
            data: []
        });
    }
}

module.exports = ModuleGetStudent;