const { CampusEventGallery } = require("../../models/campus");

// CREATE
async function createEventGalleryImage(body, file) {
    const data = {
        title: body.name,
        image: file?.path || null,
    };
    return await new CampusEventGallery(data).save();
}

// GET ALL
async function getEventGalleryImages() {
    return await CampusEventGallery.find().sort({ createdAt: -1 });
}

// GET BY ID
async function getEventGalleryImageById(id) {
    const image = await CampusEventGallery.findById(id);
    if (!image) throw new Error("Campus Event Gallery Image not found");
    return image;
}

// UPDATE
async function updateEventGalleryImage(id, body, file) {
    const image = await CampusEventGallery.findById(id);
    if (!image) throw new Error("Campus Event Gallery Image not found");

    if (file) image.image = file.path;
    if (body.title) image.title = body.title;

    return await image.save();
}

// DELETE
async function deleteEventGalleryImage(id) {
    const image = await CampusEventGallery.findByIdAndDelete(id);
    if (!image) throw new Error("Campus Event Gallery Image not found");
    return image;
}

module.exports = {
    createEventGalleryImage,
    getEventGalleryImages,
    getEventGalleryImageById,
    updateEventGalleryImage,
    deleteEventGalleryImage,
};
