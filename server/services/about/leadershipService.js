const { LeadershipHero, MaterialCard, QuoteCard } = require("../../models/about");

// ------------------ HERO ------------------
async function createHero(body, file) {
    const hero = new LeadershipHero({
        title: body.title,
        image: file?.path || null,
    });
    return await hero.save();
}

async function getHero() {
    return await LeadershipHero.findOne().sort({ createdAt: -1 });
}

async function updateHero(id, body, file) {
    const hero = await LeadershipHero.findById(id);
    if (!hero) throw new Error("Hero not found");
    if (body.title) hero.title = body.title;
    if (file) hero.image = file.path;
    return await hero.save();
}

async function deleteHero(id) {
    const deleted = await LeadershipHero.findByIdAndDelete(id);
    if (!deleted) throw new Error("Hero not found");
    return deleted;
}

// ------------------ MATERIAL CARDS ------------------
async function createMaterialCard(body) {
    const card = new MaterialCard({
        name: body.name,
        movie: body.movie,
        img: body.img,
        color: body.color,
        desc: body.desc,
        social: {
            facebook: body.social?.facebook || "",
            twitter: body.social?.twitter || "",
            linkedin: body.social?.linkedin || "",
            googlePlus: body.social?.googlePlus || ""
        }
    });

    // Save it to the database
    return await card.save();
}

async function getMaterialCards() {
    return await MaterialCard.find().sort({ createdAt: -1 });
}

async function updateMaterialCard(id, body) {
    const card = await MaterialCard.findById(id);
    if (!card) throw new Error("Material card not found");

    // Update top-level fields if provided
    if (body.name) card.name = body.name;
    if (body.movie) card.movie = body.movie;
    if (body.img) card.img = body.img;
    if (body.color) card.color = body.color;
    if (body.desc) card.desc = body.desc;

    // Update nested social fields safely
    if (body.social) {
        card.social = {
            facebook: body.social.facebook ?? card.social.facebook,
            twitter: body.social.twitter ?? card.social.twitter,
            linkedin: body.social.linkedin ?? card.social.linkedin,
            googlePlus: body.social.googlePlus ?? card.social.googlePlus,
        };
    }

    return await card.save();
}

async function deleteMaterialCard(id) {
    const deleted = await MaterialCard.findByIdAndDelete(id);
    if (!deleted) throw new Error("Material card not found");
    return deleted;
}

// ------------------ QUOTE CARDS ------------------
async function createQuote(body, file) {
    const quote = new QuoteCard({
        image: file?.path || null,
        title: body.title,
        text: body.text,
        link: body.link
    });
    return await quote.save();
}

async function getQuotes() {
    return await QuoteCard.find().sort({ createdAt: -1 });
}

async function updateQuote(id, body) {
    const quote = await QuoteCard.findById(id);
    if (!quote) throw new Error("Quote card not found");

    // Update fields only if provided
    if (body.image) quote.image = body.image;
    if (body.title) quote.title = body.title;
    if (body.text) quote.text = body.text;
    if (body.link) quote.link = body.link;

    return await quote.save();
}

async function deleteQuote(id) {
    const deleted = await QuoteCard.findByIdAndDelete(id);
    if (!deleted) throw new Error("Quote card not found");
    return deleted;
}

module.exports = {
    createHero,
    getHero,
    updateHero,
    deleteHero,
    createMaterialCard,
    getMaterialCards,
    updateMaterialCard,
    deleteMaterialCard,
    createQuote,
    getQuotes,
    updateQuote,
    deleteQuote
};
