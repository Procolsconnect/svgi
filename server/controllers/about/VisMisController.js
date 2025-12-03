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

exports.getVMCardByID = async(req, res) =>{
    try {
        const card = await OverviewService.getVMCardByID(req.params.id);
        res.status(200).json({ success: true, message: "Card Fetched Successfully", data: card });
    } catch (error) {
        res.status(404).json({ success: false, message: "Card Fetch Failed", error: err.message });
    }
}

exports.updateVMCard = async (req, res) => {
    try {
        const data = await OverviewService.updateVMCard(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Card updated", data });
    } catch (err) {
        res.status(500).json({ success: false, message: "Card update Failed", error: err.message });
    }
};

exports.deleteVMCard = async (req, res) => {
    try {
        await OverviewService.deleteVMCard(req.params.id);
        res.status(200).json({ success: true, message: "Card deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// -------------------- Vis Mis section -----------------------


exports.createMVVSection = async (req, res) => {
    try {
        const result = await OverviewService.createMVVSection(req.body);
        res.json({ success: true, message: "MVV Created", data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getAllMVVSections = async (req, res) => {
    try {
        const result = await OverviewService.getAllMVVSections();
        res.json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getMVVSectionById = async (req, res) => {
    try {
        const result = await OverviewService.getMVVSectionById(req.params.id);
        res.json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.updateMVVSection = async (req, res) => {
    try {
        const result = await OverviewService.updateMVVSection(req.params.id, req.body);
        res.json({ success: true, message: "MVV Updated", data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.deleteMVVSection = async (req, res) => {
    try {
        await OverviewService.deleteMVVSection(req.params.id);
        res.json({ success: true, message: "MVV Deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};



// ------------------------ Circular Section ------------------------
exports.createCampusCircle = async (req, res) => {
    try {
        const data = await OverviewService.createCampusCircle(req.body, req.file);
        res.status(201).json({ success: true, message: "Campus Circle created", data });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Campus Circle", error: err.message });
    }
};

exports.getCampusCircles = async (req, res) => {
    try {
        const data = await OverviewService.getCampusCircles();
        res.status(200).json({ success: true, message: "Campus Circles fetched", data });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Circles", error: err.message });
    }
};

exports.getCampusCircleById = async (req, res) => {
    try {
        const data = await OverviewService.getCampusCircleById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Circle fetched", data });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Circle not found", error: err.message });
    }
};

exports.updateCampusCircle = async (req, res) => {
    try {
        const data = await OverviewService.updateCampusCircle(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Campus Circle updated", data });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Circle", error: err.message });
    }
};

exports.deleteCampusCircle = async (req, res) => {
    try {
        await OverviewService.deleteCampusCircle(req.params.id);
        res.status(200).json({ success: true, message: "Campus Circle deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Circle", error: err.message });
    }
};
