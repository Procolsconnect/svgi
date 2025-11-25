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

module.exports = {
    createGreensvgiHero,
    getGreensvgiHero,
    getGreensvgiHeroById,
    updateGreensvgiHero,
    deleteGreensvgiHero,
};
