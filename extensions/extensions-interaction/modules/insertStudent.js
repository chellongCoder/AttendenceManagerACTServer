const RestDB = require('rest-db');

const connect = RestDB.instance;

class ModuleInsertStudent {
    constructor() {
        this.db = connect.getConnect();
    }

    async process(req, res) {
        const result = req.body;
        console.log('result',result);
        let user = result.user;
        let profile = result.additionalUserInfo.profile;
        console.log
        ('pro',result.additionalUserInfo.profile);
        const data = await this.db('STUDENT').returning(['id', 'title'])
            .insert({
                studentId: profile.id,
                firstName : profile.first_name,
                lastName : profile.last_name,
                email : profile.email,
                numberPhone : user.phoneNumber,
                avatarUrl : user.photoURL,
                courseId : null,
            })

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

module.exports = ModuleInsertStudent;