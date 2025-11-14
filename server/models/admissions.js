const mongoose = require('mongoose');
const UgheroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})
const UgCourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})

const Ughero =  mongoose.model('Ughero', UgheroSchema);
const UgCourse = mongoose.model('UgCourse', UgCourseSchema);
 module.exports =
 {
    Ughero,
    UgCourse
}