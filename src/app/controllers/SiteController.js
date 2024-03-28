const Course = require("../models/Course");
const {multipleMongooseToObject, mongooseToObject} = require('../../utill/mongoose');


class NewsController {



    // Get home
    async index(req, res, next) {
        const courses = await Course.find({});
        res.render('home', {
            courses: multipleMongooseToObject(courses)
        })
    };




    // async index(req, res) {
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (error) {
    //         res.status(400).json({error: 'ERROR!!!'});
    //     }
    // }



    // Get search
    search(req, res) {
        res.render('Search');
    }
}

module.exports = new NewsController();


