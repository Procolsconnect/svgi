const leadershipService = require("../../services/about/leadershipService");

// -------- HERO CONTROLLERS --------
async function createHeroController(req, res) {
    try {
        const hero = await leadershipService.createHero(req.body, req.file);
        res.json({ success: true, data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create hero", error: err.message });
    }
}
async function getHeroController(req, res) {
    try {
        const hero = await leadershipService.getHero();
        res.json({ success: true, data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch hero", error: err.message });
    }
}
async function updateHeroController(req, res) {
    try {
        const hero = await leadershipService.updateHero(req.params.id, req.body);
        res.json({ success: true, data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update hero", error: err.message });
    }
}
async function deleteHeroController(req, res) {
    try {
        await leadershipService.deleteHero(req.params.id);
        res.json({ success: true, message: "Hero deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete hero", error: err.message });
    }
}

// -------- MATERIAL CARD CONTROLLERS --------
async function createMaterialCardController(req, res) {
    try {
        const card = await leadershipService.createMaterialCard(req.body);
        res.json({ success: true, data: card });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create material card", error: err.message });
    }
}
async function getMaterialCardsController(req, res) {
    try {
        const cards = await leadershipService.getMaterialCards();
        res.json({ success: true, data: cards });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch material cards", error: err.message });
    }
}
async function updateMaterialCardController(req, res) {
    try {
        const card = await leadershipService.updateMaterialCard(req.params.id, req.body);
        res.json({ success: true, data: card });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update material card", error: err.message });
    }
}
async function deleteMaterialCardController(req, res) {
    try {
        await leadershipService.deleteMaterialCard(req.params.id);
        res.json({ success: true, message: "Material card deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete material card", error: err.message });
    }
}

// -------- QUOTE CARD CONTROLLERS --------
async function createQuoteController(req, res) {
    try {
        const quote = await leadershipService.createQuote(req.body, req.file);
        res.json({ success: true, data: quote });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create quote", error: err.message });
    }
}
async function getQuotesController(req, res) {
    try {
        const quotes = await leadershipService.getQuotes();
        res.json({ success: true, data: quotes });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch quotes", error: err.message });
    }
}
async function updateQuoteController(req, res) {
    try {
        const quote = await leadershipService.updateQuote(req.params.id, req.body);
        res.json({ success: true, data: quote });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update quote", error: err.message });
    }
}
async function deleteQuoteController(req, res) {
    try {
        await leadershipService.deleteQuote(req.params.id);
        res.json({ success: true, message: "Quote deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete quote", error: err.message });
    }
}

module.exports = {
    createHeroController,
    getHeroController,
    updateHeroController,
    deleteHeroController,
    createMaterialCardController,
    getMaterialCardsController,
    updateMaterialCardController,
    deleteMaterialCardController,
    createQuoteController,
    getQuotesController,
    updateQuoteController,
    deleteQuoteController
};
