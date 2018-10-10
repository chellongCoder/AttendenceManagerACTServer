const RestDB = require('rest-db');

const connect = RestDB.instance;

class ModuleGetAllCourses {
    constructor() {
        this.db = connect.getConnect();
    }

    async process(req, res) {
        const result = res.body;

        const data = await this.db('COURSES').select("*");

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

module.exports = ModuleGetAllCourses;