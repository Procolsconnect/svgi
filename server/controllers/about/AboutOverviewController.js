const OverviewService = require("../../services/about/AboutOverviewService");

// HERO
exports.createOverviewHero = async (req, res) => {
    try {
        const data = await OverviewService.createOverviewHero(req.body, req.file);
        res.status(201).json({ success: true, message: "Hero created", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getOverviewHero = async (req, res) => {
    try {
        const data = await OverviewService.getOverviewHero();
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getOverviewHeroById = async (req, res) => {
    try {
        const data = await OverviewService.getOverviewHeroById(req.params.id);
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

exports.updateOverviewHero = async (req, res) => {
    try {
        const data = await OverviewService.updateOverviewHero(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Hero updated", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.deleteOverviewHero = async (req, res) => {
    try {
        await OverviewService.deleteOverviewHero(req.params.id);
        res.status(200).json({ success: true, message: "Hero deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};


/* ============================
    CONTENT
============================ */

exports.createOverview = async (req, res) => {
    try {
        const data = await OverviewService.createOverview(req.body, req.files);
        res.status(201).json({ success: true, message: "Overview created", data });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.getAllOverview = async (req, res) => {
    try {
        const data = await OverviewService.getAllOverview();
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getOverviewById = async (req, res) => {
    try {
        const data = await OverviewService.getOverviewById(req.params.id);
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

exports.updateOverview = async (req, res) => {
    try {
        const data = await OverviewService.updateOverview(req.params.id, req.body, req.files);
        res.status(200).json({ success: true, message: "Overview updated", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.deleteOverview = async (req, res) => {
    try {
        await OverviewService.deleteOverview(req.params.id);
        res.status(200).json({ success: true, message: "Overview deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
