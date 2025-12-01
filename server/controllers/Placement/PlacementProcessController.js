const PlacementProcess = require("../../services/placement/PlacementProcessService");

async function createPlacementProcessHeroController(req, res) {
    try {
        const data = await PlacementProcess.createPlacementProcessHero(req.body, req.file);
        res.json({
            success: true,
            message: "PlacementProcessHero created successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to create PlacementProcessHero",
            data: null,
            error,
        });
    }
}

async function getPlacementProcessHeroController(req, res) {
    try {
        const data = await PlacementProcess.getPlacementProcessHero();
        res.json({
            success: true,
            message: "PlacementProcessHero fetched successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to fetch PlacementProcessHero",
            data: null,
            error,
        });
    }
}

async function updatePlacementProcessHeroController(req, res) {
    try {
        const data = await PlacementProcess.updatePlacementProcessHero(req.params.id, req.body, req.file);
        res.json({
            success: true,
            message: "PlacementProcessHero updated successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to update PlacementProcessHero",
            data: null,
            error,
        });
    }
}

async function deletePlacementProcessHeroController(req, res) {
    try {
        const data = await PlacementProcess.deletePlacementProcessHero(req.params.id);
        res.json({
            success: true,
            message: "PlacementProcessHero deleted successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to delete PlacementProcessHero",
            data: null,
            error,
        });
    }
}


async function createPlacementProcessCard(req, res) {
    try {
        const data = await PlacementProcess.createPlacementProcessCard(req.body, req.file);
        res.json({
            success: true,
            message: "PlacementProcessCard created successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to create PlacementProcessCard",
            data: null,
            error,
        });
    }
}

async function getPlacementProcessCard(req, res) {
    try {
        const data = await PlacementProcess.getPlacementProcessCard();
        res.json({
            success: true,
            message: "PlacementProcessCard fetched successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to fetch PlacementProcessCard",
            data: null,
            error,
        });
    }
}

async function updatePlacementProcessCard(req, res) {
    try {
        const data = await PlacementProcess.updatePlacementProcessCard(req.params.id, req.body, req.file);
        res.json({
            success: true,
            message: "PlacementProcessCard updated successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to update PlacementProcessCard",
            data: null,
            error,
        });
    }
}

async function deletePlacementProcessCard(req, res) {
    try {
        const data = await PlacementProcess.deletePlacementProcessCard(req.params.id);
        res.json({
            success: true,
            message: "PlacementProcessCard deleted successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to delete PlacementProcessCard",
            data: null,
            error,
        });
    }
}


async function createPlacementProcessCompanyController(req, res) {
    try {
        const data = await PlacementProcess.createPlacementProcessCompany(req.body, req.file);
        res.json({
            success: true,
            message: "PlacementProcessCompany created successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to create PlacementProcessCompany",
            data: null,
            error,
        });
    }
}

async function getPlacementProcessCompanyController(req, res) {
    try {
        const data = await PlacementProcess.getPlacementProcessCompany();
        res.json({
            success: true,
            message: "PlacementProcessCompany fetched successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to fetch PlacementProcessCompany",
            data: null,
            error,
        });
    }
}

async function updatePlacementProcessCompanyController(req, res) {
    try {
        const data = await PlacementProcess.updatePlacementProcessCompany(req.params.id, req.body, req.file);
        res.json({
            success: true,
            message: "PlacementProcessCompany updated successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to update PlacementProcessCompany",
            data: null,
            error,
        });
    }
}

async function deletePlacementProcessCompanyController(req, res) {
    try {
        const data = awaitPlacementProcess.deletePlacementProcessCompany(req.params.id);
        res.json({
            success: true,
            message: "PlacementProcessCompany deleted successfully",
            data,
            error: null,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to delete PlacementProcessCompany",
            data: null,
            error,
        });
    }
}


module.exports = {
    createPlacementProcessHeroController,
    getPlacementProcessHeroController,
    updatePlacementProcessHeroController,
    deletePlacementProcessHeroController,
    createPlacementProcessCard,
    getPlacementProcessCard,
    updatePlacementProcessCard,
    deletePlacementProcessCard,
    createPlacementProcessCompanyController,
    getPlacementProcessCompanyController,
    updatePlacementProcessCompanyController,
    deletePlacementProcessCompanyController,
};
