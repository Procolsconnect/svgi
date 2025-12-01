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
    image: { type: String, required: true },
}, { timestamps: true });
const campusSportsAtheletsSchema = new mongoose.Schema({
    title: { type: String, required: true },
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
}