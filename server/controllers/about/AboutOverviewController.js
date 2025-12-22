
const OverviewService = require("../../services/about/AboutOverviewService");

// HERO
const createOverviewHero = async (req, res) => {
    try {
        const data = await OverviewService.createOverviewHero(req.body, req.file);
        res.status(201).json({ success: true, message: "Hero created", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const getOverviewHero = async (req, res) => {
    try {
        const data = await OverviewService.getOverviewHero();
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const getOverviewHeroById = async (req, res) => {
    try {
        const data = await OverviewService.getOverviewHeroById(req.params.id);
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

const updateOverviewHero = async (req, res) => {
    try {
        const data = await OverviewService.updateOverviewHero(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Hero updated", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const deleteOverviewHero = async (req, res) => {
    try {
        await OverviewService.deleteOverviewHero(req.params.id);
        res.status(200).json({ success: true, message: "Hero deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};


/* ============================
    INTRO
============================ */

const createOverviewIntro = async (req, res) => {
    try {
        const data = await OverviewService.createOverviewIntro(req.body, req.files);
        res.status(201).json({ success: true, message: "Intro created", data });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

const getAllOverviewIntro = async (req, res) => {
    try {
        const data = await OverviewService.getAllOverviewIntro();
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const getOverviewIntroById = async (req, res) => {
    try {
        const data = await OverviewService.getOverviewIntroById(req.params.id);
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

const updateOverviewIntro = async (req, res) => {
    try {
        const data = await OverviewService.updateOverviewIntro(req.params.id, req.body, req.files);
        res.status(200).json({ success: true, message: "Intro updated", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const deleteOverviewIntro = async (req, res) => {
    try {
        await OverviewService.deleteOverviewIntro(req.params.id);
        res.status(200).json({ success: true, message: "Intro deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

/* ============================
    GRID
============================ */

const createOverviewGrid = async (req, res) => {
    try {
        const data = await OverviewService.createOverviewGrid(req.body, req.files);
        res.status(201).json({ success: true, message: "Grid created", data });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

const getAllOverviewGrid = async (req, res) => {
    try {
        const data = await OverviewService.getAllOverviewGrid();
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const getOverviewGridById = async (req, res) => {
    try {
        const data = await OverviewService.getOverviewGridById(req.params.id);
        res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

const updateOverviewGrid = async (req, res) => {
    try {
        const data = await OverviewService.updateOverviewGrid(req.params.id, req.body, req.files);
        res.status(200).json({ success: true, message: "Grid updated", data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const deleteOverviewGrid = async (req, res) => {
    try {
        await OverviewService.deleteOverviewGrid(req.params.id);
        res.status(200).json({ success: true, message: "Grid deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};


module.exports = {
    createOverviewHero, getOverviewHero, getOverviewHeroById, updateOverviewHero, deleteOverviewHero,
    createOverviewIntro, getAllOverviewIntro, getOverviewIntroById, updateOverviewIntro, deleteOverviewIntro,
    createOverviewGrid, getAllOverviewGrid, getOverviewGridById, updateOverviewGrid, deleteOverviewGrid
};
