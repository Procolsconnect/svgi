const CampusEventGalleryService = require("../../services/welfare/CampusEventGalleryService");

async function createEventGalleryImage(req, res) {
    try {
        const image = await CampusEventGalleryService.createEventGalleryImage(req.body, req.file);
        res.status(201).json({ success: true, message: "Campus Event Gallery Image created successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Campus Event Gallery Image", error: err.message });
    }
}

async function getEventGalleryImages(req, res) {
    try {
        const images = await CampusEventGalleryService.getEventGalleryImages();
        res.status(200).json({ success: true, message: "Campus Event Gallery Images fetched successfully", data: images });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Event Gallery Images", error: err.message });
    }
}

async function getEventGalleryImageById(req, res) {
    try {
        const image = await CampusEventGalleryService.getEventGalleryImageById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Event Gallery Image fetched successfully", data: image });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Event Gallery Image not found", error: err.message });
    }
}

async function updateEventGalleryImage(req, res) {
    try {
        const image = await CampusEventGalleryService.updateEventGalleryImage(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Campus Event Gallery Image updated successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Event Gallery Image", error: err.message });
    }
}

async function deleteEventGalleryImage(req, res) {
    try {
        const image = await CampusEventGalleryService.deleteEventGalleryImage(req.params.id);
        res.status(200).json({ success: true, message: "Campus Event Gallery Image deleted successfully", data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Event Gallery Image", error: err.message });
    }
}

module.exports = {
    createEventGalleryImage,
    getEventGalleryImages,
    getEventGalleryImageById,
    updateEventGalleryImage,
    deleteEventGalleryImage,
};
