const CampusHealthService = require("../../services/campus/CampusHealthService");

async function createHealthHero(req, res) {
    try {
        const hero = await CampusHealthService.createHealthHero(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Health Hero created successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Health Hero",
            error: err.message,
        });
    }
}

async function getHealthHero(req, res) {
    try {
        const heroes = await CampusHealthService.getHealthHero();
        res.status(200).json({
            success: true,
            message: "Campus Health Heroes fetched successfully",
            data: heroes,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Health Heroes",
            error: err.message,
        });
    }
}

async function getHealthHeroById(req, res) {
    try {
        const hero = await CampusHealthService.getHealthHeroById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Health Hero fetched successfully",
            data: hero,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Health Hero not found",
            error: err.message,
        });
    }
}

async function updateHealthHero(req, res) {
    try {
        const hero = await CampusHealthService.updateHealthHero(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Health Hero updated successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Health Hero",
            error: err.message,
        });
    }
}

async function deleteHealthHero(req, res) {
    try {
        const hero = await CampusHealthService.deleteHealthHero(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Health Hero deleted successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Health Hero",
            error: err.message,
        });
    }
}

// Health Card handlers
async function createHealthCard(req, res) {
    try {
        const card = await CampusHealthService.createHealthCard(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Health Card created successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Health Card",
            error: err.message,
        });
    }
}

async function getHealthCard(req, res) {
    try {
        const cards = await CampusHealthService.getHealthCard();
        res.status(200).json({
            success: true,
            message: "Campus Health Cards fetched successfully",
            data: cards,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Health Cards",
            error: err.message,
        });
    }
}

async function getHealthCardById(req, res) {
    try {
        const card = await CampusHealthService.getHealthCardById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Health Card fetched successfully",
            data: card,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Health Card not found",
            error: err.message,
        });
    }
}

async function updateHealthCard(req, res) {
    try {
        const card = await CampusHealthService.updateHealthCard(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Health Card updated successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Health Card",
            error: err.message,
        });
    }
}

async function deleteHealthCard(req, res) {
    try {
        const card = await CampusHealthService.deleteHealthCard(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Health Card deleted successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Health Card",
            error: err.message,
        });
    }
}

module.exports = {
    createHealthHero,
    getHealthHero,
    getHealthHeroById,
    updateHealthHero,
    deleteHealthHero,
    // Health Card
    createHealthCard,
    getHealthCard,
    getHealthCardById,
    updateHealthCard,
    deleteHealthCard,
};
