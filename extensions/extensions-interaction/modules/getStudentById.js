const RestDB = require('rest-db');

const connect = RestDB.instance;

class ModuleGetStudentById {
    constructor() {
        this.db = connect.getConnect();
    }

    async process(req, res) {
        const result = res.body;
        console.log('result', result);
        const data = await this.db('STUDENT').where('studentId', 1);
        console.log('data', data);
        (typeof data !== "undefine") ?
        res.json({
            message: "success",
            data: data
        }): res.json({
            message: "fail",
            data: []
        });
    }
}

module.exports = ModuleGetStudentById;