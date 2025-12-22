const { AboutOverviewHero, AboutOverviewIntro, AboutOverviewGrid } = require("../../models/about");

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

// ================= Overview Intro ==================

async function createOverviewIntro(body, files) {
    return await AboutOverviewIntro.create({
        title: body.title,
        description: body.description,
        shortText: body.shortText,
        images: files?.images?.map(f => f.path) || [],
    });
}

async function getAllOverviewIntro() {
    return await AboutOverviewIntro.find().sort({ createdAt: -1 });
}

async function getOverviewIntroById(id) {
    const data = await AboutOverviewIntro.findById(id);
    if (!data) throw new Error("Intro not found");
    return data;
}

async function updateOverviewIntro(id, body, files) {
    const intro = await AboutOverviewIntro.findById(id);
    if (!intro) throw new Error("Intro not found");

    if (body.title) intro.title = body.title;
    if (body.description) intro.description = body.description;
    if (body.shortText) intro.shortText = body.shortText;

    // Handle Image Array Merging
    // body.images might be a string (one existing URL) or an array of strings
    let existingImages = [];
    if (body.images) {
        existingImages = Array.isArray(body.images) ? body.images : [body.images];
    }
    const newImages = files?.images?.map(f => f.path) || [];
    intro.images = [...existingImages, ...newImages];

    return await intro.save();
}

async function deleteOverviewIntro(id) {
    const deleted = await AboutOverviewIntro.findByIdAndDelete(id);
    if (!deleted) throw new Error("Intro not found");
    return deleted;
}

// ================= Overview Grid ==================

async function createOverviewGrid(body, files) {
    return await AboutOverviewGrid.create({
        title: body.title,
        description: body.description,
        shortText: body.shortText,
        gridImages: files?.gridImages?.map(f => f.path) || [],
    });
}

async function getAllOverviewGrid() {
    return await AboutOverviewGrid.find().sort({ createdAt: -1 });
}

async function getOverviewGridById(id) {
    const data = await AboutOverviewGrid.findById(id);
    if (!data) throw new Error("Grid not found");
    return data;
}

async function updateOverviewGrid(id, body, files) {
    const grid = await AboutOverviewGrid.findById(id);
    if (!grid) throw new Error("Grid not found");

    if (body.title) grid.title = body.title;
    if (body.description) grid.description = body.description;
    if (body.shortText) grid.shortText = body.shortText;

    // Handle Image Array Merging
    let existingImages = [];
    if (body.gridImages) {
        existingImages = Array.isArray(body.gridImages) ? body.gridImages : [body.gridImages];
    }
    const newImages = files?.gridImages?.map(f => f.path) || [];
    grid.gridImages = [...existingImages, ...newImages];

    return await grid.save();
}

async function deleteOverviewGrid(id) {
    const deleted = await AboutOverviewGrid.findByIdAndDelete(id);
    if (!deleted) throw new Error("Grid not found");
    return deleted;
}

module.exports = {
    createOverviewHero,
    getOverviewHero,
    getOverviewHeroById,
    updateOverviewHero,
    deleteOverviewHero,
    createOverviewIntro,
    getAllOverviewIntro,
    getOverviewIntroById,
    updateOverviewIntro,
    deleteOverviewIntro,
    createOverviewGrid,
    getAllOverviewGrid,
    getOverviewGridById,
    updateOverviewGrid,
    deleteOverviewGrid
};
