const OverviewService = require("../../services/about/VisMisService");

// HERO
exports.createVMHero = async (req, res) => {
    try {
        const data = await OverviewService.createVMHero(req.body, req.file);
        res.status(201).json({ success: true, message: "Hero created", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getOverviewHero = async (req, res) => {
    try {
        const data = await OverviewService.getVMHero();
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getOverviewHeroById = async (req, res) => {
    try {
        const data = await OverviewService.getVMHeroByID(req.params.id);
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

exports.updateOverviewHero = async (req, res) => {
    try {
        const data = await OverviewService.updateVMHero(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Hero updated", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.deleteOverviewHero = async (req, res) => {
    try {
        await OverviewService.deleteVMHero(req.params.id);
        res.status(200).json({ success: true, message: "Hero deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// ----------------------- Card Section --------------------------
exports.createVMCard = async(req, res) =>{
    try {
        const card = await OverviewService.createVMCard(req.body, req.file);
        res.status(201).json({ success: true, message: "Card created", data: card })
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create Card", error: err.message });
    }
}

exports.getVMCard = async(req, res) =>{
    try {
        const card = await OverviewService.getVMCard();
        res.status(200).json({ success: true, message: "Card Fetched Successfully", data: card });
    } catch (err) {
        res.status(500).json({ success: false, message: "Card Fetch Failed", error: err.message });
    }
}