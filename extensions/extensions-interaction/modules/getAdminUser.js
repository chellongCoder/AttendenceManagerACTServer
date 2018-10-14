const RestDB = require('rest-db');

const connect = RestDB.instance;

class ModuleGetUserAdmin {
    constructor() {
        this.db = connect.getConnect();
    }

    async process(req, res) {
        const result = req.body;
        const data = await this.db('ADMIN').select("*");

        console.log('data', data[0]);
        console.log(this.checkAccountAdmin(result, data[0]));
        (typeof data !== "undefine" && this.checkAccountAdmin(result, data[0])) ?
        res.json({
            message: "success",
            data: data
        }): res.json({
            message: "fail",
            data: []
        });
    }
    
    checkAccountAdmin(result , data) {
        return (result.username.toLowerCase()===data.username.toLowerCase() 
        && result.password.toLowerCase()===result.password.toLowerCase())
    }
}

module.exports = ModuleGetUserAdmin;