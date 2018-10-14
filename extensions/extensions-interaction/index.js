const getAllStudent = require('./modules/getAllStudent');
const getStudentById = require('./modules/getStudentById');
const insertStudent  = require('./modules/insertStudent');
const getAllCourses = require('./modules/getAllCourses');
const getStudentByIdCourse = require('./modules/getStudentByIdCourse');
const getAdminUser = require("./module/getStudentByIdCourse");
console.log('asasd');
module.exports = {
    getAllCourses,
    getAllStudent,
    getStudentById,
    insertStudent,
    getStudentByIdCourse,
    getAdminUser
}