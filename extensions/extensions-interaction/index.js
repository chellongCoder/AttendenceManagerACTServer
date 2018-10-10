const getAllStudent = require('./modules/getAllStudent');
const getStudentById = require('./modules/getStudentById');
const insertStudent  = require('./modules/insertStudent');
const getAllCourses = require('./modules/getAllCourses');
const getStudentByIdCourse = require('./modules/getStudentByIdCourse');
module.exports = {
    getAllCourses,
    getAllStudent,
    getStudentById,
    insertStudent,
    getStudentByIdCourse
}