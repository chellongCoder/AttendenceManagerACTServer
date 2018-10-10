const RestDB = require('rest-db');

const connect = RestDB.instance;

class ModuleGetStudentByIdCource {
    constructor() {
        this.db = connect.getConnect();
    }

    async process(req, res) {
        const result = req.body;
        console.log(result.courseId);
        const data = await this.db('STUDENT').where('courseId', result.courseId);
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

module.exports = ModuleGetStudentByIdCource;