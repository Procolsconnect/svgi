const CampusPolicyService = require("../../services/campus/CampusPolicyService");

async function createPolicyHero(req, res) {
    try {
        const hero = await CampusPolicyService.createPolicyHero(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Policy Hero created successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Policy Hero",
            error: err.message,
        });
    }
}

async function getPolicyHero(req, res) {
    try {
        const heroes = await CampusPolicyService.getPolicyHero();
        res.status(200).json({
            success: true,
            message: "Campus Policy Heroes fetched successfully",
            data: heroes,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Policy Heroes",
            error: err.message,
        });
    }
}

async function getPolicyHeroById(req, res) {
    try {
        const hero = await CampusPolicyService.getPolicyHeroById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Policy Hero fetched successfully",
            data: hero,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Policy Hero not found",
            error: err.message,
        });
    }
}

async function updatePolicyHero(req, res) {
    try {
        const hero = await CampusPolicyService.updatePolicyHero(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Policy Hero updated successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Policy Hero",
            error: err.message,
        });
    }
}

async function deletePolicyHero(req, res) {
    try {
        const hero = await CampusPolicyService.deletePolicyHero(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Policy Hero deleted successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Policy Hero",
            error: err.message,
        });
    }
}

// Titles
async function createPolicyTitle(req, res) {
    try {
        const data = await CampusPolicyService.createPolicyTitle(req.body);
        res.status(201).json({
            success: true,
            message: "Campus Policy Title created successfully",
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Policy Title",
            error: err.message,
        });
    }
}

async function getPolicyTitle(req, res) {
    try {
        const datas = await CampusPolicyService.getPolicyTitle();
        res.status(200).json({
            success: true,
            message: "Campus Policy Titles fetched successfully",
            data: datas,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Policy Titles",
            error: err.message,
        });
    }
}

async function getPolicyTitleById(req, res) {
    try {
        const data = await CampusPolicyService.getPolicyTitleById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Policy Title fetched successfully",
            data: data,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Policy Title not found",
            error: err.message,
        });
    }
}

async function updatePolicyTitle(req, res) {
    try {
        const hero = await CampusPolicyService.updatePolicyTitle(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Campus Policy Title updated successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Policy Title",
            error: err.message,
        });
    }
}

async function deletePolicyTitle(req, res) {
    try {
        const hero = await CampusPolicyService.deletePolicyTitle(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Policy Title deleted successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Policy Title",
            error: err.message,
        });
    }
}

// Cards
async function createPolicyCard(req, res) {
    try {
        const hero = await CampusPolicyService.createPolicyCard(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Campus Policy Card created successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create Campus Policy Card",
            error: err.message,
        });
    }
}

async function getPolicyCard(req, res) {
    try {
        const heroes = await CampusPolicyService.getPolicyCard();
        res.status(200).json({
            success: true,
            message: "Campus Policy Cards fetched successfully",
            data: heroes,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Campus Policy Cards",
            error: err.message,
        });
    }
}

async function getPolicyCardById(req, res) {
    try {
        const hero = await CampusPolicyService.getPolicyCardById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Policy Card fetched successfully",
            data: hero,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Campus Policy Card not found",
            error: err.message,
        });
    }
}

async function updatePolicyCard(req, res) {
    try {
        const hero = await CampusPolicyService.updatePolicyCard(req.params.id, req.body, req.file);
        res.status(200).json({
            success: true,
            message: "Campus Policy Card updated successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Campus Policy Card",
            error: err.message,
        });
    }
}

async function deletePolicyCard(req, res) {
    try {
        const hero = await CampusPolicyService.deletePolicyCard(req.params.id);
        res.status(200).json({
            success: true,
            message: "Campus Policy Card deleted successfully",
            data: hero,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Campus Policy Card",
            error: err.message,
        });
    }
}

module.exports = {
    createPolicyHero,
    getPolicyHero,
    getPolicyHeroById,
    updatePolicyHero,
    deletePolicyHero,
    createPolicyTitle,
    getPolicyTitle,
    getPolicyTitleById,
    updatePolicyTitle,
    deletePolicyTitle,
    createPolicyCard,
    getPolicyCard,
    getPolicyCardById,
    updatePolicyCard,
    deletePolicyCard,
};