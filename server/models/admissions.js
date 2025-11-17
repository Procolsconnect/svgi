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
const PgheroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})
const PgCourseSchema = new mongoose.Schema({
  content: { type: String, required: true },
  image1: {type:String, required: true},
  image2: {type:String, required: true},
  image3: {type:String, required: true}, 
  top_text: { type: String },
  bottom_text: { type: String }
});
const ResearchHeroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})
const  ResearchCourseSchema= new mongoose.Schema({
  image1: {type:String, required: true},
  image2: {type:String, required: true},
  image3: {type:String, required: true}, 
  top_text: { type: String },
  bottom_text: { type: String }
});


const Ughero =  mongoose.model('Ughero', UgheroSchema);
const UgCourse = mongoose.model('UgCourse', UgCourseSchema);
const Pghero =  mongoose.model('Pghero', PgheroSchema);
const PgCourse = mongoose.model('PgCourse', PgCourseSchema);
const ResearchHero =  mongoose.model('ResearchHero', ResearchHeroSchema);
const ResearchCourse = mongoose.model('ResearchCourse', ResearchCourseSchema);
 module.exports =
 {
    Ughero,
    UgCourse,
    Pghero,
    PgCourse,
    ResearchHero,
    ResearchCourse
}