const { CampusGreensvgiHero } = require('../../models/campus');

// CREATE
async function createGreensvgiHero(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
    };
    return await new CampusGreensvgiHero(data).save();
}

// GET ALL
async function getGreensvgiHero() {
    return await CampusGreensvgiHero.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getGreensvgiHeroById(id) {
    const hero = await CampusGreensvgiHero.findById(id);
    if (!hero) throw new Error('Campus Greensvgi Hero not found');
    return hero;
}

// UPDATE
async function updateGreensvgiHero(id, body, file) {
    const hero = await CampusGreensvgiHero.findById(id);
    if (!hero) throw new Error('Campus Greensvgi Hero not found');
    if (file) hero.image = file.path;
    if (body.title) hero.title = body.title;
    return await hero.save();
}

// DELETE
async function deleteGreensvgiHero(id) {
    const hero = await CampusGreensvgiHero.findByIdAndDelete(id);
    if (!hero) throw new Error('Campus Greensvgi Hero not found');
    return hero;
}

module.exports = {
    createGreensvgiHero,
    getGreensvgiHero,
    getGreensvgiHeroById,
    updateGreensvgiHero,
    deleteGreensvgiHero,
};
