const { CampusGreensvgiHero, CampusGreensvgiImage, CampusGreensvgiImageGallary } = require('../../models/campus');

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

// ============ CampusGreensvgiImage CRUD ============

// CREATE Image
async function createGreensvgiImage(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
    };
    return await new CampusGreensvgiImage(data).save();
}

// GET ALL Images
async function getGreensvgiImages() {
    return await CampusGreensvgiImage.find().sort({ createdAt: -1 });
}

// GET Image BY ID
async function getGreensvgiImageById(id) {
    const image = await CampusGreensvgiImage.findById(id);
    if (!image) throw new Error('Campus Greensvgi Image not found');
    return image;
}

// UPDATE Image
async function updateGreensvgiImage(id, body, file) {
    const image = await CampusGreensvgiImage.findById(id);
    if (!image) throw new Error('Campus Greensvgi Image not found');
    if (file) image.image = file.path;
    if (body.title) image.title = body.title;
    return await image.save();
}

// DELETE Image
async function deleteGreensvgiImage(id) {
    const image = await CampusGreensvgiImage.findByIdAndDelete(id);
    if (!image) throw new Error('Campus Greensvgi Image not found');
    return image;
}

// ============ CampusGreensvgiImageGallary CRUD ============

// CREATE Gallary Image
async function createGreensvgiImageGallary(body, file) {
    const data = {
        title: body.title,
        image: file?.path,
    };
    return await new CampusGreensvgiImageGallary(data).save();
}

// GET ALL Gallary Images
async function getGreensvgiImageGallaries() {
    return await CampusGreensvgiImageGallary.find().sort({ createdAt: -1 });
}

// GET Gallary Image BY ID
async function getGreensvgiImageGallaryById(id) {
    const gallary = await CampusGreensvgiImageGallary.findById(id);
    if (!gallary) throw new Error('Campus Greensvgi Image Gallary not found');
    return gallary;
}

// UPDATE Gallary Image
async function updateGreensvgiImageGallary(id, body, file) {
    const gallary = await CampusGreensvgiImageGallary.findById(id);
    if (!gallary) throw new Error('Campus Greensvgi Image Gallary not found');
    if (file) gallary.image = file.path;
    if (body.title) gallary.title = body.title;
    return await gallary.save();
}

// DELETE Gallary Image
async function deleteGreensvgiImageGallary(id) {
    const gallary = await CampusGreensvgiImageGallary.findByIdAndDelete(id);
    if (!gallary) throw new Error('Campus Greensvgi Image Gallary not found');
    return gallary;
}

module.exports = {
    createGreensvgiHero,
    getGreensvgiHero,
    getGreensvgiHeroById,
    updateGreensvgiHero,
    deleteGreensvgiHero,
    // Image exports
    createGreensvgiImage,
    getGreensvgiImages,
    getGreensvgiImageById,
    updateGreensvgiImage,
    deleteGreensvgiImage,
    // Gallary exports
    createGreensvgiImageGallary,
    getGreensvgiImageGallaries,
    getGreensvgiImageGallaryById,
    updateGreensvgiImageGallary,
    deleteGreensvgiImageGallary,
};
