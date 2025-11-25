const { CampusFestivalHero, CampusFestivalCard, CampusFestivalEvent } = require("../../models/campus");

// CREATE
async function createFestivalHero(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
    };
    return await new CampusFestivalHero(data).save();
}

// GET ALL
async function getFestivalHero() {
    return await CampusFestivalHero.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getFestivalHeroById(id) {
    const hero = await CampusFestivalHero.findById(id);
    if (!hero) throw new Error("Campus Festival Hero not found");
    return hero;
}

// UPDATE
async function updateFestivalHero(id, body, file) {
    const hero = await CampusFestivalHero.findById(id);
    if (!hero) throw new Error("Campus Festival Hero not found");
    if (file) hero.image = file.path;
    if (body.title) hero.title = body.title;
    return await hero.save();
}

// DELETE
async function deleteFestivalHero(id) {
    const hero = await CampusFestivalHero.findByIdAndDelete(id);
    if (!hero) throw new Error("Campus Festival Hero not found");
    return hero;
}

// --------- Festival Card CRUD (moved into FestivalService)
// CREATE
async function createFestivalCard(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
        description: body.description,
    };
    return await new CampusFestivalCard(data).save();
}

// GET ALL
async function getFestivalCard() {
    return await CampusFestivalCard.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getFestivalCardById(id) {
    const card = await CampusFestivalCard.findById(id);
    if (!card) throw new Error("Campus Festival Card not found");
    return card;
}

// UPDATE
async function updateFestivalCard(id, body, file) {
    const card = await CampusFestivalCard.findById(id);
    if (!card) throw new Error("Campus Festival Card not found");
    if (file) card.image = file.path;
    if (body.title) card.title = body.title;
    if (body.description) card.description = body.description;
    return await card.save();
}

// DELETE
async function deleteFestivalCard(id) {
    const card = await CampusFestivalCard.findByIdAndDelete(id);
    if (!card) throw new Error("Campus Festival Card not found");
    return card;
}

// --------- Festival Event CRUD
// CREATE
async function createFestivalEvent(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
        description: body.description,
    };
    return await new CampusFestivalEvent(data).save();
}

// GET ALL
async function getFestivalEvent() {
    return await CampusFestivalEvent.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getFestivalEventById(id) {
    const event = await CampusFestivalEvent.findById(id);
    if (!event) throw new Error("Campus Festival Event not found");
    return event;
}

// UPDATE
async function updateFestivalEvent(id, body, file) {
    const event = await CampusFestivalEvent.findById(id);
    if (!event) throw new Error("Campus Festival Event not found");
    if (file) event.image = file.path;
    if (body.title) event.title = body.title;
    if (body.description) event.description = body.description;
    return await event.save();
}

// DELETE
async function deleteFestivalEvent(id) {
    const event = await CampusFestivalEvent.findByIdAndDelete(id);
    if (!event) throw new Error("Campus Festival Event not found");
    return event;
}

module.exports = {
    createFestivalHero,
    getFestivalHero,
    getFestivalHeroById,
    updateFestivalHero,
    deleteFestivalHero,
    // Festival Card CRUD
    createFestivalCard,
    getFestivalCard,
    getFestivalCardById,
    updateFestivalCard,
    deleteFestivalCard,
    // Festival Event CRUD
    createFestivalEvent,
    getFestivalEvent,
    getFestivalEventById,
    updateFestivalEvent,
    deleteFestivalEvent,
};
