const CampusFestivalService = require("../../services/campus/CampusFestivalService");

async function createFestivalHero(req, res) {
    try {
        const hero = await CampusFestivalService.createFestivalHero(req.body, req.file);
        res.status(201).json({ success: true, message: "Campus Festival Hero created successfully", data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Campus Festival Hero", error: err.message });
    }
}

async function getFestivalHero(req, res) {
    try {
        const heroes = await CampusFestivalService.getFestivalHero();
        res.status(200).json({ success: true, message: "Campus Festival Heroes fetched successfully", data: heroes });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Festival Heroes", error: err.message });
    }
}

async function getFestivalHeroById(req, res) {
    try {
        const hero = await CampusFestivalService.getFestivalHeroById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Festival Hero fetched successfully", data: hero });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Festival Hero not found", error: err.message });
    }
}

async function updateFestivalHero(req, res) {
    try {
        const hero = await CampusFestivalService.updateFestivalHero(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Campus Festival Hero updated successfully", data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Festival Hero", error: err.message });
    }
}

async function deleteFestivalHero(req, res) {
    try {
        const hero = await CampusFestivalService.deleteFestivalHero(req.params.id);
        res.status(200).json({ success: true, message: "Campus Festival Hero deleted successfully", data: hero });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Festival Hero", error: err.message });
    }
}

// Festival Card handlers (delegating to CampusFestivalService)
async function createFestivalCard(req, res) {
    try {
        const card = await CampusFestivalService.createFestivalCard(req.body, req.file);
        res.status(201).json({ success: true, message: "Campus Festival Card created successfully", data: card });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Campus Festival Card", error: err.message });
    }
}

async function getFestivalCard(req, res) {
    try {
        const cards = await CampusFestivalService.getFestivalCard();
        res.status(200).json({ success: true, message: "Campus Festival Cards fetched successfully", data: cards });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Festival Cards", error: err.message });
    }
}

async function getFestivalCardById(req, res) {
    try {
        const card = await CampusFestivalService.getFestivalCardById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Festival Card fetched successfully", data: card });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Festival Card not found", error: err.message });
    }
}

async function updateFestivalCard(req, res) {
    try {
        const card = await CampusFestivalService.updateFestivalCard(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Campus Festival Card updated successfully", data: card });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Festival Card", error: err.message });
    }
}

async function deleteFestivalCard(req, res) {
    try {
        const card = await CampusFestivalService.deleteFestivalCard(req.params.id);
        res.status(200).json({ success: true, message: "Campus Festival Card deleted successfully", data: card });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Festival Card", error: err.message });
    }
}

// Festival Event handlers
async function createFestivalEvent(req, res) {
    try {
        const event = await CampusFestivalService.createFestivalEvent(req.body, req.file);
        res.status(201).json({ success: true, message: "Campus Festival Event created successfully", data: event });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Campus Festival Event", error: err.message });
    }
}

async function getFestivalEvent(req, res) {
    try {
        const events = await CampusFestivalService.getFestivalEvent();
        res.status(200).json({ success: true, message: "Campus Festival Events fetched successfully", data: events });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch Campus Festival Events", error: err.message });
    }
}

async function getFestivalEventById(req, res) {
    try {
        const event = await CampusFestivalService.getFestivalEventById(req.params.id);
        res.status(200).json({ success: true, message: "Campus Festival Event fetched successfully", data: event });
    } catch (err) {
        res.status(404).json({ success: false, message: "Campus Festival Event not found", error: err.message });
    }
}

async function updateFestivalEvent(req, res) {
    try {
        const event = await CampusFestivalService.updateFestivalEvent(req.params.id, req.body, req.file);
        res.status(200).json({ success: true, message: "Campus Festival Event updated successfully", data: event });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update Campus Festival Event", error: err.message });
    }
}

async function deleteFestivalEvent(req, res) {
    try {
        const event = await CampusFestivalService.deleteFestivalEvent(req.params.id);
        res.status(200).json({ success: true, message: "Campus Festival Event deleted successfully", data: event });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete Campus Festival Event", error: err.message });
    }
}

module.exports = {
    createFestivalHero,
    getFestivalHero,
    getFestivalHeroById,
    updateFestivalHero,
    deleteFestivalHero,
    // Festival Card handlers (moved into FestivalController)
    createFestivalCard,
    getFestivalCard,
    getFestivalCardById,
    updateFestivalCard,
    deleteFestivalCard,
    // Festival Event handlers
    createFestivalEvent,
    getFestivalEvent,
    getFestivalEventById,
    updateFestivalEvent,
    deleteFestivalEvent,
};

