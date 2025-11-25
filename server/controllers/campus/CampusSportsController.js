const CampusSportsService = require("../../services/campus/CampusSportsService");

async function createSportsHero(req, res) {
    try {
        const hero = await CampusSportsService.createSportsHero(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Sports Hero created successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Sports Hero",
            error: err.message,
        });
    }
}

async function getSportsHero(req, res) {
    try {
        const heroes = await CampusSportsService.getSportsHero();
        res.status(200).json({
            success: true,
            message: "Campus Sports Heroes fetched successfully",
            data: heroes,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Sports Heroes",
            error: err.message,
        });
    }
}

async function getSportsHeroById(req, res) {
    try {
        const hero = await CampusSportsService.getSportsHeroById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Hero fetched successfully",
            data: hero,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Sports Hero not found",
            error: err.message,
        });
    }
}

async function updateSportsHero(req, res) {
    try {
        const hero = await CampusSportsService.updateSportsHero(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Sports Hero updated successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Sports Hero",
            error: err.message,
        });
    }
}

async function deleteSportsHero(req, res) {
    try {
        const hero = await CampusSportsService.deleteSportsHero(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Hero deleted successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Sports Hero",
            error: err.message,
        });
    }
}

// --------- Sports Card handlers (use same controller)
async function createSportsCard(req, res) {
    try {
        const card = await CampusSportsService.createSportsCard(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Sports Card created successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Sports Card",
            error: err.message,
        });
    }
}

async function getSportsCard(req, res) {
    try {
        const cards = await CampusSportsService.getSportsCard();
        res.status(200).json({
            success: true,
            message: "Campus Sports Cards fetched successfully",
            data: cards,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Sports Cards",
            error: err.message,
        });
    }
}

async function getSportsCardById(req, res) {
    try {
        const card = await CampusSportsService.getSportsCardById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Card fetched successfully",
            data: card,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Sports Card not found",
            error: err.message,
        });
    }
}

async function updateSportsCard(req, res) {
    try {
        const card = await CampusSportsService.updateSportsCard(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Sports Card updated successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Sports Card",
            error: err.message,
        });
    }
}

async function deleteSportsCard(req, res) {
    try {
        const card = await CampusSportsService.deleteSportsCard(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Card deleted successfully",
            data: card,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Sports Card",
            error: err.message,
        });
    }
}

// --------- Sports Acheivement handlers (use same controller)
async function createSportsAcheivement(req, res) {
    try {
        const item = await CampusSportsService.createSportsAcheivement(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Sports Acheivement created successfully",
            data: item,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Sports Acheivement",
            error: err.message,
        });
    }
}

async function getSportsAcheivement(req, res) {
    try {
        const items = await CampusSportsService.getSportsAcheivement();
        res.status(200).json({
            success: true,
            message: "Campus Sports Acheivements fetched successfully",
            data: items,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Sports Acheivements",
            error: err.message,
        });
    }
}

async function getSportsAcheivementById(req, res) {
    try {
        const item = await CampusSportsService.getSportsAcheivementById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Acheivement fetched successfully",
            data: item,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Sports Acheivement not found",
            error: err.message,
        });
    }
}

async function updateSportsAcheivement(req, res) {
    try {
        const item = await CampusSportsService.updateSportsAcheivement(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Sports Acheivement updated successfully",
            data: item,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Sports Acheivement",
            error: err.message,
        });
    }
}

async function deleteSportsAcheivement(req, res) {
    try {
        const item = await CampusSportsService.deleteSportsAcheivement(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Acheivement deleted successfully",
            data: item,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Sports Acheivement",
            error: err.message,
        });
    }
}

// --------- Sports Video handlers (use same controller)
async function createSportsVideo(req, res) {
    try {
        const vid = await CampusSportsService.createSportsVideo(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Sports Video created successfully",
            data: vid,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Sports Video",
            error: err.message,
        });
    }
}

async function getSportsVideo(req, res) {
    try {
        const vids = await CampusSportsService.getSportsVideo();
        res.status(200).json({
            success: true,
            message: "Campus Sports Videos fetched successfully",
            data: vids,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Sports Videos",
            error: err.message,
        });
    }
}

async function getSportsVideoById(req, res) {
    try {
        const vid = await CampusSportsService.getSportsVideoById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Video fetched successfully",
            data: vid,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Sports Video not found",
            error: err.message,
        });
    }
}

async function updateSportsVideo(req, res) {
    try {
        const vid = await CampusSportsService.updateSportsVideo(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Sports Video updated successfully",
            data: vid,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Sports Video",
            error: err.message,
        });
    }
}

async function deleteSportsVideo(req, res) {
    try {
        const vid = await CampusSportsService.deleteSportsVideo(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Video deleted successfully",
            data: vid,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Sports Video",
            error: err.message,
        });
    }
}

// --------- Sports Athelets handlers (use same controller)
async function createSportsAthelet(req, res) {
    try {
        const item = await CampusSportsService.createSportsAthelet(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Sports Athelet created successfully",
            data: item,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Sports Athelet",
            error: err.message,
        });
    }
}

async function getSportsAthelet(req, res) {
    try {
        const items = await CampusSportsService.getSportsAthelet();
        res.status(200).json({
            success: true,
            message: "Campus Sports Athelets fetched successfully",
            data: items,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Sports Athelets",
            error: err.message,
        });
    }
}

async function getSportsAtheletById(req, res) {
    try {
        const item = await CampusSportsService.getSportsAtheletById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Athelet fetched successfully",
            data: item,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Sports Athelet not found",
            error: err.message,
        });
    }
}

async function updateSportsAthelet(req, res) {
    try {
        const item = await CampusSportsService.updateSportsAthelet(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Sports Athelet updated successfully",
            data: item,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Sports Athelet",
            error: err.message,
        });
    }
}

async function deleteSportsAthelet(req, res) {
    try {
        const item = await CampusSportsService.deleteSportsAthelet(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Sports Athelet deleted successfully",
            data: item,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Sports Athelet",
            error: err.message,
        });
    }
}

module.exports = {
    createSportsHero,
    getSportsHero,
    getSportsHeroById,
    updateSportsHero,
    deleteSportsHero,
    createSportsCard,
    getSportsCard,
    getSportsCardById,
    updateSportsCard,
    deleteSportsCard,
    createSportsAcheivement,
    getSportsAcheivement,
    getSportsAcheivementById,
    updateSportsAcheivement,
    deleteSportsAcheivement,
    createSportsVideo,
    getSportsVideo,
    getSportsVideoById,
    updateSportsVideo,
    deleteSportsVideo,
    createSportsAthelet,
    getSportsAthelet,
    getSportsAtheletById,
    updateSportsAthelet,
    deleteSportsAthelet,
};

