const mongoose = require('mongoose')

const campusOverviewHeroSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });


const campusSportsHeroSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const campusSportsCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });
const campusSportsAcheivementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });
const campusSportsAtheletsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    achievement: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const campusSportsVideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    video_url: { type: String, required: true },
}, { timestamps: true });


const campusHostelHeroSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });
const campusHostelCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });
const campusHostelfaqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
}, { timestamps: true });


const campusHealthHeroSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const campusHealthCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

const campusFestivalCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });
const campusFestivalEventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });


const campusFestivalHeroSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const campusGreensvgiHeroSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });
const campusGreensvgiImageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });
const campusGreensvgiImageGallarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });


// Welfare
const campusEventGallery = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });
const alumaniStudent = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    achievement: { type: String, required: true },
}, { timestamps: true });
const welfareHeroImage = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });
const bouncerTitle = new mongoose.Schema({
    title: { type: String, required: true },
}, { timestamps: true });

const fancyText = new mongoose.Schema({
    rowoneTitle: { type: String, required: true, },
    rowoneImage: { type: String, required: true, },
    rowtwoPara: [{ type: String, required: true, }],
    rowtwoImage: { type: String, required: true, }
},
    { timestamps: true });


const studentClubs = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });


const policyHero = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const policyTitle = new mongoose.Schema({
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
}, { timestamps: true });

const policyCard = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const CampusHealthHero = mongoose.model('CampusHealthHero', campusHealthHeroSchema);
const CampusHealthCard = mongoose.model('CampusHealthCard', campusHealthCardSchema);
const CampusFestivalHero = mongoose.model('CampusFestivalHero', campusFestivalHeroSchema);
const CampusFestivalCard = mongoose.model('CampusFestivalCard', campusFestivalCardSchema);
const CampusFestivalEvent = mongoose.model('CampusFestivalEvent', campusFestivalEventSchema);
const CampusGreensvgiHero = mongoose.model('CampusGreensvgiHero', campusGreensvgiHeroSchema);
const CampusGreensvgiImage = mongoose.model('CampusGreensvgiImage', campusGreensvgiImageSchema);
const CampusGreensvgiImageGallary = mongoose.model('CampusGreensvgiImageGallary', campusGreensvgiImageGallarySchema);

const CampusOverviewHero = mongoose.model('CampusOverviewHero', campusOverviewHeroSchema);
const CampusSportsHero = mongoose.model('CampusSportsHero', campusSportsHeroSchema);
const CampusSportsCard = mongoose.model('CampusSportsCard', campusSportsCardSchema);
const CampusSportsAcheivement = mongoose.model('CampusSportsAcheivement', campusSportsAcheivementSchema);
const CampusSportsVideo = mongoose.model('CampusSportsVideo', campusSportsVideoSchema);
const CampusSportsAthelets = mongoose.model('CampusSportsAthelets', campusSportsAtheletsSchema);
const CampusHostelHero = mongoose.model('CampusHostelHero', campusHostelHeroSchema);
const CampusHostelCard = mongoose.model('CampusHostelCard', campusHostelCardSchema);
const CampusHostelFaq = mongoose.model('CampusHostelFaq', campusHostelfaqSchema);

const CampusEventGallery = mongoose.model('CampusEventGallery', campusEventGallery);
const AlumaniStudent = mongoose.model('AlumaniStudent', alumaniStudent);
const WelfareHeroImage = mongoose.model('WelfareHeroImage', welfareHeroImage);
const BouncerTitle = mongoose.model('BouncerTitle', bouncerTitle);
const FancyText = mongoose.model('FancyText', fancyText);
const StudentClubs = mongoose.model('StudentClubs', studentClubs);

const PolicyHero = mongoose.model('PolicyHero', policyHero);
const PolicyTitle = mongoose.model('PolicyTitle', policyTitle);
const PolicyCard = mongoose.model('PolicyCard', policyCard);

module.exports = {
    CampusSportsHero,
    CampusOverviewHero,
    CampusSportsCard,
    CampusSportsAcheivement,
    CampusSportsVideo,
    CampusSportsAthelets,
    CampusHostelHero,
    CampusHostelCard,
    CampusHostelFaq,
    CampusHealthHero,
    CampusHealthCard,
    CampusFestivalHero,
    CampusFestivalCard,
    CampusFestivalEvent,
    CampusGreensvgiHero,
    CampusGreensvgiImage,
    CampusGreensvgiImageGallary,
    CampusEventGallery,
    AlumaniStudent,
    WelfareHeroImage,
    BouncerTitle,
    FancyText,
    StudentClubs,
    PolicyHero,
    PolicyTitle,
    PolicyCard,
}