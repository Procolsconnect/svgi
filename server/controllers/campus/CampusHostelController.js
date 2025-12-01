const CampusHostelService = require("../../services/campus/CampusHostelService");

async function createHostelHero(req, res) {
    try {
        const hero = await CampusHostelService.createHostelHero(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Hostel Hero created successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Hostel Hero",
            error: err.message,
        });
    }
}

async function getHostelHero(req, res) {
    try {
        const heroes = await CampusHostelService.getHostelHero();
        res.status(200).json({
            success: true,
            message: "Campus Hostel Heroes fetched successfully",
            data: heroes,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Hostel Heroes",
            error: err.message,
        });
    }
}

async function getHostelHeroById(req, res) {
    try {
        const hero = await CampusHostelService.getHostelHeroById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Hostel Hero fetched successfully",
            data: hero,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Hostel Hero not found",
            error: err.message,
        });
    }
}

async function updateHostelHero(req, res) {
    try {
        const hero = await CampusHostelService.updateHostelHero(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Hostel Hero updated successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Hostel Hero",
            error: err.message,
        });
    }
}

async function deleteHostelHero(req, res) {
    try {
        const hero = await CampusHostelService.deleteHostelHero(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Hostel Hero deleted successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Hostel Hero",
            error: err.message,
        });
    }
}

// Hostel Card handlers
async function createHostelCard(req, res) {
    try {
        const card = await CampusHostelService.createHostelCard(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Hostel Card created successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Hostel Card",
            error: err.message,
        });
    }
}

async function getHostelCard(req, res) {
    try {
        const cards = await CampusHostelService.getHostelCard();
        res.status(200).json({
            success: true,
            message: "Campus Hostel Cards fetched successfully",
            data: cards,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Hostel Cards",
            error: err.message,
        });
    }
}

async function getHostelCardById(req, res) {
    try {
        const card = await CampusHostelService.getHostelCardById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Hostel Card fetched successfully",
            data: card,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Hostel Card not found",
            error: err.message,
        });
    }
}

async function updateHostelCard(req, res) {
    try {
        const card = await CampusHostelService.updateHostelCard(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Hostel Card updated successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Hostel Card",
            error: err.message,
        });
    }
}

async function deleteHostelCard(req, res) {
    try {
        const card = await CampusHostelService.deleteHostelCard(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Hostel Card deleted successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Hostel Card",
            error: err.message,
        });
    }
}

// Hostel FAQ handlers
async function createHostelFaq(req, res) {
    try {
        const faq = await CampusHostelService.createHostelFaq(req.body);
        res.status(201).json({
            success: true,
            message: "Campus Hostel FAQ created successfully",
            data: faq,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Hostel FAQ",
            error: err.message,
        });
    }
}

async function getHostelFaq(req, res) {
    try {
        const faqs = await CampusHostelService.getHostelFaq();
        res.status(200).json({
            success: true,
            message: "Campus Hostel FAQs fetched successfully",
            data: faqs,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Hostel FAQs",
            error: err.message,
        });
    }
}

async function getHostelFaqById(req, res) {
    try {
        const faq = await CampusHostelService.getHostelFaqById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Hostel FAQ fetched successfully",
            data: faq,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Hostel FAQ not found",
            error: err.message,
        });
    }
}

async function updateHostelFaq(req, res) {
    try {
        const faq = await CampusHostelService.updateHostelFaq(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Campus Hostel FAQ updated successfully",
            data: faq,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Hostel FAQ",
            error: err.message,
        });
    }
}

async function deleteHostelFaq(req, res) {
    try {
        const faq = await CampusHostelService.deleteHostelFaq(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Hostel FAQ deleted successfully",
            data: faq,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Hostel FAQ",
            error: err.message,
        });
    }
}

module.exports = {
    createHostelHero,
    getHostelHero,
    getHostelHeroById,
    updateHostelHero,
    deleteHostelHero,
    // Hostel Card
    createHostelCard,
    getHostelCard,
    getHostelCardById,
    updateHostelCard,
    deleteHostelCard,
    // Hostel FAQ
    createHostelFaq,
    getHostelFaq,
    getHostelFaqById,
    updateHostelFaq,
    deleteHostelFaq,
};
