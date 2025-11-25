const mongoose = require('mongoose');

const placementHeroSchema = new mongoose.Schema({
  title: { type: String,required: true},
  image: {type: String,required: true,},
},{ timestamps: true });

const placementSliderSchema = new mongoose.Schema({
  image: {type: String,required: true,},
  title: { type: String,required: true},
  description: { type: String,required: true},
},{ timestamps: true });
  

const placementRecordsHeroSchema = new mongoose.Schema({
  title: { type: String,required: true},
  image: {type: String,required: true,},
},{ timestamps: true });

const placementRecordsSliderSchema = new mongoose.Schema({
  image: {type: String,required: true,},
  title: { type: String,required: true},
},{ timestamps: true });


const placementRecordsWorkspaceSchema = new mongoose.Schema({
  image: {type: String,required: true,},
  title: { type: String,required: true},
  description: { type: String,required: true},
},{ timestamps: true });

const placementRecordsTeamSchema = new mongoose.Schema({
  image: {type: String,required: true,},
  name: { type: String,required: true},
  designation: { type: String,required: true},
  profile: { type: String,required: true},
  linkedin: { type: String,required: true},
  email: { type: String,required: true},

},{ timestamps: true });


const CompanyCategorySchema = new mongoose.Schema({
  title: String,
  companies: [
    {
      name: String,
      image: String,
    },
  ],
}, { timestamps: true });

const placementRecordsFaq = new mongoose.Schema({
  question: {type: String,required: true,},
  answer: { type: String,required: true},
},{ timestamps: true });

const placementRecordsVideo = new mongoose.Schema({
  video: {type: String,required: true,},
},{ timestamps: true });


// palcementprocess

const placementProcessHeroSchema = new mongoose.Schema({
  title: { type: String,required: true},
  image: {type: String,required: true,},
},{ timestamps: true });


const placementProcessCardSchema = new mongoose.Schema({
  image: {type: String,required: true,},
  title: { type: String,required: true},
  description: { type: String,required: true},
},{ timestamps: true });
const placementProcessCompanySchema = new mongoose.Schema({
  image: {type: String,required: true,},
  comapany: { type: String,required: true},
},{ timestamps: true });

const PlacementHero = mongoose.model('PlacementHero', placementHeroSchema);
const PlacementSlider = mongoose.model('PlacementSlider', placementSliderSchema);
const PlacementRecordsHero = mongoose.model('PlacementRecorsHero', placementRecordsHeroSchema);
const PlacementRecordsSlider = mongoose.model('PlacementRecordsSlider', placementRecordsSliderSchema);
const PlacementRecordsWorkspace = mongoose.model('PlacementRecordsWorkspace', placementRecordsWorkspaceSchema);
const PlacementRecordsTeam = mongoose.model('PlacementRecordsTeam', placementRecordsTeamSchema);
const CompanyCategory = mongoose.model('CompanyCategory', CompanyCategorySchema);
const PlacementRecordsFaq = mongoose.model('PlacementRecordsFaq', placementRecordsFaq);
const PlacementRecordsVideo = mongoose.model('PlacementRecordsVideo', placementRecordsVideo);
const PlacementProcessHero = mongoose.model('PlacementProcessHero', placementProcessHeroSchema);
const PlacementProcessCard = mongoose.model('PlacementProcessCard', placementProcessCardSchema);
const PlacementProcessCompany = mongoose.model('PlacementProcessCompany', placementProcessCompanySchema);

module.exports = {
  PlacementHero,
  PlacementSlider,
  PlacementRecordsHero,
  PlacementRecordsSlider,
  PlacementRecordsWorkspace,
  PlacementRecordsTeam,
  CompanyCategory,
  PlacementRecordsFaq,
  PlacementRecordsVideo,
  PlacementProcessHero,
  PlacementProcessCard,
  PlacementProcessCompany
};