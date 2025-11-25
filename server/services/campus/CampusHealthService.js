const { CampusHealthHero, CampusHealthCard } = require("../../models/campus");

// CREATE
async function createHealthHero(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
    };
    return await new CampusHealthHero(data).save();
}

// GET ALL
async function getHealthHero() {
    return await CampusHealthHero.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getHealthHeroById(id) {
    const hero = await CampusHealthHero.findById(id);
    if (!hero) throw new Error("Campus Health Hero not found");
    return hero;
}

// UPDATE
async function updateHealthHero(id, body, file) {
    const hero = await CampusHealthHero.findById(id);
    if (!hero) throw new Error("Campus Health Hero not found");
    if (file) hero.image = file.path;
    if (body.title) hero.title = body.title;
    return await hero.save();
}

// DELETE
async function deleteHealthHero(id) {
    const hero = await CampusHealthHero.findByIdAndDelete(id);
    if (!hero) throw new Error("Campus Health Hero not found");
    return hero;
}

// --------- Health Card CRUD ---------
// CREATE
async function createHealthCard(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
        description: body.description,
    };
    return await new CampusHealthCard(data).save();
}

// GET ALL
async function getHealthCard() {
    return await CampusHealthCard.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getHealthCardById(id) {
    const card = await CampusHealthCard.findById(id);
    if (!card) throw new Error("Campus Health Card not found");
    return card;
}

// UPDATE
async function updateHealthCard(id, body, file) {
    const card = await CampusHealthCard.findById(id);
    if (!card) throw new Error("Campus Health Card not found");
    if (file) card.image = file.path;
    if (body.title) card.title = body.title;
    if (body.description) card.description = body.description;
    return await card.save();
}

// DELETE
async function deleteHealthCard(id) {
    const card = await CampusHealthCard.findByIdAndDelete(id);
    if (!card) throw new Error("Campus Health Card not found");
    return card;
}

module.exports = {
    createHealthHero,
    getHealthHero,
    getHealthHeroById,
    updateHealthHero,
    deleteHealthHero,
    // Health Card CRUD
    createHealthCard,
    getHealthCard,
    getHealthCardById,
    updateHealthCard,
    deleteHealthCard,
};
