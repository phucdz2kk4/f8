const Course = require("../models/Course");
const {multipleMongooseToObject, mongooseToObject} = require('../../utill/mongoose');


class CourseController {


    async show(req, res) {

        const course = await Course.findOne({slug: req.params.slug});
        res.render('course/show', {course: mongooseToObject(course)});
    };

    async create(req, res) {
        res.render('course/create');
    }


    // async index(req, res) {
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (error) {
    //         res.status(400).json({error: 'ERROR!!!'});
    //     }
    // }

// create new course
    async store(req, res) {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.redirect('/');
    }

}

module.exports = new CourseController();


