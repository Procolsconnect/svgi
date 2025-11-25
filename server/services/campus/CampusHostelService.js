const { CampusHostelHero, CampusHostelCard, CampusHostelFaq } = require("../../models/campus");

// CREATE
async function createHostelHero(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
    };
    return await new CampusHostelHero(data).save();
}

// GET ALL
async function getHostelHero() {
    return await CampusHostelHero.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getHostelHeroById(id) {
    const hero = await CampusHostelHero.findById(id);
    if (!hero) throw new Error("Campus Hostel Hero not found");
    return hero;
}

// UPDATE
async function updateHostelHero(id, body, file) {
    const hero = await CampusHostelHero.findById(id);
    if (!hero) throw new Error("Campus Hostel Hero not found");
    if (file) hero.image = file.path;
    if (body.title) hero.title = body.title;
    return await hero.save();
}

// DELETE
async function deleteHostelHero(id) {
    const hero = await CampusHostelHero.findByIdAndDelete(id);
    if (!hero) throw new Error("Campus Hostel Hero not found");
    return hero;
}

// --------- Hostel Card CRUD ---------
// CREATE
async function createHostelCard(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
        description: body.description,
    };
    return await new CampusHostelCard(data).save();
}

// GET ALL
async function getHostelCard() {
    return await CampusHostelCard.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getHostelCardById(id) {
    const card = await CampusHostelCard.findById(id);
    if (!card) throw new Error("Campus Hostel Card not found");
    return card;
}

// UPDATE
async function updateHostelCard(id, body, file) {
    const card = await CampusHostelCard.findById(id);
    if (!card) throw new Error("Campus Hostel Card not found");
    if (file) card.image = file.path;
    if (body.title) card.title = body.title;
    if (body.description) card.description = body.description;
    return await card.save();
}

// DELETE
async function deleteHostelCard(id) {
    const card = await CampusHostelCard.findByIdAndDelete(id);
    if (!card) throw new Error("Campus Hostel Card not found");
    return card;
}

// --------- Hostel FAQ CRUD ---------
// CREATE
async function createHostelFaq(body) {
    const data = {
        question: body.question,
        answer: body.answer,
    };
    return await new CampusHostelFaq(data).save();
}

// GET ALL
async function getHostelFaq() {
    return await CampusHostelFaq.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getHostelFaqById(id) {
    const faq = await CampusHostelFaq.findById(id);
    if (!faq) throw new Error("Campus Hostel FAQ not found");
    return faq;
}

// UPDATE
async function updateHostelFaq(id, body) {
    const faq = await CampusHostelFaq.findById(id);
    if (!faq) throw new Error("Campus Hostel FAQ not found");
    if (body.question) faq.question = body.question;
    if (body.answer) faq.answer = body.answer;
    return await faq.save();
}

// DELETE
async function deleteHostelFaq(id) {
    const faq = await CampusHostelFaq.findByIdAndDelete(id);
    if (!faq) throw new Error("Campus Hostel FAQ not found");
    return faq;
}

module.exports = {
    createHostelHero,
    getHostelHero,
    getHostelHeroById,
    updateHostelHero,
    deleteHostelHero,
    // Hostel Card CRUD
    createHostelCard,
    getHostelCard,
    getHostelCardById,
    updateHostelCard,
    deleteHostelCard,
    // Hostel FAQ CRUD
    createHostelFaq,
    getHostelFaq,
    getHostelFaqById,
    updateHostelFaq,
    deleteHostelFaq,
};
