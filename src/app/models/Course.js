const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    createdAt: { type:Date ,default: Date.now },
    updateAt: { type:Date ,default: Date.now },
    slug: { type: String, maxLength: 255 },
    videoid: { type: String, maxLength: 255 },
});
module.exports = mongoose.model('Course', Course);