const CampusGreensvgiService = require('../../services/campus/CampusGreensvgiService');

async function createGreensvgiHero(req, res) {
    try {
        const hero = await CampusGreensvgiService.createGreensvgiHero(req.body, req.file);
        res.status(201).json({ success: true, message: 'Campus Greensvgi Hero created successfully', data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create Campus Greensvgi Hero', error: err.message });
    }
}

async function getGreensvgiHero(req, res) {
    try {
        const heroes = await CampusGreensvgiService.getGreensvgiHero();
        res.status(200).json({ success: true, message: 'Campus Greensvgi Heroes fetched successfully', data: heroes });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch Campus Greensvgi Heroes', error: err.message });
    }
}

async function getGreensvgiHeroById(req, res) {
    try {
        const hero = await CampusGreensvgiService.getGreensvgiHeroById(req.params.id);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Hero fetched successfully', data: hero });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Campus Greensvgi Hero not found', error: err.message });
    }
}

async function updateGreensvgiHero(req, res) {
    try {
        const hero = await CampusGreensvgiService.updateGreensvgiHero(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Hero updated successfully', data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update Campus Greensvgi Hero', error: err.message });
    }
}

async function deleteGreensvgiHero(req, res) {
    try {
        const hero = await CampusGreensvgiService.deleteGreensvgiHero(req.params.id);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Hero deleted successfully', data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete Campus Greensvgi Hero', error: err.message });
    }
}

// ============ CampusGreensvgiImage Controllers ============

async function createGreensvgiImage(req, res) {
    try {
        const image = await CampusGreensvgiService.createGreensvgiImage(req.body, req.file);
        res.status(201).json({ success: true, message: 'Campus Greensvgi Image created successfully', data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create Campus Greensvgi Image', error: err.message });
    }
}

async function getGreensvgiImages(req, res) {
    try {
        const images = await CampusGreensvgiService.getGreensvgiImages();
        res.status(200).json({ success: true, message: 'Campus Greensvgi Images fetched successfully', data: images });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch Campus Greensvgi Images', error: err.message });
    }
}

async function getGreensvgiImageById(req, res) {
    try {
        const image = await CampusGreensvgiService.getGreensvgiImageById(req.params.id);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Image fetched successfully', data: image });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Campus Greensvgi Image not found', error: err.message });
    }
}

async function updateGreensvgiImage(req, res) {
    try {
        const image = await CampusGreensvgiService.updateGreensvgiImage(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Image updated successfully', data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update Campus Greensvgi Image', error: err.message });
    }
}

async function deleteGreensvgiImage(req, res) {
    try {
        const image = await CampusGreensvgiService.deleteGreensvgiImage(req.params.id);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Image deleted successfully', data: image });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete Campus Greensvgi Image', error: err.message });
    }
}

// ============ CampusGreensvgiImageGallary Controllers ============

async function createGreensvgiImageGallary(req, res) {
    try {
        const gallary = await CampusGreensvgiService.createGreensvgiImageGallary(req.body, req.file);
        res.status(201).json({ success: true, message: 'Campus Greensvgi Image Gallary created successfully', data: gallary });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create Campus Greensvgi Image Gallary', error: err.message });
    }
}

async function getGreensvgiImageGallaries(req, res) {
    try {
        const gallaries = await CampusGreensvgiService.getGreensvgiImageGallaries();
        res.status(200).json({ success: true, message: 'Campus Greensvgi Image Gallaries fetched successfully', data: gallaries });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch Campus Greensvgi Image Gallaries', error: err.message });
    }
}

async function getGreensvgiImageGallaryById(req, res) {
    try {
        const gallary = await CampusGreensvgiService.getGreensvgiImageGallaryById(req.params.id);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Image Gallary fetched successfully', data: gallary });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Campus Greensvgi Image Gallary not found', error: err.message });
    }
}

async function updateGreensvgiImageGallary(req, res) {
    try {
        const gallary = await CampusGreensvgiService.updateGreensvgiImageGallary(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Image Gallary updated successfully', data: gallary });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update Campus Greensvgi Image Gallary', error: err.message });
    }
}

async function deleteGreensvgiImageGallary(req, res) {
    try {
        const gallary = await CampusGreensvgiService.deleteGreensvgiImageGallary(req.params.id);
        res.status(200).json({ success: true, message: 'Campus Greensvgi Image Gallary deleted successfully', data: gallary });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete Campus Greensvgi Image Gallary', error: err.message });
    }
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
