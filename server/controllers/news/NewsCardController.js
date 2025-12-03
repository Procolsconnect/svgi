const NewsCard = require("../../services/news/NewsCardService.js");

async function createNewsCardController(req, res) {
    try {
        const data = {
            image: req.file?.path,
            title: req.body.title,
            description: req.body.description,
        };

        const result = await NewsCard.createNewsCard(data);

        res.json({
            success: true,
            message: "NewsCard created successfully",
            data: result,
            error: null,
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to create NewsCard",
            data: null,
            error: err.message,
        });
    }
}

async function getNewsCardController(req, res) {
    try {
        const result = await NewsCard.getNewsCard();

        res.json({
            success: true,
            message: "NewsCard fetched successfully",
            data: result,
            error: null,
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to fetch NewsCard",
            data: null,
            error: err.message,
        });
    }
}

async function updateNewsCardController(req, res) {
    try {
        const data = {
            image: req.file?.path,
            title: req.body.title,
            description: req.body.description,
        };

        const result = await NewsCard.updateNewsCard(req.params.id, data);

        res.json({
            success: true,
            message: "NewsCard updated successfully",
            data: result,
            error: null,
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to update NewsCard",
            data: null,
            error: err.message,
        });
    }
}

async function deleteNewsCardController(req, res) {
    try {
        const result = await NewsCard.deleteNewsCard(req.params.id);

        res.json({
            success: true,
            message: "NewsCard deleted successfully",
            data: result,
            error: null,
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to delete NewsCard",
            data: null,
            error: err.message,
        });
    }
}

module.exports = {
    createNewsCardController,
    getNewsCardController,
    updateNewsCardController,
    deleteNewsCardController,
};
