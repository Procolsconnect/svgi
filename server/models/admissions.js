const mongoose = require('mongoose');
const UgheroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})
const UgCourseSchema = new mongoose.Schema({
  image1: {type:String, required: true},
  image2: {type:String, required: true},
  image3: {type:String, required: true}, 
  top_text: { type: String },
  bottom_text: { type: String }
});


const Ughero =  mongoose.model('Ughero', UgheroSchema);
const UgCourse = mongoose.model('UgCourse', UgCourseSchema);
 module.exports =
 {
    Ughero,
    UgCourse
}