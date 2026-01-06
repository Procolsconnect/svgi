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
const ProcedureSchema = new mongoose.Schema({
  content: {
    type: String, 
    required: true  // your first paragraph
  },

  video: {
    type: String, 
    required: true  // store video URL/path
  },

  steps: [
    {
      text: { type: String, required: true },
    }
  ],
});


const ProcedureHeroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})

const OverviewHeroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }
})


const OverviewSchema = new mongoose.Schema({
  // SECTION 1
  title1: { type: String, required: true },
  para1: { type: String, required: true },
  image1: { type: String, required: true },

  // SECTION 2
  title2: { type: String, required: true },
  para2: { type: String, required: true },

  // FIXED IMAGES
  ug: { type: String, required: true },
  pg: { type: String, required: true },
  research: { type: String, required: true },
  procedure: { type: String, required: true },
  para3: { type: String, required: true },
});


const ContactCardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },     // SVGI Engineering College
    phone: { type: String, required: true },     // +91-4175-220101
    email: { type: String, required: true },     // engg@svgicollege.edu.in
    description: { type: String, required: true },  // 9 am - 5 pm; Mon–Sat
    image: { type: String, required: true },     // cloudinary URL
  },
  { timestamps: true }
);
const Ughero =  mongoose.model('Ughero', UgheroSchema);
const UgCourse = mongoose.model('UgCourse', UgCourseSchema);
const Pghero =  mongoose.model('Pghero', PgheroSchema);
const PgCourse = mongoose.model('PgCourse', PgCourseSchema);
const ResearchHero =  mongoose.model('ResearchHero', ResearchHeroSchema);
const ResearchCourse = mongoose.model('ResearchCourse', ResearchCourseSchema);
const ProcedureHero = mongoose.model('ProcedureHero', ProcedureHeroSchema);
const Procedure = mongoose.model('Procedure', ProcedureSchema);
const OverviewHero = mongoose.model('OverviewHero', OverviewHeroSchema);
const Overview = mongoose.model('Overview', OverviewSchema);
const ContactCard = mongoose.model('ContactCard', ContactCardSchema);
 module.exports =
 {
    Ughero,
    UgCourse,
    Pghero,
    PgCourse,
    ResearchHero,
    ResearchCourse,
    ProcedureHero,
    Procedure,
    OverviewHero,
    Overview,
    ContactCard
}