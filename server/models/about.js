const mongoose = require("mongoose");

// ------------------ BALTIC MODEL ------------------
const BalticSchema = new mongoose.Schema({
    winter: {
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
    summer: {
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
    contentSection: {
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
});
const BalticData = mongoose.model("BalticData", BalticSchema);

// ------------------ ABOUT OVERVIEW MODELS ------------------
const AboutOverviewHeroSchema = new mongoose.Schema({
    title: String,
    image: String,
}, { timestamps: true });
const AboutOverviewHero = mongoose.model("AboutOverviewHero", AboutOverviewHeroSchema);

const OverviewContentSchema = new mongoose.Schema({
    sectionOne: {
        images: [String],
        shortText: String,
        title: String,
        description: String,
    },
    sectionTwo: {
        shortText: String,
        title: String,
        description: String,
        gridImages: [String],
    },
}, { timestamps: true });
const AboutOverviewContent = mongoose.model("AboutOverviewContent", OverviewContentSchema);

// ------------------ LEADERSHIP MODELS ------------------
const LeadershipHeroSchema = new mongoose.Schema({
    title: String,
    image: String,
}, { timestamps: true });

const MaterialCardSchema = new mongoose.Schema({
    name: String,
    movie: String,
    img: String,
    color: String,
    desc: String,
    social: {
        facebook: String,
        twitter: String,
        linkedin: String,
        googlePlus: String
    }
});

const QuoteSchema = new mongoose.Schema({
    image: String,
    title: String,
    text: String,
    link: String
});

const LeadershipHero = mongoose.model("LeadershipHero", LeadershipHeroSchema);
const MaterialCard = mongoose.model("MaterialCard", MaterialCardSchema);
const QuoteCard = mongoose.model("QuoteCard", QuoteSchema);



const vmHeroSchema = new mongoose.Schema({
    title: String,
    image: String,
}, { timestamps: true });
const VMHeroSchema = mongoose.model("VMHeroSchema", vmHeroSchema);

const vmCardSchema = new mongoose.Schema({
title: { type: String, required: true },
desc: { type: String, required: true },
image: { type: String, required: true },
link: { type: String, required: true }
}, { timestamps: true });
const VMCardSchema = mongoose.model("VMCardSchema", vmCardSchema);

const MVVSection = new mongoose.Schema({
    mission: {
        title: { type: String, required: true },
        sections: [
            {
                subtitle: { type: String, required: true },
                points: [{ type: String, required: true }]
            }
        ]
    },

    vision: {
        title: { type: String, required: true },
        lines: [{ type: String, required: true }]
    },

    values: {
        title: { type: String, required: true },
        list: [{ type: String, required: true }]
    }
}, { timestamps: true });

const MVSection = mongoose.model("MVSection", MVVSection);


// ------------------- Circular Section ---------------------------

const circleItemSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    description: { type: String, required: true }
});

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    items: [circleItemSchema]
});

const campusCircleSchema = new mongoose.Schema(
    {
        logo: { type: String, required: true },   // <-- ADDED LOGO FIELD

        academics: categorySchema,
        research: categorySchema,
        campus: categorySchema,
        placements: categorySchema
    },
    { timestamps: true }
);

const  CampusCircle = mongoose.model("CampusCircle", campusCircleSchema);




// ------------------ EXPORT ALL MODELS ------------------
module.exports = {
    BalticData,
    AboutOverviewHero,
    AboutOverviewContent,
    LeadershipHero,
    MaterialCard,
    QuoteCard,
    VMHeroSchema,
    VMCardSchema,
    MVSection,
    CampusCircle,
};
