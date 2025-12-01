const { AboutOverviewHero, AboutOverviewContent } = require("../../models/about");

// CREATE HERO
async function createOverviewHero(body, file) {
    const hero = new AboutOverviewHero({
        title: body.title,
        image: file?.path || null,
    });
    return await hero.save();
}

// GET ALL HEROES
async function getOverviewHero() {
    return await AboutOverviewHero.find().sort({ createdAt: -1 });
}

// GET HERO BY ID
async function getOverviewHeroById(id) {
    const hero = await AboutOverviewHero.findById(id);
    if (!hero) throw new Error("Hero not found");
    return hero;
}

// UPDATE HERO
async function updateOverviewHero(id, body, file) {
    const hero = await AboutOverviewHero.findById(id);
    if (!hero) throw new Error("Hero not found");
    if (body.title) hero.title = body.title;
    if (file) hero.image = file.path;
    return await hero.save();
}

// DELETE HERO
async function deleteOverviewHero(id) {
    const hero = await AboutOverviewHero.findByIdAndDelete(id);
    if (!hero) throw new Error("Hero not found");
    return hero;
}

// ================= Overview Content ==================

// CREATE OVERVIEW
async function createOverview(body, files) {
    return await AboutOverviewContent.create({
        sectionOne: {
            title: body.sectionOneTitle,
            description: body.sectionOneDescription,
            shortText: body.sectionOneShortText,
            images: files.sectionOneImages?.map(f => f.path) || [],
        },
        sectionTwo: {
            title: body.sectionTwoTitle,
            description: body.sectionTwoDescription,
            shortText: body.sectionTwoShortText,
            gridImages: files.sectionTwoImages?.map(f => f.path) || [],
        },
    });
}

// GET ALL OVERVIEW
async function getAllOverview() {
    return await AboutOverviewContent.find().sort({ createdAt: -1 });
}

// GET OVERVIEW BY ID
async function getOverviewById(id) {
    const data = await AboutOverviewContent.findById(id);
    if (!data) throw new Error("Overview not found");
    return data;
}

// UPDATE OVERVIEW
async function updateOverview(id, body, files) {
    const updateData = {
        sectionOne: { ...body.sectionOne },
        sectionTwo: { ...body.sectionTwo },
    };
    if (files.sectionOneImages)
        updateData.sectionOne.images = files.sectionOneImages.map(f => f.path);
    if (files.sectionTwoImages)
        updateData.sectionTwo.gridImages = files.sectionTwoImages.map(f => f.path);

    const updated = await AboutOverviewContent.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) throw new Error("Overview not found");
    return updated;
}

// DELETE OVERVIEW
async function deleteOverview(id) {
    const deleted = await AboutOverviewContent.findByIdAndDelete(id);
    if (!deleted) throw new Error("Overview not found");
    return deleted;
}

module.exports = {
    createOverviewHero,
    getOverviewHero,
    getOverviewHeroById,
    updateOverviewHero,
    deleteOverviewHero,
    createOverview,
    getAllOverview,
    getOverviewById,
    updateOverview,
    deleteOverview
};
