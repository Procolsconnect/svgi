const { CampusSportsHero, CampusSportsCard, CampusSportsAcheivement, CampusSportsVideo, CampusSportsAthelets } = require("../../models/campus");

// CREATE
async function createSportsHero(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
    };
    return await new CampusSportsHero(data).save();
}

// GET ALL
async function getSportsHero() {
    return await CampusSportsHero.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getSportsHeroById(id) {
    const hero = await CampusSportsHero.findById(id);
    if (!hero) throw new Error("Campus Sports Hero not found");
    return hero;
}

// UPDATE
async function updateSportsHero(id, body, file) {
    const hero = await CampusSportsHero.findById(id);
    if (!hero) throw new Error("Campus Sports Hero not found");
    if (file) hero.image = file.path;
    if (body.title) hero.title = body.title;
    return await hero.save();
}

// DELETE
async function deleteSportsHero(id) {
    const hero = await CampusSportsHero.findByIdAndDelete(id);
    if (!hero) throw new Error("Campus Sports Hero not found");
    return hero;
}

// --------- Sports Card CRUD (moved here per project convention) ---------
// CREATE
async function createSportsCard(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
        description: body.description,
    };
    return await new CampusSportsCard(data).save();
}

// GET ALL
async function getSportsCard() {
    return await CampusSportsCard.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getSportsCardById(id) {
    const card = await CampusSportsCard.findById(id);
    if (!card) throw new Error("Campus Sports Card not found");
    return card;
}

// UPDATE
async function updateSportsCard(id, body, file) {
    const card = await CampusSportsCard.findById(id);
    if (!card) throw new Error("Campus Sports Card not found");
    if (file) card.image = file.path;
    if (body.title) card.title = body.title;
    if (body.description) card.description = body.description;
    return await card.save();
}

// DELETE
async function deleteSportsCard(id) {
    const card = await CampusSportsCard.findByIdAndDelete(id);
    if (!card) throw new Error("Campus Sports Card not found");
    return card;
}

// --------- Sports Acheivement CRUD (consolidated here) ---------
// CREATE
async function createSportsAcheivement(body, file) {
    const data = {
        title: body.title,
        description: body.description,
        image: file?.path,
    };
    return await new CampusSportsAcheivement(data).save();
}

// GET ALL
async function getSportsAcheivement() {
    return await CampusSportsAcheivement.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getSportsAcheivementById(id) {
    const item = await CampusSportsAcheivement.findById(id);
    if (!item) throw new Error("Campus Sports Acheivement not found");
    return item;
}

// UPDATE
async function updateSportsAcheivement(id, body, file) {
    const item = await CampusSportsAcheivement.findById(id);
    if (!item) throw new Error("Campus Sports Acheivement not found");
    if (file) item.image = file.path;
    if (body.title) item.title = body.title;
    if (body.description) item.description = body.description;
    return await item.save();
}

// DELETE
async function deleteSportsAcheivement(id) {
    const item = await CampusSportsAcheivement.findByIdAndDelete(id);
    if (!item) throw new Error("Campus Sports Acheivement not found");
    return item;
}

// --------- Sports Video CRUD (consolidated here) ---------
// CREATE
async function createSportsVideo(body, file) {
    const data = {
        title: body.title,
        video_url: file?.path ?? body.video_url,
    };
    return await new CampusSportsVideo(data).save();
}

// GET ALL
async function getSportsVideo() {
    return await CampusSportsVideo.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getSportsVideoById(id) {
    const vid = await CampusSportsVideo.findById(id);
    if (!vid) throw new Error("Campus Sports Video not found");
    return vid;
}

// UPDATE
async function updateSportsVideo(id, body, file) {
    const vid = await CampusSportsVideo.findById(id);
    if (!vid) throw new Error("Campus Sports Video not found");
    if (file) vid.video_url = file.path;
    if (body.title) vid.title = body.title;
    if (body.video_url) vid.video_url = body.video_url;
    return await vid.save();
}

// DELETE
async function deleteSportsVideo(id) {
    const vid = await CampusSportsVideo.findByIdAndDelete(id);
    if (!vid) throw new Error("Campus Sports Video not found");
    return vid;
}

// --------- Sports Athelets CRUD (consolidated here) ---------
// CREATE
async function createSportsAthelet(body, file) {
    const data = {
        name: body.name,
        achievement: body.achievement,
        image: file?.path,
    };
    return await new CampusSportsAthelets(data).save();
}

// GET ALL
async function getSportsAthelet() {
    return await CampusSportsAthelets.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getSportsAtheletById(id) {
    const item = await CampusSportsAthelets.findById(id);
    if (!item) throw new Error("Campus Sports Athelet not found");
    return item;
}

// UPDATE
async function updateSportsAthelet(id, body, file) {
    const item = await CampusSportsAthelets.findById(id);
    if (!item) throw new Error("Campus Sports Athelet not found");
    if (file) item.image = file.path;
    if (body.name) item.name = body.name;
    if (body.achievement) item.achievement = body.achievement;
    return await item.save();
}

// DELETE
async function deleteSportsAthelet(id) {
    const item = await CampusSportsAthelets.findByIdAndDelete(id);
    if (!item) throw new Error("Campus Sports Athelet not found");
    return item;
}

module.exports = {
    createSportsHero,
    getSportsHero,
    getSportsHeroById,
    updateSportsHero,
    deleteSportsHero,
    createSportsCard,
    getSportsCard,
    getSportsCardById,
    updateSportsCard,
    deleteSportsCard,
    // Sports Acheivement CRUD
    createSportsAcheivement,
    getSportsAcheivement,
    getSportsAcheivementById,
    updateSportsAcheivement,
    deleteSportsAcheivement,
    // Sports Video CRUD
    createSportsVideo,
    getSportsVideo,
    getSportsVideoById,
    updateSportsVideo,
    deleteSportsVideo,
    // Sports Athelets CRUD
    createSportsAthelet,
    getSportsAthelet,
    getSportsAtheletById,
    updateSportsAthelet,
    deleteSportsAthelet,
};



